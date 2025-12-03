# PHP Configuration for PHPUnit Output

## Current Settings

Your current PHP settings are already good for output:
- `output_buffering: 0` ✅ (no buffering)
- `implicit_flush: 1` ✅ (flushes immediately)
- `display_errors: 1` ✅ (shows errors)
- `error_reporting: 30719` ✅ (E_ALL)

## Recommended php.ini Settings for PHPUnit

### Output Settings

```ini
; Disable output buffering for immediate output
output_buffering = 0

; Enable implicit flush (output immediately)
implicit_flush = On

; Display errors (useful for debugging)
display_errors = On

; Error reporting level (E_ALL for maximum visibility)
error_reporting = E_ALL

; Display startup errors
display_startup_errors = On
```

### Memory and Execution Settings

```ini
; Increase memory limit for tests
memory_limit = 512M

; Increase execution time for long-running tests
max_execution_time = 300

; Increase input time limit
max_input_time = 300
```

### CLI-Specific Settings

For command-line PHP (which PHPUnit uses), you can create a separate `php-cli.ini` or add these to your main `php.ini`:

```ini
; CLI-specific output settings
output_buffering = 0
implicit_flush = 1
display_errors = 1
error_reporting = E_ALL
```

## How to Apply Settings

### Option 1: Modify php.ini directly

1. Find your php.ini file:
   ```bash
   php --ini
   ```

2. Edit the file (usually `/usr/local/etc/php/8.5/php.ini` on macOS with Homebrew)

3. Update the settings above

4. Restart PHP-FPM if applicable (not needed for CLI)

### Option 2: Use command-line flags (temporary)

You can override settings when running PHPUnit:

```bash
php -d output_buffering=0 \
    -d implicit_flush=1 \
    -d display_errors=1 \
    -d error_reporting=E_ALL \
    vendor/bin/phpunit --testdox
```

### Option 3: Create a php.ini override file

Create a file like `/usr/local/etc/php/8.5/conf.d/phpunit.ini`:

```ini
; PHPUnit-specific settings
output_buffering = 0
implicit_flush = 1
display_errors = 1
error_reporting = E_ALL
display_startup_errors = On
memory_limit = 512M
```

### Option 4: Use environment variables

You can also set PHP settings via environment variables:

```bash
export PHP_INI_SCAN_DIR="/usr/local/etc/php/8.5/conf.d"
php vendor/bin/phpunit --testdox
```

## Testing Your Configuration

After changing settings, verify them:

```bash
# Check current settings
php -r "echo 'output_buffering: ' . ini_get('output_buffering') . PHP_EOL;"
php -r "echo 'implicit_flush: ' . ini_get('implicit_flush') . PHP_EOL;"
php -r "echo 'display_errors: ' . ini_get('display_errors') . PHP_EOL;"

# Test output immediately
php -r "echo 'Test output'; flush();"
```

## Troubleshooting

### If output is still suppressed:

1. **Check for output buffering in code:**
   ```php
   // In bootstrap.php, you can add:
   if (ob_get_level()) {
       ob_end_flush();
   }
   ```

2. **Disable output buffering in PHPUnit config:**
   Already set in `phpunit.xml.dist` with `beStrictAboutOutputDuringTests="false"`

3. **Use explicit flush:**
   ```php
   echo "Output";
   flush();
   ob_flush();
   ```

4. **Check terminal settings:**
   - Some terminals have their own buffering
   - Try different terminals (Terminal.app, iTerm2, etc.)
   - Check for shell aliases that might wrap PHPUnit

### Common Issues

- **Output appears all at once:** Increase `implicit_flush` or set `output_buffering = 0`
- **No error messages:** Set `display_errors = On` and `error_reporting = E_ALL`
- **Memory errors:** Increase `memory_limit`
- **Timeout errors:** Increase `max_execution_time`

## Recommended Complete php.ini Section

For PHPUnit testing, add this section to your php.ini:

```ini
[PHP]
; Output settings
output_buffering = 0
implicit_flush = On
display_errors = On
display_startup_errors = On
error_reporting = E_ALL

; Memory and execution
memory_limit = 512M
max_execution_time = 300
max_input_time = 300

; Error logging (optional, for debugging)
log_errors = On
error_log = /tmp/php_errors.log
```

## Quick Reference

| Setting | Recommended Value | Purpose |
|---------|------------------|---------|
| `output_buffering` | `0` | Disable buffering for immediate output |
| `implicit_flush` | `On` | Flush output immediately |
| `display_errors` | `On` | Show errors in output |
| `error_reporting` | `E_ALL` | Report all errors |
| `display_startup_errors` | `On` | Show startup errors |
| `memory_limit` | `512M` | Prevent memory errors |
| `max_execution_time` | `300` | Allow longer test runs |

