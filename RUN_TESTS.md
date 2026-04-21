# Running Tests

## Preferred Commands

```bash
# Run all PHP unit tests
npm test

# Same as npm test (Composer directly)
composer test

# Run with coverage summary in terminal
composer test:coverage
```

## PHPUnit Direct Commands

## Basic Commands

To run tests with output, use one of these commands:

```bash
# Standard output with testdox format
vendor/bin/phpunit --testdox

# Verbose output
vendor/bin/phpunit --verbose

# Debug mode (shows what tests are being discovered)
vendor/bin/phpunit --debug

# Force colors (useful if colors aren't showing)
vendor/bin/phpunit --colors=always

# Combine options for maximum visibility
vendor/bin/phpunit --testdox --colors=always --verbose

# Run a specific test file
vendor/bin/phpunit tests/ShortcodeTest.php

# Run a specific test method
vendor/bin/phpunit --filter test_pdfjs_handler_calls_render_viewer
```

## If Output is Still Suppressed

If you're still not seeing output, try:

1. **Disable output buffering in PHP:**

    ```bash
    php -d output_buffering=0 vendor/bin/phpunit --testdox
    ```

2. **Force stderr output:**

    ```bash
    vendor/bin/phpunit --testdox 2>&1
    ```

3. **Redirect to a file to verify tests are running:**

    ```bash
    vendor/bin/phpunit --testdox > test_output.txt 2>&1
    cat test_output.txt
    ```

4. **Use the JUnit XML output format:**

    ```bash
    vendor/bin/phpunit --log-junit junit.xml
    cat junit.xml
    ```

5. **Check if tests are being discovered:**
    ```bash
    vendor/bin/phpunit --list-tests
    ```

## Configuration

The `phpunit.xml.dist` file has been updated with:

- `verbose="true"` - Shows more detailed output
- `beStrictAboutOutputDuringTests="false"` - Allows output during tests
- `printerClass` - Uses default result printer

If you need to customize further, copy `phpunit.xml.dist` to `phpunit.xml` and modify it.
