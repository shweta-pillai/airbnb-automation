# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\search.spec.ts >> Search Functionality >> Homepage Search >> SEARCH-001: should display results for a valid destination
- Location: tests\e2e\search.spec.ts:19:9

# Error details

```
Error: expect.toHaveTitle: Target page, context or browser has been closed
```

# Test source

```ts
  135 |     const month = targetDate.toLocaleString('en-US', { month: 'long' });
  136 |     const year = targetDate.getFullYear();
  137 | 
  138 |     // Find the calendar cell for the target date
  139 |     await this.page
  140 |       .locator(`[aria-label*="${month} ${day}, ${year}"]`)
  141 |       .first()
  142 |       .click();
  143 |   }
  144 | 
  145 |   /**
  146 |    * Select a check-out date.
  147 |    * @param daysFromNow - Number of days in the future for check-out
  148 |    */
  149 |   async selectCheckOutDate(daysFromNow = 10): Promise<void> {
  150 |     const targetDate = new Date();
  151 |     targetDate.setDate(targetDate.getDate() + daysFromNow);
  152 | 
  153 |     const day = targetDate.getDate().toString();
  154 |     const month = targetDate.toLocaleString('en-US', { month: 'long' });
  155 |     const year = targetDate.getFullYear();
  156 | 
  157 |     await this.page
  158 |       .locator(`[aria-label*="${month} ${day}, ${year}"]`)
  159 |       .first()
  160 |       .click();
  161 |   }
  162 | 
  163 |   /**
  164 |    * Open the guests picker and set guest counts.
  165 |    */
  166 |   async setGuests(adults: number, children = 0, infants = 0): Promise<void> {
  167 |     await this.guestsButton.click();
  168 |     await this.page.waitForTimeout(500);
  169 | 
  170 |     // Set adults (default is 1, so we increment by adults - 1)
  171 |     for (let i = 0; i < adults - 1; i++) {
  172 |       await this.adultsIncreaseBtn.click();
  173 |     }
  174 | 
  175 |     // Set children
  176 |     for (let i = 0; i < children; i++) {
  177 |       await this.childrenIncreaseBtn.click();
  178 |     }
  179 | 
  180 |     // Set infants
  181 |     for (let i = 0; i < infants; i++) {
  182 |       await this.infantsIncreaseBtn.click();
  183 |     }
  184 |   }
  185 | 
  186 |   /**
  187 |    * Perform a complete search with all parameters.
  188 |    */
  189 |   async performSearch(params: {
  190 |     destination: string;
  191 |     checkInDaysFromNow?: number;
  192 |     checkOutDaysFromNow?: number;
  193 |     adults?: number;
  194 |     children?: number;
  195 |     infants?: number;
  196 |   }): Promise<void> {
  197 |     const {
  198 |       destination,
  199 |       checkInDaysFromNow = 7,
  200 |       checkOutDaysFromNow = 10,
  201 |       adults = 2,
  202 |       children = 0,
  203 |       infants = 0,
  204 |     } = params;
  205 | 
  206 |     await this.enterDestination(destination);
  207 |     await this.selectCheckInDate(checkInDaysFromNow);
  208 |     await this.selectCheckOutDate(checkOutDaysFromNow);
  209 |     await this.setGuests(adults, children, infants);
  210 |     await this.searchSubmitButton.click();
  211 |   }
  212 | 
  213 |   /**
  214 |    * Get all listing cards currently visible on the page.
  215 |    */
  216 |   async getListingCount(): Promise<number> {
  217 |     await this.waitForElement(this.listingCards.first());
  218 |     return this.listingCards.count();
  219 |   }
  220 | 
  221 |   /**
  222 |    * Click a specific category filter.
  223 |    * @param categoryName - e.g., 'Trending', 'Beach', 'Mansions'
  224 |    */
  225 |   async clickCategoryFilter(categoryName: string): Promise<void> {
  226 |     const filter = this.categoryFilters.filter({ hasText: categoryName }).first();
  227 |     await filter.click();
  228 |     await this.waitForPageLoad();
  229 |   }
  230 | 
  231 |   /**
  232 |    * Assert the homepage has fully loaded.
  233 |    */
  234 |   async assertPageLoaded(): Promise<void> {
> 235 |     await expect(this.page).toHaveTitle(/Airbnb/i);
      |                             ^ Error: expect.toHaveTitle: Target page, context or browser has been closed
  236 |     await expect(this.destinationInput).toBeVisible();
  237 |   }
  238 | }
  239 | 
```