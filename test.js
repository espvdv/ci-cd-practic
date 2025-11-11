const { hello } = require('./index.js');

console.log('Running tests...');

if (hello() === "Hello, CI/CD!") {
    console.log('✅ Test 1 passed: hello() returns correct string');
} else {
    console.log('❌ Test 1 failed');
    process.exit(1);
}

if (typeof hello === 'function') {
    console.log('✅ Test 2 passed: hello is a function');
} else {
    console.log('❌ Test 2 failed');
    process.exit(1);
}

console.log('All tests passed! 🎉');
