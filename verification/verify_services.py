from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    print("Navigating to Services page...")
    page.goto("http://localhost:3000/services")

    # Wait for load
    page.wait_for_load_state('networkidle')

    # Check Section Title
    # It might be the second heading-lg, so let's be specific or get by text
    expect(page.get_by_role("heading", name="Professional Sod Installation Services").nth(1)).to_be_visible()

    # Check Cards
    expect(page.get_by_role("heading", name="Site Clearing & Removal")).to_be_visible()
    expect(page.get_by_role("heading", name="Soil Base Preparation")).to_be_visible()
    expect(page.get_by_role("heading", name="Farm-Fresh Installation")).to_be_visible()
    expect(page.get_by_role("heading", name="Post-Installation Care")).to_be_visible()

    # Check bold text presence (just checking text content generally)
    # Playwright's to_have_text checks visible text
    expect(page.locator("body")).to_contain_text("clean yellow sand base")

    # Take screenshot of the process section
    # Scroll to the section
    section = page.get_by_role("heading", name="Professional Sod Installation Services").nth(1)
    section.scroll_into_view_if_needed()

    page.screenshot(path="verification/services_update.png")
    print("Services Verification Complete")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
