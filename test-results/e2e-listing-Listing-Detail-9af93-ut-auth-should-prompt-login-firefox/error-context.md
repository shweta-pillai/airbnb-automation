# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\listing.spec.ts >> Listing Detail Page >> LISTING-008: clicking Reserve without auth should prompt login
- Location: tests\e2e\listing.spec.ts:88:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('[data-testid="structured-search-input-field-checkin-btn"]').or(locator('[placeholder="Add date"]').first())

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - alert
  - generic [ref=e14]:
    - banner [ref=e15]:
      - link " Airbnb" [ref=e16] [cursor=pointer]:
        - /url: /
        - text: 
        - generic [ref=e17]: Airbnb
    - generic [ref=e19]:
      - generic [ref=e20]:
        - heading "Oops!" [level=1] [ref=e21]
        - heading "We can't seem to find the page you're looking for." [level=2] [ref=e22]
        - 'heading "Error code: 404" [level=3] [ref=e23]'
        - list [ref=e24]:
          - listitem [ref=e25]: "Here are some helpful links instead:"
          - listitem [ref=e26]:
            - link "Home" [ref=e27] [cursor=pointer]:
              - /url: /
          - listitem [ref=e28]:
            - link "Search" [ref=e29] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e30]:
            - link "Help" [ref=e31] [cursor=pointer]:
              - /url: /help
          - listitem [ref=e32]:
            - link "Travelling on Airbnb" [ref=e33] [cursor=pointer]:
              - /url: /help/getting-started/how-to-travel
          - listitem [ref=e34]:
            - link "Hosting on Airbnb" [ref=e35] [cursor=pointer]:
              - /url: /info/why_host
          - listitem [ref=e36]:
            - link "Trust & Safety" [ref=e37] [cursor=pointer]:
              - /url: /trust
          - listitem [ref=e38]:
            - link "Sitemap" [ref=e39] [cursor=pointer]:
              - /url: /sitemaps
      - img "Girl has dropped her ice cream." [ref=e41]
