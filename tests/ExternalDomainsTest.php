<?php
use PHPUnit\Framework\TestCase;

final class ExternalDomainsTest extends TestCase {
    protected function setUp(): void {
        Brain\Monkey\setUp();
    }

    protected function tearDown(): void {
        Brain\Monkey\tearDown();
    }

    public function test_get_allowed_domain_list_normalizes_and_deduplicates() {
        $result = pdfjs_get_allowed_domain_list( " CDN.Example.com \nmedia.example.com\ncdn.example.com\n" );

        $this->assertEquals( array( 'cdn.example.com', 'media.example.com' ), $result );
    }

    public function test_domain_whitelist_is_exact_match_only() {
        $allowed = "example.com\ncdn.example.com";

        $this->assertTrue( pdfjs_is_domain_whitelisted( 'example.com', $allowed ) );
        $this->assertTrue( pdfjs_is_domain_whitelisted( 'cdn.example.com', $allowed ) );
        $this->assertFalse( pdfjs_is_domain_whitelisted( 'sub.example.com', $allowed ) );
        $this->assertFalse( pdfjs_is_domain_whitelisted( 'evil-example.com', $allowed ) );
    }
}
