/**
 * Automated Test Suite for Agriculture Extension SF Rahu (AESFR) Backend API
 * Tests health, weather, schemes, notices, circles, admin authentication, and Gemini input validation.
 */

async function runTests() {
  const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';
  console.log(`\n======================================================`);
  console.log(` Running AESFR API Verification Suite against ${BASE_URL}`);
  console.log(`======================================================\n`);

  let passed = 0;
  let failed = 0;

  async function test(name: string, fn: () => Promise<void>) {
    try {
      await fn();
      console.log(`  [PASS] ${name}`);
      passed++;
    } catch (err: unknown) {
      console.error(`  [FAIL] ${name}:`, err instanceof Error ? err.message : err);
      failed++;
    }
  }

  // Test 1: Health Endpoint
  await test('GET /api/health returns healthy status and SF Rahu location', async () => {
    const res = await fetch(`${BASE_URL}/api/health`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (data.status !== 'healthy') throw new Error(`Expected healthy, got ${data.status}`);
    if (!data.location.includes('Shaheed Fazil Rahu')) throw new Error('Location mismatch');
  });

  // Test 2: Live Weather with Open-Meteo
  await test('GET /api/weather returns valid Open-Meteo data for Golarchi', async () => {
    const res = await fetch(`${BASE_URL}/api/weather?lat=24.5886&lon=68.5298&name=Golarchi&district=Badin`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (typeof data.temperature !== 'number') throw new Error('Expected numeric temperature');
    if (!data.provider.includes('Open-Meteo')) throw new Error('Missing Open-Meteo attribution');
    if (!Array.isArray(data.dailyForecast) || data.dailyForecast.length === 0) {
      throw new Error('Missing daily forecast items');
    }
  });

  // Test 3: Schemes Endpoint
  await test('GET /api/schemes returns verified Sindh agriculture schemes', async () => {
    const res = await fetch(`${BASE_URL}/api/schemes`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.schemes) || data.schemes.length === 0) throw new Error('Empty schemes list');
    const hariCard = data.schemes.find((s: any) => s.id === 'sindh-hari-card');
    if (!hariCard) throw new Error('Sindh Hari Card scheme missing');
  });

  // Test 4: Notices Endpoint
  await test('GET /api/notices returns department notices and pest alerts', async () => {
    const res = await fetch(`${BASE_URL}/api/notices`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.notices) || data.notices.length === 0) throw new Error('Empty notices list');
  });

  // Test 5: SF Rahu Circles Endpoint
  await test('GET /api/circles returns all 5 seeded SF Rahu circles and officers', async () => {
    const res = await fetch(`${BASE_URL}/api/circles`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.circles) || data.circles.length < 5) throw new Error('Expected at least 5 circles');
    const officerNames = data.circles.map((c: any) => c.officerName);
    const hasBalooKhan = officerNames.some((n: string) => n.includes('Baloo Khan Chandio'));
    const hasKaranLal = officerNames.some((n: string) => n.includes('Karan Lal'));
    const hasNehalAhmed = officerNames.some((n: string) => n.includes('Nehal Ahmed'));
    if (!hasBalooKhan || !hasKaranLal || !hasNehalAhmed) {
      throw new Error('Mandatory SF Rahu circle officers missing');
    }
  });

  // Test 6: Admin Authentication Security
  await test('POST /api/admin/auth validates incorrect passcodes safely', async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode: 'WRONG_CODE_999' }),
    });
    if (res.status !== 401) throw new Error(`Expected 401, got ${res.status}`);
  });

  await test('POST /api/admin/auth succeeds with valid passcode', async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode: 'AESFR_ADMIN_2026' }),
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!data.token) throw new Error('Missing admin token');
  });

  // Test 7: Chat Input Validation
  await test('POST /api/gemini/chat rejects empty query strings', async () => {
    const res = await fetch(`${BASE_URL}/api/gemini/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: '   ' }),
    });
    if (res.status !== 400) throw new Error(`Expected 400 for empty query, got ${res.status}`);
  });

  // Test 8: Disease Vision Input Validation
  await test('POST /api/gemini/diagnose rejects missing image data', async () => {
    const res = await fetch(`${BASE_URL}/api/gemini/diagnose`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cropName: 'Cotton' }),
    });
    if (res.status !== 400) throw new Error(`Expected 400 for missing image, got ${res.status}`);
  });

  await test('POST /api/gemini/diagnose rejects unsupported MIME type', async () => {
    const res = await fetch(`${BASE_URL}/api/gemini/diagnose`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: 'abc12345', mimeType: 'application/pdf' }),
    });
    if (res.status !== 400) throw new Error(`Expected 400 for PDF upload, got ${res.status}`);
  });

  console.log(`\n======================================================`);
  console.log(` Test Summary: ${passed} Passed, ${failed} Failed`);
  console.log(`======================================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