```

# Test source

```ts
  38  |   readonly amenitiesSection: Locator;
  39  |   readonly showAllAmenitiesButton: Locator;
  40  | 
  41  |   // ─── Reviews ───────────────────────────────────────────────────────────
  42  |   readonly reviewsSection: Locator;
  43  |   readonly reviewCount: Locator;
  44  |   readonly overallRating: Locator;
  45  |   readonly reviewCards: Locator;
  46  | 
  47  |   // ─── Wishlist ──────────────────────────────────────────────────────────
  48  |   readonly saveToWishlistButton: Locator;
  49  | 
  50  |   // ─── Share ─────────────────────────────────────────────────────────────
  51  |   readonly shareButton: Locator;
  52  | 
  53  |   constructor(page: Page) {
  54  |     super(page);
  55  | 
  56  |     this.listingTitle = page.locator('h1').first()
  57  |       .or(page.locator('[data-testid="listing-page-title"]'));
  58  | 
  59  |     this.listingRating = page.locator('[data-testid="pdp-reviews-highlight-banner-host-rating"]')
  60  |       .or(page.locator('[data-section-id="REVIEWS"] [aria-label*="stars"]').first());
  61  | 
  62  |     this.listingLocation = page.locator('[data-testid="listing-card-title"]')
  63  |       .or(page.locator('[data-section-id="LOCATION"] h2'));
  64  | 
  65  |     this.hostName = page.locator('[data-testid="host-profile-name"]');
  66  | 
  67  |     this.photoGallery = page.locator('[data-testid="photo-carousel"]')
  68  |       .or(page.locator('[data-section-id="HERO_DEFAULT"]'));
  69  | 
  70  |     this.showAllPhotosButton = page.getByRole('button', { name: /show all photos/i });
  71  | 
  72  |     // Booking widget
  73  |     this.bookingWidget = page.locator('[data-section-id="BOOK_IT_SIDEBAR"]')
  74  |       .or(page.locator('[data-testid="book-it-default"]'));
  75  | 
  76  |     this.pricePerNight = page.locator('[data-testid="book-it-default"] [data-testid="price-item"]')
  77  |       .or(page.locator('._tyxjp1'));
  78  | 
  79  |     this.checkInDateInput = page
  80  |       .locator('[data-testid="structured-search-input-field-checkin-btn"]')
  81  |       .or(page.locator('[placeholder="Add date"]').first());
  82  | 
  83  |     this.checkOutDateInput = page
  84  |       .locator('[data-testid="structured-search-input-field-checkout-btn"]')
  85  |       .or(page.locator('[placeholder="Add date"]').last());
  86  | 
  87  |     this.guestSelector = page.locator('[data-testid="GuestPicker-book_it-trigger"]');
  88  |     this.reserveButton = page.getByRole('button', { name: /reserve/i });
  89  |     this.totalPrice = page.locator('[data-testid="book-it-total-price"]');
  90  |     this.nightsCount = page.locator('[data-testid="book-it-nights-count"]');
  91  |     this.cleaningFee = page.locator('[data-testid="book-it-cleaning-fee"]');
  92  |     this.serviceFee = page.locator('[data-testid="book-it-service-fee"]');
  93  | 
  94  |     // Amenities
  95  |     this.amenitiesSection = page.locator('[data-section-id="AMENITIES"]');
  96  |     this.showAllAmenitiesButton = page.getByRole('button', { name: /show all amenities/i });
  97  | 
  98  |     // Reviews
  99  |     this.reviewsSection = page.locator('[data-section-id="REVIEWS"]');
  100 |     this.reviewCount = page.locator('[data-testid="pdp-reviews-count"]');
  101 |     this.overallRating = page.locator('[data-testid="pdp-reviews-highlight-banner-host-rating"]');
  102 |     this.reviewCards = page.locator('[data-testid="review-card"]');
  103 | 
  104 |     // Wishlist and share
  105 |     this.saveToWishlistButton = page.getByRole('button', { name: /save/i }).first();
  106 |     this.shareButton = page.getByRole('button', { name: /share/i });
  107 |   }
  108 | 
  109 |   /**
  110 |    * Wait for the listing page to fully load.
  111 |    * The booking widget is the key element we need for testing.
  112 |    */
  113 |   async waitForListingLoad(): Promise<void> {
  114 |     await this.page.waitForLoadState('networkidle');
  115 |     await this.listingTitle.waitFor({ state: 'visible', timeout: 15_000 });
  116 |   }
  117 | 
  118 |   /**
  119 |    * Get the listing title text.
  120 |    */
  121 |   async getTitle(): Promise<string> {
  122 |     return (await this.listingTitle.textContent()) ?? '';
  123 |   }
  124 | 
  125 |   /**
  126 |    * Get price per night text (e.g., "$150 night").
  127 |    */
  128 |   async getPricePerNight(): Promise<string> {
  129 |     return (await this.pricePerNight.textContent()) ?? '';
  130 |   }
  131 | 
  132 |   /**
  133 |    * Select dates on the listing's booking widget.
  134 |    * @param checkInDaysFromNow - days from today for check-in
  135 |    * @param checkOutDaysFromNow - days from today for check-out
  136 |    */
  137 |   async selectDates(checkInDaysFromNow: number, checkOutDaysFromNow: number): Promise<void> {
> 138 |     await this.checkInDateInput.click();
      |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  139 |     await this.page.waitForTimeout(500);
  140 | 
  141 |     const checkIn = new Date();
  142 |     checkIn.setDate(checkIn.getDate() + checkInDaysFromNow);
  143 |     const checkInLabel = `${checkIn.toLocaleString('en-US', { month: 'long' })} ${checkIn.getDate()}, ${checkIn.getFullYear()}`;
  144 | 
  145 |     await this.page.locator(`[aria-label*="${checkInLabel}"]`).first().click();
  146 | 
  147 |     const checkOut = new Date();
  148 |     checkOut.setDate(checkOut.getDate() + checkOutDaysFromNow);
  149 |     const checkOutLabel = `${checkOut.toLocaleString('en-US', { month: 'long' })} ${checkOut.getDate()}, ${checkOut.getFullYear()}`;
  150 | 
  151 |     await this.page.locator(`[aria-label*="${checkOutLabel}"]`).first().click();
  152 |   }
  153 | 
  154 |   /**
  155 |    * Set number of guests from the booking widget.
  156 |    */
  157 |   async setGuests(adults: number): Promise<void> {
  158 |     await this.guestSelector.click();
  159 |     const increaseAdults = this.page.locator('[data-testid="stepper-adults-increase-button"]');
  160 |     for (let i = 0; i < adults - 1; i++) {
  161 |       await increaseAdults.click();
  162 |     }
  163 |   }
  164 | 
  165 |   /**
  166 |    * Click the Reserve button to proceed to checkout.
  167 |    * User must be logged in for this to work.
  168 |    */
  169 |   async clickReserve(): Promise<void> {
  170 |     await this.reserveButton.scrollIntoViewIfNeeded();
  171 |     await this.reserveButton.click();
  172 |   }
  173 | 
  174 |   /**
  175 |    * Open the full photo gallery.
  176 |    */
  177 |   async openPhotoGallery(): Promise<void> {
  178 |     await this.showAllPhotosButton.click();
  179 |     await this.page.waitForTimeout(1000);
  180 |   }
  181 | 
  182 |   /**
  183 |    * Show all amenities.
  184 |    */
  185 |   async showAllAmenities(): Promise<void> {
  186 |     await this.showAllAmenitiesButton.scrollIntoViewIfNeeded();
  187 |     await this.showAllAmenitiesButton.click();
  188 |     await this.page.waitForTimeout(500);
  189 |   }
  190 | 
  191 |   /**
  192 |    * Get all amenity names.
  193 |    */
  194 |   async getAmenities(): Promise<string[]> {
  195 |     await this.showAllAmenities();
  196 |     const amenityElements = await this.page
  197 |       .locator('[data-testid="amenity-row"]')
  198 |       .all();
  199 |     return Promise.all(amenityElements.map(el => el.textContent().then(t => t?.trim() ?? '')));
  200 |   }
  201 | 
  202 |   /**
  203 |    * Save the listing to wishlist (requires login).
  204 |    */
  205 |   async saveToWishlist(): Promise<void> {
  206 |     await this.saveToWishlistButton.click();
  207 |     await this.page.waitForTimeout(1000);
  208 |   }
  209 | 
  210 |   /**
  211 |    * Assert the listing page shows critical elements.
  212 |    */
  213 |   async assertListingPageLoaded(): Promise<void> {
  214 |     await expect(this.listingTitle).toBeVisible();
  215 |     await expect(this.reserveButton).toBeVisible();
  216 |   }
  217 | 
  218 |   /**
  219 |    * Assert the price is visible and contains a currency symbol.
  220 |    */
  221 |   async assertPriceDisplayed(): Promise<void> {
  222 |     const price = await this.getPricePerNight();
  223 |     expect(price).toMatch(/\$|€|£/);
  224 |   }
  225 | }
  226 | 
```