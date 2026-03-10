//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

import { isSupportedFile, isInjectableFile } from '../core/utils';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    // isSupportedFile tests
    test("isSupportedFile returns true for .js files", function() {
        assert.strictEqual(isSupportedFile('/path/to/file.js'), true);
    });

    test("isSupportedFile returns true for .html files", function() {
        assert.strictEqual(isSupportedFile('/path/to/file.html'), true);
    });

    test("isSupportedFile returns true for .css files", function() {
        assert.strictEqual(isSupportedFile('/path/to/file.css'), true);
    });

    test("isSupportedFile returns false for unsupported file types", function() {
        assert.strictEqual(isSupportedFile('/path/to/file.ts'), false);
        assert.strictEqual(isSupportedFile('/path/to/file.json'), false);
        assert.strictEqual(isSupportedFile('/path/to/file.txt'), false);
    });

    // isInjectableFile tests
    test("isInjectableFile returns true for .html files", function() {
        assert.strictEqual(isInjectableFile('/path/to/file.html'), true);
    });

    test("isInjectableFile returns false for non-html files", function() {
        assert.strictEqual(isInjectableFile('/path/to/file.js'), false);
        assert.strictEqual(isInjectableFile('/path/to/file.css'), false);
        assert.strictEqual(isInjectableFile('/path/to/file.ts'), false);
    });
});