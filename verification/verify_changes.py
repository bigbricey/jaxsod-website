from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # 1. Verify Homepage and SEO Title
    print("Navigating to homepage...")
    page.goto("http://localhost:3000")

    # Wait for title to be available
    page.wait_for_load_state('networkidle')

    title = page.title()
    print(f"Page Title: {title}")

    # Verify title matches new SEO requirement (approximate match as title template might append stuff)
    # Expected: "Professional Sod Installation Jacksonville FL | Jax Sod"
    if "Professional Sod Installation Jacksonville FL" in title:
        print("SEO Title Verified")
    else:
        print(f"SEO Title Mismatch: {title}")

    page.screenshot(path="verification/homepage.png")

    # 2. Verify Mobile Menu
    print("Testing Mobile Menu...")
    # Set viewport to mobile
    page.set_viewport_size({"width": 375, "height": 667})
    page.reload()
    page.wait_for_load_state('networkidle')

    # Click menu button
    # The menu button has an aria-label="Toggle menu" or we can find by icon
    menu_btn = page.get_by_label("Toggle menu")
    menu_btn.click()

    # Wait for menu to appear
    # The menu container is inside the header now as an absolute overlay
    # We can look for a link that is only visible in the menu, e.g., "Home" inside the mobile menu container
    # Or just wait a bit for animation/state
    page.wait_for_timeout(500)

    page.screenshot(path="verification/mobile_menu.png")

    # Close menu by clicking a link (e.g. Gallery)
    print("Navigating to Gallery via Mobile Menu...")
    gallery_link = page.get_by_role("link", name="Gallery").first
    # Note: there are two gallery links (desktop and mobile). In mobile view desktop is hidden but might still be in DOM.
    # The mobile one is in the overlay.
    # Let's try to click the visible one.

    # Actually, let's click the one in the menu explicitly if we can, or just the visible one.
    gallery_link.click()

    # 3. Verify Gallery Page
    print("Verifying Gallery Page...")
    page.wait_for_url("**/gallery")
    page.wait_for_load_state('networkidle')

    # Reset viewport to desktop to see the grid
    page.set_viewport_size({"width": 1280, "height": 800})

    # Check for "Our Work" heading
    expect(page.get_by_role("heading", name="Our Work")).to_be_visible()

    # Check if images are loaded (we have 6 images)
    # We can check for the specific alt text of the first image
    expect(page.get_by_alt_text("Lush Zoysia sod installation in a residential backyard")).to_be_visible()

    page.screenshot(path="verification/gallery.png")
    print("Gallery Verified")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
