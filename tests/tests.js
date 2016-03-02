var assert = chai.assert;

suite ('temperatura', function() {
    test('32F = 0.00C', function() {
        tempEntrada.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00C");
    });

    test('Spaces between', function() {
        tempEntrada.value = "32 e1 F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0e1C");
    });

    test('Spaces end or start', function() {
        tempEntrada.value = "   32F   ";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00C");
    });

    test('Substring of measure', function() {
        tempEntrada.value = "32Cel";
        calculate();
        assert.deepEqual(converted.innerHTML, "89.60F");
    });

    test('Measure especification Celsius', function() {
        tempEntrada.value = "32Celsius";
        calculate();
        assert.deepEqual(converted.innerHTML, "89.60F");
    });

    test('Measure especification Fahrenheit', function() {
        tempEntrada.value = "32Fahrenheit";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00C");
    });
});
