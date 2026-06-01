# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.spec.ts >> Authentication >> Login Modal >> AUTH-003: should show error message with invalid credentials
- Location: tests\e2e\auth.spec.ts:44:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('[data-testid="auth-modal"]').or(locator('[aria-label="Log in or sign up modal"]')) to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - alert
  - generic [ref=e15]:
    - heading "Airbnb homepage" [level=1] [ref=e16]
    - banner [ref=e20]:
      - link "Airbnb homepage" [ref=e21] [cursor=pointer]:
        - /url: /
        - img [ref=e23]
      - search [ref=e25]:
        - generic [ref=e27]:
          - tablist [ref=e29]:
            - tab "Homes" [selected] [ref=e30] [cursor=pointer]:
              - generic [ref=e33]: Homes
              - generic [ref=e34]: Homes
            - tab "Experiences, new" [ref=e35] [cursor=pointer]:
              - generic [ref=e39]:
                - text: NEW
                - generic [ref=e40]: NEW
              - generic [ref=e43]: Experiences
              - generic [ref=e44]: Experiences, new
            - tab "Services, new" [ref=e45] [cursor=pointer]:
              - generic [ref=e49]:
                - text: NEW
                - generic [ref=e50]: NEW
              - generic [ref=e53]: Services
              - generic [ref=e54]: Services, new
          - generic [ref=e58]:
            - generic [ref=e62]:
              - generic [ref=e64] [cursor=pointer]:
                - generic [ref=e65]: Where
                - searchbox "Where" [ref=e67]
              - button "When Add dates" [ref=e69] [cursor=pointer]:
                - generic [ref=e70]:
                  - generic [ref=e71]: When
                  - generic [ref=e73]: Add dates
              - button "Who Add guests" [ref=e75] [cursor=pointer]:
                - generic [ref=e76]:
                  - generic [ref=e77]: Who
                  - generic [ref=e79]: Add guests
            - button "Search" [ref=e80] [cursor=pointer]:
              - img [ref=e83]
      - navigation "Profile" [ref=e87]:
        - generic [ref=e88]:
          - button "Become a host" [ref=e89] [cursor=pointer]:
            - generic [ref=e90]: Become a host
          - button "Choose a language and currency" [ref=e92] [cursor=pointer]:
            - img [ref=e94]
        - generic [ref=e97]:
          - button "Main navigation menu" [expanded] [ref=e98] [cursor=pointer]:
            - img [ref=e100]
          - generic [ref=e104]:
            - link "Help Centre" [active] [ref=e105] [cursor=pointer]:
              - /url: /help
              - generic [ref=e107]:
                - img [ref=e109]
                - generic [ref=e111]: Help Centre
            - button "Become a host It’s easy to start hosting and earn extra income." [ref=e113] [cursor=pointer]:
              - generic [ref=e115]:
                - generic [ref=e116]: Become a host
                - generic [ref=e117]: It’s easy to start hosting and earn extra income.
              - img [ref=e122]
            - link "Refer a host" [ref=e124] [cursor=pointer]:
              - /url: /refer?r=67
              - generic [ref=e127]: Refer a host
            - link "Find a co-host" [ref=e128] [cursor=pointer]:
              - /url: /co-hosts/home
              - generic [ref=e131]: Find a co-host
            - link "Log in or sign up" [ref=e133] [cursor=pointer]:
              - /url: /signup_login
              - generic [ref=e136]: Log in or sign up
    - generic [ref=e137]:
      - main [ref=e138]:
        - generic [ref=e139]:
          - group "Popular homes in Paris" [ref=e144]:
            - link "Popular homes in Paris" [ref=e147] [cursor=pointer]:
              - /url: /s/Paris/homes?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e148]:
                - heading "Popular homes in Paris" [level=2] [ref=e149]:
                  - generic [ref=e150]: Popular homes in Paris
                - img [ref=e152]
            - generic [ref=e155]: 6 of 9 items showing
            - generic [ref=e158]:
              - button "Previous" [disabled] [ref=e159]:
                - generic [ref=e160]:
                  - generic [ref=e161]: _
                  - img [ref=e162]
              - button "Next" [ref=e164] [cursor=pointer]:
                - generic [ref=e165]:
                  - generic [ref=e166]: _
                  - img [ref=e167]
            - generic [ref=e173]:
              - group "Apartment in 15th Arrondissement" [ref=e175]:
                - link "Apartment in 15th Arrondissement" [ref=e176] [cursor=pointer]:
                  - /url: /rooms/588780489931455266?check_in=2026-07-03&check_out=2026-07-05&photo_id=1366393274&source_impression_id=p3_1780337115_P3vjXmhzR1EXNX2L&previous_page_section_name=1000
                - generic [ref=e177]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Apartment in 15th Arrondissement" [ref=e179] [cursor=pointer]':
                          - img [ref=e181]
                  - generic [ref=e183]:
                    - generic [ref=e185]: Apartment in 15th Arrondissement
                    - generic [ref=e186]:
                      - generic [ref=e190]:
                        - generic [ref=e193]: ₹68,274
                        - generic [ref=e195]: for 2 nights
                        - generic [ref=e196]: ₹68,274 for 2 nights
                      - generic [ref=e197]:
                        - generic [ref=e198]: ","
                        - generic [ref=e199]: ·
                      - generic [ref=e200]:
                        - generic [ref=e201]: 5.0 out of 5 average rating
                        - img [ref=e203]
                        - generic [ref=e205]: "5.0"
              - group "Room in 13th Arrondissement" [ref=e207]:
                - link "Room in 13th Arrondissement" [ref=e208] [cursor=pointer]:
                  - /url: /rooms/863468?check_in=2026-07-17&check_out=2026-07-19&photo_id=1662471077&source_impression_id=p3_1780337115_P3wmc0tQOYkVyE9z&previous_page_section_name=1000
                - generic [ref=e209]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Room in 13th Arrondissement" [ref=e211] [cursor=pointer]':
                          - img [ref=e213]
                  - generic [ref=e215]:
                    - generic [ref=e217]: Room in 13th Arrondissement
                    - generic [ref=e218]:
                      - generic [ref=e222]:
                        - generic [ref=e225]: ₹15,459
                        - generic [ref=e227]: for 2 nights
                        - generic [ref=e228]: ₹15,459 for 2 nights
                      - generic [ref=e229]:
                        - generic [ref=e230]: ","
                        - generic [ref=e231]: ·
                      - generic [ref=e232]:
                        - generic [ref=e233]: 4.93 out of 5 average rating
                        - img [ref=e235]
                        - generic [ref=e237]: "4.93"
              - group "Flat in 9th Arrondissement" [ref=e239]:
                - link "Flat in 9th Arrondissement" [ref=e240] [cursor=pointer]:
                  - /url: /rooms/1271915143781425950?check_in=2026-09-04&check_out=2026-09-06&photo_id=2620277807&source_impression_id=p3_1780337115_P3J-rwPNXfgjVENn&previous_page_section_name=1000
                - generic [ref=e241]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Flat in 9th Arrondissement" [ref=e243] [cursor=pointer]':
                          - img [ref=e245]
                  - generic [ref=e247]:
                    - generic [ref=e249]: Flat in 9th Arrondissement
                    - generic [ref=e250]:
                      - generic [ref=e254]:
                        - generic [ref=e257]: ₹32,205
                        - generic [ref=e259]: for 2 nights
                        - generic [ref=e260]: ₹32,205 for 2 nights
                      - generic [ref=e261]:
                        - generic [ref=e262]: ","
                        - generic [ref=e263]: ·
                      - generic [ref=e264]:
                        - generic [ref=e265]: 5.0 out of 5 average rating
                        - img [ref=e267]
                        - generic [ref=e269]: "5.0"
              - group "Flat in 9th Arrondissement" [ref=e271]:
                - link "Flat in 9th Arrondissement" [ref=e272] [cursor=pointer]:
                  - /url: /rooms/669229903809413129?check_in=2026-08-21&check_out=2026-08-23&photo_id=1447879856&source_impression_id=p3_1780337115_P3V28jVgmLsVteIx&previous_page_section_name=1000
                - generic [ref=e273]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Flat in 9th Arrondissement" [ref=e275] [cursor=pointer]':
                          - img [ref=e277]
                  - generic [ref=e279]:
                    - generic [ref=e281]: Flat in 9th Arrondissement
                    - generic [ref=e282]:
                      - generic [ref=e286]:
                        - generic [ref=e289]: ₹31,819
                        - generic [ref=e291]: for 2 nights
                        - generic [ref=e292]: ₹31,819 for 2 nights
                      - generic [ref=e293]:
                        - generic [ref=e294]: ","
                        - generic [ref=e295]: ·
                      - generic [ref=e296]:
                        - generic [ref=e297]: 4.89 out of 5 average rating
                        - img [ref=e299]
                        - generic [ref=e301]: "4.89"
              - group "Flat in Paris" [ref=e303]:
                - link "Flat in Paris" [ref=e304] [cursor=pointer]:
                  - /url: /rooms/1536119775792438782?check_in=2026-07-31&check_out=2026-08-02&photo_id=2394567908&source_impression_id=p3_1780337115_P3DrG4d-ac58QaDT&previous_page_section_name=1000
                - generic [ref=e305]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Flat in Paris" [ref=e307] [cursor=pointer]':
                          - img [ref=e309]
                  - generic [ref=e311]:
                    - generic [ref=e313]: Flat in Paris
                    - generic [ref=e314]:
                      - generic [ref=e318]:
                        - generic [ref=e321]: ₹1,00,487
                        - generic [ref=e323]: for 2 nights
                        - generic [ref=e324]: ₹1,00,487 for 2 nights
                      - generic [ref=e325]:
                        - generic [ref=e326]: ","
                        - generic [ref=e327]: ·
                      - generic [ref=e328]:
                        - generic [ref=e329]: 5.0 out of 5 average rating
                        - img [ref=e331]
                        - generic [ref=e333]: "5.0"
              - group "Flat in Paris" [ref=e335]:
                - link "Flat in Paris" [ref=e336] [cursor=pointer]:
                  - /url: /rooms/1610735352677786969?check_in=2026-08-14&check_out=2026-08-16&photo_id=2499187056&source_impression_id=p3_1780337115_P3t6K2neCNc94ddA&previous_page_section_name=1000
                - generic [ref=e337]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Flat in Paris" [ref=e339] [cursor=pointer]':
                          - img [ref=e341]
                  - generic [ref=e343]:
                    - generic [ref=e345]: Flat in Paris
                    - generic [ref=e346]:
                      - generic [ref=e350]:
                        - generic [ref=e353]: ₹23,188
                        - generic [ref=e355]: for 2 nights
                        - generic [ref=e356]: ₹23,188 for 2 nights
                      - generic [ref=e357]:
                        - generic [ref=e358]: ","
                        - generic [ref=e359]: ·
                      - generic [ref=e360]:
                        - generic [ref=e361]: 4.96 out of 5 average rating
                        - img [ref=e363]
                        - generic [ref=e365]: "4.96"
              - group [ref=e367]:
                - link [ref=e368] [cursor=pointer]:
                  - /url: /rooms/1663965224630354473?check_in=2026-11-27&check_out=2026-11-29&photo_id=2592456958&source_impression_id=p3_1780337115_P32VqOhxwqCqw4XB&previous_page_section_name=1000
                - generic [ref=e369]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - button [ref=e371] [cursor=pointer]:
                          - img [ref=e373]
                  - generic [ref=e375]:
                    - generic [ref=e377]: Flat in Paris
                    - generic [ref=e378]:
                      - generic [ref=e382]:
                        - generic [ref=e385]: ₹61,654
                        - generic [ref=e387]: for 2 nights
                        - generic [ref=e388]: ₹61,654 for 2 nights
                      - generic [ref=e389]:
                        - generic [ref=e390]: ","
                        - generic [ref=e391]: ·
                      - generic [ref=e392]:
                        - generic [ref=e393]: 4.89 out of 5 average rating
                        - img [ref=e395]
                        - generic [ref=e397]: "4.89"
              - group [ref=e399]:
                - link [ref=e400] [cursor=pointer]:
                  - /url: /rooms/29542473?check_in=2026-08-21&check_out=2026-08-23&photo_id=2659033216&source_impression_id=p3_1780337115_P3PcZaWps8us7sWs&previous_page_section_name=1000
                - generic [ref=e401]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - button [ref=e403] [cursor=pointer]:
                          - img [ref=e405]
                  - generic [ref=e407]:
                    - generic [ref=e409]: Place to stay in Paris
                    - generic [ref=e410]:
                      - generic [ref=e414]:
                        - generic [ref=e417]: ₹24,569
                        - generic [ref=e419]: for 2 nights
                        - generic [ref=e420]: ₹24,569 for 2 nights
                      - generic [ref=e421]:
                        - generic [ref=e422]: ","
                        - generic [ref=e423]: ·
                      - generic [ref=e424]:
                        - generic [ref=e425]: 5.0 out of 5 average rating
                        - img [ref=e427]
                        - generic [ref=e429]: "5.0"
              - link [ref=e432] [cursor=pointer]:
                - /url: /s/Paris/homes?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e438]: See all
          - group "Stay in London" [ref=e443]:
            - link "Stay in London" [ref=e446] [cursor=pointer]:
              - /url: /s/London/homes?place_id=ChIJdd4hrwug2EcRmSrV3Vo6llI&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e447]:
                - heading "Stay in London" [level=2] [ref=e448]:
                  - generic [ref=e449]: Stay in London
                - img [ref=e451]
            - generic [ref=e454]: 6 of 9 items showing
            - generic [ref=e457]:
              - button "Previous" [disabled] [ref=e458]:
                - generic [ref=e459]:
                  - generic [ref=e460]: _
                  - img [ref=e461]
              - button "Next" [ref=e463] [cursor=pointer]:
                - generic [ref=e464]:
                  - generic [ref=e465]: _
                  - img [ref=e466]
            - generic [ref=e472]:
              - group "Room in Lambeth" [ref=e474]:
                - link "Room in Lambeth" [ref=e475] [cursor=pointer]:
                  - /url: /rooms/8805567?check_in=2026-11-06&check_out=2026-11-08&photo_id=1729058342&source_impression_id=p3_1780337115_P3IQ-Tyky0sHDuye&previous_page_section_name=1000
                - generic [ref=e476]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Room in Lambeth" [ref=e478] [cursor=pointer]':
                          - img [ref=e480]
                  - generic [ref=e482]:
                    - generic [ref=e484]: Room in Lambeth
                    - generic [ref=e485]:
                      - generic [ref=e489]:
                        - generic [ref=e492]: ₹21,214
                        - generic [ref=e494]: for 2 nights
                        - generic [ref=e495]: ₹21,214 for 2 nights
                      - generic [ref=e496]:
                        - generic [ref=e497]: ","
                        - generic [ref=e498]: ·
                      - generic [ref=e499]:
                        - generic [ref=e500]: 4.95 out of 5 average rating
                        - img [ref=e502]
                        - generic [ref=e504]: "4.95"
              - group "Room in Acton" [ref=e506]:
                - link "Room in Acton" [ref=e507] [cursor=pointer]:
                  - /url: /rooms/1396669506787422414?check_in=2026-07-24&check_out=2026-07-26&photo_id=2658002098&source_impression_id=p3_1780337115_P3PLDulCxxs-cpLV&previous_page_section_name=1000
                - generic [ref=e508]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Room in Acton" [ref=e510] [cursor=pointer]':
                          - img [ref=e512]
                  - generic [ref=e514]:
                    - generic [ref=e516]: Room in Acton
                    - generic [ref=e517]:
                      - generic [ref=e521]:
                        - generic [ref=e524]: ₹16,639
                        - generic [ref=e526]: for 2 nights
                        - generic [ref=e527]: ₹16,639 for 2 nights
                      - generic [ref=e528]:
                        - generic [ref=e529]: ","
                        - generic [ref=e530]: ·
                      - generic [ref=e531]:
                        - generic [ref=e532]: 5.0 out of 5 average rating
                        - img [ref=e534]
                        - generic [ref=e536]: "5.0"
              - group "Room in London" [ref=e538]:
                - link "Room in London" [ref=e539] [cursor=pointer]:
                  - /url: /rooms/1407441620981249723?check_in=2026-06-05&check_out=2026-06-07&photo_id=2151711298&source_impression_id=p3_1780337115_P3z2OssJlsfR6zAz&previous_page_section_name=1000
                - generic [ref=e540]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Room in London" [ref=e542] [cursor=pointer]':
                          - img [ref=e544]
                  - generic [ref=e546]:
                    - generic [ref=e548]: Room in London
                    - generic [ref=e549]:
                      - generic [ref=e553]:
                        - generic [ref=e556]: ₹14,224
                        - generic [ref=e558]: for 2 nights
                        - generic [ref=e559]: ₹14,224 for 2 nights
                      - generic [ref=e560]:
                        - generic [ref=e561]: ","
                        - generic [ref=e562]: ·
                      - generic [ref=e563]:
                        - generic [ref=e564]: 5.0 out of 5 average rating
                        - img [ref=e566]
                        - generic [ref=e568]: "5.0"
              - group "Room in London" [ref=e570]:
                - link "Room in London" [ref=e571] [cursor=pointer]:
                  - /url: /rooms/21063433?check_in=2026-07-24&check_out=2026-07-26&photo_id=2156739212&source_impression_id=p3_1780337115_P32E4c1fkyxk5NX-&previous_page_section_name=1000
                - generic [ref=e572]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Room in London" [ref=e574] [cursor=pointer]':
                          - img [ref=e576]
                  - generic [ref=e578]:
                    - generic [ref=e580]: Room in London
                    - generic [ref=e581]:
                      - generic [ref=e585]:
                        - generic [ref=e588]: ₹17,380
                        - generic [ref=e590]: for 2 nights
                        - generic [ref=e591]: ₹17,380 for 2 nights
                      - generic [ref=e592]:
                        - generic [ref=e593]: ","
                        - generic [ref=e594]: ·
                      - generic [ref=e595]:
                        - generic [ref=e596]: 4.89 out of 5 average rating
                        - img [ref=e598]
                        - generic [ref=e600]: "4.89"
              - group "Room in Camberwell" [ref=e602]:
                - link "Room in Camberwell" [ref=e603] [cursor=pointer]:
                  - /url: /rooms/7537897?check_in=2026-11-20&check_out=2026-11-22&photo_id=92145103&source_impression_id=p3_1780337115_P3Zw8QDP3JdvGJtv&previous_page_section_name=1000
                - generic [ref=e604]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Room in Camberwell" [ref=e606] [cursor=pointer]':
                          - img [ref=e608]
                  - generic [ref=e610]:
                    - generic [ref=e612]: Room in Camberwell
                    - generic [ref=e613]:
                      - generic [ref=e617]:
                        - generic [ref=e620]: ₹16,613
                        - generic [ref=e622]: for 2 nights
                        - generic [ref=e623]: ₹16,613 for 2 nights
                      - generic [ref=e624]:
                        - generic [ref=e625]: ","
                        - generic [ref=e626]: ·
                      - generic [ref=e627]:
                        - generic [ref=e628]: 4.94 out of 5 average rating
                        - img [ref=e630]
                        - generic [ref=e632]: "4.94"
              - group "Place to stay in London" [ref=e634]:
                - link "Place to stay in London" [ref=e635] [cursor=pointer]:
                  - /url: /rooms/1676938453923992087?check_in=2026-08-07&check_out=2026-08-09&photo_id=2616896846&source_impression_id=p3_1780337115_P34PHMkftwkWeYDu&previous_page_section_name=1000
                - generic [ref=e636]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - 'button "Add to wishlist: Place to stay in London" [ref=e638] [cursor=pointer]':
                          - img [ref=e640]
                  - generic [ref=e642]:
                    - generic [ref=e644]: Place to stay in London
                    - generic [ref=e645]:
                      - generic [ref=e649]:
                        - generic [ref=e652]: ₹14,569
                        - generic [ref=e654]: for 2 nights
                        - generic [ref=e655]: ₹14,569 for 2 nights
                      - generic [ref=e656]:
                        - generic [ref=e657]: ","
                        - generic [ref=e658]: ·
                      - generic [ref=e659]:
                        - generic [ref=e660]: 5.0 out of 5 average rating
                        - img [ref=e662]
                        - generic [ref=e664]: "5.0"
              - group [ref=e666]:
                - link [ref=e667] [cursor=pointer]:
                  - /url: /rooms/1464398358185119415?check_in=2026-06-19&check_out=2026-06-21&photo_id=2251896015&source_impression_id=p3_1780337115_P34115m2ePmh68z0&previous_page_section_name=1000
                - generic [ref=e668]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - button [ref=e670] [cursor=pointer]:
                          - img [ref=e672]
                  - generic [ref=e674]:
                    - generic [ref=e676]: Room in St Katharine's & Wapping
                    - generic [ref=e677]:
                      - generic [ref=e681]:
                        - generic [ref=e684]: ₹23,514
                        - generic [ref=e686]: for 2 nights
                        - generic [ref=e687]: ₹23,514 for 2 nights
                      - generic [ref=e688]:
                        - generic [ref=e689]: ","
                        - generic [ref=e690]: ·
                      - generic [ref=e691]:
                        - generic [ref=e692]: 5.0 out of 5 average rating
                        - img [ref=e694]
                        - generic [ref=e696]: "5.0"
              - group [ref=e698]:
                - link [ref=e699] [cursor=pointer]:
                  - /url: /rooms/1640000147187383266?check_in=2026-08-21&check_out=2026-08-23&photo_id=2615977123&source_impression_id=p3_1780337115_P3rlH-kiozszBt8q&previous_page_section_name=1000
                - generic [ref=e700]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - button [ref=e702] [cursor=pointer]:
                      - img [ref=e704]
                  - generic [ref=e706]:
                    - generic [ref=e708]: Place to stay in London
                    - generic [ref=e709]:
                      - generic [ref=e713]:
                        - generic [ref=e716]: ₹17,125
                        - generic [ref=e718]: for 2 nights
                        - generic [ref=e719]: ₹17,125 for 2 nights
                      - generic [ref=e720]:
                        - generic [ref=e721]: ","
                        - generic [ref=e722]: ·
                      - generic [ref=e723]:
                        - generic [ref=e724]: 5.0 out of 5 average rating
                        - img [ref=e726]
                        - generic [ref=e728]: "5.0"
              - link [ref=e731] [cursor=pointer]:
                - /url: /s/London/homes?place_id=ChIJdd4hrwug2EcRmSrV3Vo6llI&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e737]: See all
          - group "Popular experiences nearby" [ref=e742]:
            - link "Popular experiences nearby" [ref=e745] [cursor=pointer]:
              - /url: /s/Mumbai/experiences?place_id=ChIJwe1EZjDG5zsRaYxkjY_tpF0&refinement_paths%5B%5D=%2Fexperiences&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e746]:
                - heading "Popular experiences nearby" [level=2] [ref=e747]:
                  - generic [ref=e748]: Popular experiences nearby
                - img [ref=e750]
            - generic [ref=e753]: 6 of 9 items showing
            - generic [ref=e756]:
              - button "Previous" [disabled] [ref=e757]:
                - generic [ref=e758]:
                  - generic [ref=e759]: _
                  - img [ref=e760]
              - button "Next" [ref=e762] [cursor=pointer]:
                - generic [ref=e763]:
                  - generic [ref=e764]: _
                  - img [ref=e765]
            - generic [ref=e771]:
              - group "Dharavi Slum Tour with Optional Dhobi ghat Laundry" [ref=e773]:
                - link "Dharavi Slum Tour with Optional Dhobi ghat Laundry" [ref=e774] [cursor=pointer]:
                  - /url: /experiences/4690821?adults=1&children=0&infants=0
                - generic [ref=e775]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - 'button "Add to wishlist: Dharavi Slum Tour with Optional Dhobi ghat Laundry" [ref=e777] [cursor=pointer]':
                          - img [ref=e779]
                  - generic [ref=e781]:
                    - generic [ref=e783]: Dharavi Slum Tour with Optional Dhobi ghat Laundry
                    - generic [ref=e784]:
                      - generic [ref=e788]:
                        - generic "From ₹600 per guest" [ref=e789]:
                          - generic [ref=e790]: From
                          - generic [ref=e791]: ₹600
                          - generic [ref=e792]: / guest
                        - generic [ref=e793]: From ₹600 per guest
                      - generic [ref=e794]:
                        - generic [ref=e795]: ","
                        - generic [ref=e796]: ·
                      - generic [ref=e797]:
                        - generic [ref=e798]: 4.96 out of 5 average rating
                        - img [ref=e800]
                        - generic [ref=e802]: "4.96"
              - group "Mumbai Street Food and Local Market Tour" [ref=e804]:
                - link "Mumbai Street Food and Local Market Tour" [ref=e805] [cursor=pointer]:
                  - /url: /experiences/5365147?adults=1&children=0&infants=0
                - generic [ref=e806]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - 'button "Add to wishlist: Mumbai Street Food and Local Market Tour" [ref=e808] [cursor=pointer]':
                          - img [ref=e810]
                  - generic [ref=e812]:
                    - generic [ref=e814]: Mumbai Street Food and Local Market Tour
                    - generic [ref=e815]:
                      - generic [ref=e819]:
                        - generic "From ₹1,240 per guest" [ref=e820]:
                          - generic [ref=e821]: From
                          - generic [ref=e822]: ₹1,240
                          - generic [ref=e823]: / guest
                        - generic [ref=e824]: From ₹1,240 per guest
                      - generic [ref=e825]:
                        - generic [ref=e826]: ","
                        - generic [ref=e827]: ·
                      - generic [ref=e828]:
                        - generic [ref=e829]: 4.99 out of 5 average rating
                        - img [ref=e831]
                        - generic [ref=e833]: "4.99"
              - group "Explore iconic sights Of Mumbai in Four Hours" [ref=e835]:
                - link "Explore iconic sights Of Mumbai in Four Hours" [ref=e836] [cursor=pointer]:
                  - /url: /experiences/4534431?adults=1&children=0&infants=0
                - generic [ref=e837]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - 'button "Add to wishlist: Explore iconic sights Of Mumbai in Four Hours" [ref=e839] [cursor=pointer]':
                          - img [ref=e841]
                  - generic [ref=e843]:
                    - generic [ref=e845]: Explore iconic sights Of Mumbai in Four Hours
                    - generic [ref=e846]:
                      - generic [ref=e850]:
                        - generic "From ₹3,500 per guest" [ref=e851]:
                          - generic [ref=e852]: From
                          - generic [ref=e853]: ₹3,500
                          - generic [ref=e854]: / guest
                        - generic [ref=e855]: From ₹3,500 per guest
                      - generic [ref=e856]:
                        - generic [ref=e857]: ","
                        - generic [ref=e858]: ·
                      - generic [ref=e859]:
                        - generic [ref=e860]: 4.99 out of 5 average rating
                        - img [ref=e862]
                        - generic [ref=e864]: "4.99"
              - group "Bike Mumbai’s Calm Streets at Sunrise" [ref=e866]:
                - link "Bike Mumbai’s Calm Streets at Sunrise" [ref=e867] [cursor=pointer]:
                  - /url: /experiences/6988293?adults=1&children=0&infants=0
                - generic [ref=e868]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - 'button "Add to wishlist: Bike Mumbai’s Calm Streets at Sunrise" [ref=e870] [cursor=pointer]':
                          - img [ref=e872]
                  - generic [ref=e874]:
                    - generic [ref=e876]: Bike Mumbai’s Calm Streets at Sunrise
                    - generic [ref=e877]:
                      - generic [ref=e881]:
                        - generic "From ₹1,000 per guest" [ref=e882]:
                          - generic [ref=e883]: From
                          - generic [ref=e884]: ₹1,000
                          - generic [ref=e885]: / guest
                        - generic [ref=e886]: From ₹1,000 per guest
                      - generic [ref=e887]:
                        - generic [ref=e888]: ","
                        - generic [ref=e889]: ·
                      - generic [ref=e890]:
                        - generic [ref=e891]: 5.0 out of 5 average rating
                        - img [ref=e893]
                        - generic [ref=e895]: "5.0"
              - 'group "Mumbai Morning Markets: Flowers, Fish, and More" [ref=e897]':
                - 'link "Mumbai Morning Markets: Flowers, Fish, and More" [ref=e898] [cursor=pointer]':
                  - /url: /experiences/5363945?adults=1&children=0&infants=0
                - generic [ref=e899]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - 'button "Add to wishlist: Mumbai Morning Markets: Flowers, Fish, and More" [ref=e901] [cursor=pointer]':
                          - img [ref=e903]
                  - generic [ref=e905]:
                    - generic [ref=e907]: "Mumbai Morning Markets: Flowers, Fish, and More"
                    - generic [ref=e908]:
                      - generic [ref=e912]:
                        - generic "From ₹1,160 per guest" [ref=e913]:
                          - generic [ref=e914]: From
                          - generic [ref=e915]: ₹1,160
                          - generic [ref=e916]: / guest
                        - generic [ref=e917]: From ₹1,160 per guest
                      - generic [ref=e918]:
                        - generic [ref=e919]: ","
                        - generic [ref=e920]: ·
                      - generic [ref=e921]:
                        - generic [ref=e922]: 4.94 out of 5 average rating
                        - img [ref=e924]
                        - generic [ref=e926]: "4.94"
              - group "Explore Dharavi's hidden gems" [ref=e928]:
                - link "Explore Dharavi's hidden gems" [ref=e929] [cursor=pointer]:
                  - /url: /experiences/4271321?adults=1&children=0&infants=0
                - generic [ref=e930]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - 'button "Add to wishlist: Explore Dharavi''s hidden gems" [ref=e932] [cursor=pointer]':
                          - img [ref=e934]
                  - generic [ref=e936]:
                    - generic [ref=e938]: Explore Dharavi's hidden gems
                    - generic [ref=e939]:
                      - generic [ref=e943]:
                        - generic "From ₹1,000 per guest" [ref=e944]:
                          - generic [ref=e945]: From
                          - generic [ref=e946]: ₹1,000
                          - generic [ref=e947]: / guest
                        - generic [ref=e948]: From ₹1,000 per guest
                      - generic [ref=e949]:
                        - generic [ref=e950]: ","
                        - generic [ref=e951]: ·
                      - generic [ref=e952]:
                        - generic [ref=e953]: 4.96 out of 5 average rating
                        - img [ref=e955]
                        - generic [ref=e957]: "4.96"
              - group [ref=e959]:
                - link [ref=e960] [cursor=pointer]:
                  - /url: /experiences/6881968?adults=1&children=0&infants=0
                - generic [ref=e961]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - button [ref=e963] [cursor=pointer]:
                          - img [ref=e965]
                  - generic [ref=e967]:
                    - generic [ref=e969]: Mumbai Street Food & Night Markets Tour
                    - generic [ref=e970]:
                      - generic [ref=e974]:
                        - generic [ref=e975]:
                          - generic [ref=e976]: From
                          - generic [ref=e977]: ₹560
                          - generic [ref=e978]: / guest
                        - generic [ref=e979]: From ₹560 per guest
                      - generic [ref=e980]:
                        - generic [ref=e981]: ","
                        - generic [ref=e982]: ·
                      - generic [ref=e983]:
                        - generic [ref=e984]: 5.0 out of 5 average rating
                        - img [ref=e986]
                        - generic [ref=e988]: "5.0"
              - group [ref=e990]:
                - link [ref=e991] [cursor=pointer]:
                  - /url: /experiences/5363558?adults=1&children=0&infants=0
                - generic [ref=e992]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic: Popular
                            - generic: Popular
                        - button [ref=e994] [cursor=pointer]:
                          - img [ref=e996]
                  - generic [ref=e998]:
                    - generic [ref=e1000]: Explore the Ancient Elephanta Caves All Inclusive
                    - generic [ref=e1001]:
                      - generic [ref=e1005]:
                        - generic [ref=e1006]:
                          - generic [ref=e1007]: From
                          - generic [ref=e1008]: ₹4,999
                          - generic [ref=e1009]: / guest
                        - generic [ref=e1010]: From ₹4,999 per guest
                      - generic [ref=e1011]:
                        - generic [ref=e1012]: ","
                        - generic [ref=e1013]: ·
                      - generic [ref=e1014]:
                        - generic [ref=e1015]: 4.94 out of 5 average rating
                        - img [ref=e1017]
                        - generic [ref=e1019]: "4.94"
              - link [ref=e1022] [cursor=pointer]:
                - /url: /s/Mumbai/experiences?place_id=ChIJwe1EZjDG5zsRaYxkjY_tpF0&refinement_paths%5B%5D=%2Fexperiences&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e1028]: See all
      - generic [ref=e1033]:
        - heading "Inspiration for future getaways" [level=2] [ref=e1034]
        - generic [ref=e1035]:
          - tablist [ref=e1038]:
            - tab "Popular" [selected] [ref=e1039]
            - tab "Arts & culture" [ref=e1040] [cursor=pointer]
            - tab "Beach" [ref=e1041] [cursor=pointer]
            - tab "Mountains" [ref=e1042] [cursor=pointer]
            - tab "Outdoors" [ref=e1043] [cursor=pointer]
            - tab "Things to do" [ref=e1044] [cursor=pointer]
          - tabpanel "Popular" [ref=e1047]:
            - list [ref=e1048]:
              - listitem [ref=e1049]:
                - link "San Juan Cabin rentals" [ref=e1050] [cursor=pointer]:
                  - /url: /san-juan-puerto-rico/stays/cabins
                  - generic [ref=e1051]: San Juan
                  - generic [ref=e1052]: Cabin rentals
              - listitem [ref=e1053]:
                - link "San Diego Apartment rentals" [ref=e1054] [cursor=pointer]:
                  - /url: /san-diego-ca/stays/condos
                  - generic [ref=e1055]: San Diego
                  - generic [ref=e1056]: Apartment rentals
              - listitem [ref=e1057]:
                - link "Miramar Beach Holiday rentals" [ref=e1058] [cursor=pointer]:
                  - /url: /miramar-beach-fl/stays
                  - generic [ref=e1059]: Miramar Beach
                  - generic [ref=e1060]: Holiday rentals
              - listitem [ref=e1061]:
                - link "Barcelona Holiday rentals" [ref=e1062] [cursor=pointer]:
                  - /url: /barcelona-spain/stays
                  - generic [ref=e1063]: Barcelona
                  - generic [ref=e1064]: Holiday rentals
              - listitem [ref=e1065]:
                - link "Tokyo Villa rentals" [ref=e1066] [cursor=pointer]:
                  - /url: /tokyo-japan/stays/villas
                  - generic [ref=e1067]: Tokyo
                  - generic [ref=e1068]: Villa rentals
              - listitem [ref=e1069]:
                - link "Montreal Monthly Rentals" [ref=e1070] [cursor=pointer]:
                  - /url: /montreal-canada/stays/monthly
                  - generic [ref=e1071]: Montreal
                  - generic [ref=e1072]: Monthly Rentals
              - listitem [ref=e1073]:
                - link "Gulf Shores Monthly Rentals" [ref=e1074] [cursor=pointer]:
                  - /url: /gulf-shores-al/stays/monthly
                  - generic [ref=e1075]: Gulf Shores
                  - generic [ref=e1076]: Monthly Rentals
              - listitem [ref=e1077]:
                - link "Brooklyn Apartment rentals" [ref=e1078] [cursor=pointer]:
                  - /url: /brooklyn-ny/stays/condos
                  - generic [ref=e1079]: Brooklyn
                  - generic [ref=e1080]: Apartment rentals
              - listitem [ref=e1081]:
                - link "Savannah Cottage rentals" [ref=e1082] [cursor=pointer]:
                  - /url: /savannah-ga/stays/cottages
                  - generic [ref=e1083]: Savannah
                  - generic [ref=e1084]: Cottage rentals
              - listitem [ref=e1085]:
                - link "Manhattan Flat rentals" [ref=e1086] [cursor=pointer]:
                  - /url: /manhattan-new-york-ny/stays/apartments
                  - generic [ref=e1087]: Manhattan
                  - generic [ref=e1088]: Flat rentals
              - listitem [ref=e1089]:
                - link "Kansas City Flat rentals" [ref=e1090] [cursor=pointer]:
                  - /url: /kansas-city-mo/stays/apartments
                  - generic [ref=e1091]: Kansas City
                  - generic [ref=e1092]: Flat rentals
              - listitem [ref=e1093]:
                - link "Pocono Mountains Apartment rentals" [ref=e1094] [cursor=pointer]:
                  - /url: /pocono-mountains-pa/stays/condos
                  - generic [ref=e1095]: Pocono Mountains
                  - generic [ref=e1096]: Apartment rentals
              - listitem [ref=e1097]:
                - link "Santo Domingo Flat rentals" [ref=e1098] [cursor=pointer]:
                  - /url: /santo-domingo-dominican-republic/stays/apartments
                  - generic [ref=e1099]: Santo Domingo
                  - generic [ref=e1100]: Flat rentals
              - listitem [ref=e1101]:
                - link "London Monthly Rentals" [ref=e1102] [cursor=pointer]:
                  - /url: /london-united-kingdom/stays/monthly
                  - generic [ref=e1103]: London
                  - generic [ref=e1104]: Monthly Rentals
              - listitem [ref=e1105]:
                - link "Amsterdam Holiday rentals" [ref=e1106] [cursor=pointer]:
                  - /url: /amsterdam-netherlands/stays
                  - generic [ref=e1107]: Amsterdam
                  - generic [ref=e1108]: Holiday rentals
              - listitem [ref=e1109]:
                - link "Detroit Flat rentals" [ref=e1110] [cursor=pointer]:
                  - /url: /detroit-mi/stays/apartments
                  - generic [ref=e1111]: Detroit
                  - generic [ref=e1112]: Flat rentals
              - listitem [ref=e1113]:
                - link "Albuquerque Apartment rentals" [ref=e1114] [cursor=pointer]:
                  - /url: /albuquerque-nm/stays/condos
                  - generic [ref=e1115]: Albuquerque
                  - generic [ref=e1116]: Apartment rentals
              - listitem [ref=e1117]:
                - button "Show more Popular" [ref=e1118] [cursor=pointer]:
                  - generic [ref=e1119]: Show more
                  - img [ref=e1120]
      - contentinfo [ref=e1123]:
        - generic [ref=e1124]:
          - heading "Site Footer" [level=2] [ref=e1126]
          - generic [ref=e1127]:
            - generic [ref=e1128]:
              - heading "Support" [level=3] [ref=e1129]
              - list [ref=e1130]:
                - listitem [ref=e1131]:
                  - link "Help Centre" [ref=e1132] [cursor=pointer]:
                    - /url: /help/home?from=footer
                - listitem [ref=e1133]:
                  - link "Get help with a safety issue" [ref=e1134] [cursor=pointer]:
                    - /url: /help/contact-us?entry=DESKTOP_FOOTER_SAFETY
                - listitem [ref=e1135]:
                  - link "AirCover" [ref=e1136] [cursor=pointer]:
                    - /url: /aircover
                - listitem [ref=e1137]:
                  - link "Anti-discrimination" [ref=e1138] [cursor=pointer]:
                    - /url: /against-discrimination
                - listitem [ref=e1139]:
                  - link "Disability support" [ref=e1140] [cursor=pointer]:
                    - /url: /accessibility
                - listitem [ref=e1141]:
                  - link "Cancellation options" [ref=e1142] [cursor=pointer]:
                    - /url: /help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19
                - listitem [ref=e1143]:
                  - link "Report neighbourhood concern" [ref=e1144] [cursor=pointer]:
                    - /url: /neighbors
            - generic [ref=e1145]:
              - heading "Hosting" [level=3] [ref=e1146]
              - list [ref=e1147]:
                - listitem [ref=e1148]:
                  - link "Airbnb your home" [ref=e1149] [cursor=pointer]:
                    - /url: /host/homes?from_footer=1
                - listitem [ref=e1150]:
                  - link "Airbnb your experience" [ref=e1151] [cursor=pointer]:
                    - /url: /host/experiences
                - listitem [ref=e1152]:
                  - link "Airbnb your service" [ref=e1153] [cursor=pointer]:
                    - /url: /host/services
                - listitem [ref=e1154]:
                  - link "AirCover for Hosts" [ref=e1155] [cursor=pointer]:
                    - /url: /aircover-for-hosts
                - listitem [ref=e1156]:
                  - link "Hosting resources" [ref=e1157] [cursor=pointer]:
                    - /url: /resources
                - listitem [ref=e1158]:
                  - link "Community forum" [ref=e1159] [cursor=pointer]:
                    - /url: https://community.withairbnb.com/t5/Community-Center/ct-p/community-center
                - listitem [ref=e1160]:
                  - link "Hosting responsibly" [ref=e1161] [cursor=pointer]:
                    - /url: /help/responsible-hosting
                - listitem [ref=e1162]:
                  - link "Join a free hosting class" [ref=e1163] [cursor=pointer]:
                    - /url: /e/intro-to-hosting
                - listitem [ref=e1164]:
                  - link "Find a co‑host" [ref=e1165] [cursor=pointer]:
                    - /url: /host/co-hosts
                - listitem [ref=e1166]:
                  - link "Refer a host" [ref=e1167] [cursor=pointer]:
                    - /url: /refer
            - generic [ref=e1168]:
              - heading "Airbnb" [level=3] [ref=e1169]
              - list [ref=e1170]:
                - listitem [ref=e1171]:
                  - link "2026 Summer Release" [ref=e1172] [cursor=pointer]:
                    - /url: /release
                - listitem [ref=e1173]:
                  - link "Newsroom" [ref=e1174] [cursor=pointer]:
                    - /url: /press/news
                - listitem [ref=e1175]:
                  - link "Careers" [ref=e1176] [cursor=pointer]:
                    - /url: /careers
                - listitem [ref=e1177]:
                  - link "Investors" [ref=e1178] [cursor=pointer]:
                    - /url: https://investors.airbnb.com
                - listitem [ref=e1179]:
                  - link "Airbnb.org emergency stays" [ref=e1180] [cursor=pointer]:
                    - /url: https://www.airbnb.org?locale=en-IN
          - generic [ref=e1181]:
            - generic [ref=e1182]: Footer section
            - generic [ref=e1184]:
              - generic [ref=e1186]:
                - generic [ref=e1187]: © 2026 Airbnb, Inc.
                - generic [ref=e1188]:
                  - generic [ref=e1190]: ·
                  - list [ref=e1192]:
                    - listitem [ref=e1193]:
                      - link "Privacy" [ref=e1194] [cursor=pointer]:
                        - /url: /terms/privacy_policy
                      - generic [ref=e1195]:
                        - generic:
                          - generic: ·
                    - listitem [ref=e1196]:
                      - link "Terms" [ref=e1197] [cursor=pointer]:
                        - /url: /terms
                      - generic [ref=e1198]:
                        - generic:
                          - generic: ·
                    - listitem [ref=e1199]:
                      - link "Company details" [ref=e1200] [cursor=pointer]:
                        - /url: /about/company-details
              - generic [ref=e1201]:
                - generic [ref=e1203]:
                  - button "Choose a language" [ref=e1205] [cursor=pointer]:
                    - generic [ref=e1206]:
                      - generic:
                        - img
                        - text: English (IN)
                  - button "Choose a currency" [ref=e1208] [cursor=pointer]:
                    - generic [ref=e1210]:
                      - generic [ref=e1211]: ₹
                      - generic [ref=e1212]: INR
                - list [ref=e1214]:
                  - listitem [ref=e1215]:
                    - link "Navigate to Facebook" [ref=e1216] [cursor=pointer]:
                      - /url: https://www.facebook.com/AirbnbIndia
                      - img [ref=e1218]
                  - listitem [ref=e1220]:
                    - link "Navigate to Twitter" [ref=e1221] [cursor=pointer]:
                      - /url: https://twitter.com/airbnb_in
                      - img [ref=e1223]
                  - listitem [ref=e1225]:
                    - link "Navigate to Instagram" [ref=e1226] [cursor=pointer]:
                      - /url: https://instagram.com/airbnb
                      - img [ref=e1228]
  - generic [ref=e1235]:
    - img [ref=e1238]
    - generic [ref=e1272]:
      - generic [ref=e1273]:
        - generic [ref=e1274]: Prices include all fees
        - generic [ref=e1275]: Prices include all fees
        - generic [ref=e1276]: Prices include all fees
        - generic [ref=e1277]: Prices include all fees
        - generic [ref=e1278]: Prices include all fees
        - generic [ref=e1279]: Prices include all fees
        - generic [ref=e1280]: Prices include all fees
        - generic [ref=e1281]: Prices include all fees
        - generic [ref=e1282]: Prices include all fees
        - generic [ref=e1283]: Prices include all fees
        - generic [ref=e1284]: Prices include all fees
        - generic [ref=e1285]: Prices include all fees
        - generic [ref=e1286]: Prices include all fees
        - generic [ref=e1287]: Prices include all fees
        - generic [ref=e1288]: Prices include all fees
        - generic [ref=e1289]: Prices include all fees
        - generic [ref=e1290]: Prices include all fees
        - generic [ref=e1291]: Prices include all fees
        - generic [ref=e1292]: Prices include all fees
        - generic [ref=e1293]: Prices include all fees
        - generic [ref=e1294]: Prices include all fees
        - generic [ref=e1295]: Prices include all fees
        - generic [ref=e1296]: Prices include all fees
      - generic [ref=e1297]: Prices include all fees
    - generic [ref=e1298]: Prices include all fees
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | import { BasePage } from './BasePage';
  3   | 
  4   | /**
  5   |  * LoginPage - Represents the Airbnb authentication modal/page.
  6   |  *
  7   |  * Airbnb's auth flow:
  8   |  * 1. Click "Log in" → modal appears
  9   |  * 2. Choose method: Email, Google, Apple, Facebook
  10  |  * 3. Enter email → "Continue" → Enter password → "Log in"
  11  |  */
  12  | export class LoginPage extends BasePage {
  13  |   // ─── Auth Modal ────────────────────────────────────────────────────────
  14  |   readonly authModal: Locator;
  15  |   readonly modalTitle: Locator;
  16  | 
  17  |   // ─── Email Login ───────────────────────────────────────────────────────
  18  |   readonly emailInput: Locator;
  19  |   readonly continueButton: Locator;
  20  |   readonly passwordInput: Locator;
  21  |   readonly loginSubmitButton: Locator;
  22  | 
  23  |   // ─── Social Auth ───────────────────────────────────────────────────────
  24  |   readonly continueWithGoogleButton: Locator;
  25  |   readonly continueWithAppleButton: Locator;
  26  |   readonly continueWithFacebookButton: Locator;
  27  | 
  28  |   // ─── Error Messages ────────────────────────────────────────────────────
  29  |   readonly errorMessage: Locator;
  30  | 
  31  |   // ─── Navigation ────────────────────────────────────────────────────────
  32  |   readonly forgotPasswordLink: Locator;
  33  |   readonly signUpLink: Locator;
  34  | 
  35  |   constructor(page: Page) {
  36  |     super(page);
  37  | 
  38  |     this.authModal = page.locator('[data-testid="auth-modal"]')
  39  |       .or(page.locator('[aria-label="Log in or sign up modal"]'));
  40  | 
  41  |     this.modalTitle = page.locator('[data-testid="auth-modal"] h2')
  42  |       .or(page.locator('[aria-label="Log in or sign up modal"] h2'));
  43  | 
  44  |     // Email flow
  45  |     this.emailInput = page.locator('#email')
  46  |       .or(page.getByPlaceholder('Email'));
  47  | 
  48  |     this.continueButton = page.getByRole('button', { name: 'Continue' });
  49  | 
  50  |     this.passwordInput = page.locator('#password')
  51  |       .or(page.getByPlaceholder('Password'));
  52  | 
  53  |     this.loginSubmitButton = page.getByRole('button', { name: 'Log in' });
  54  | 
  55  |     // Social login
  56  |     this.continueWithGoogleButton = page.getByRole('button', { name: /continue with google/i });
  57  |     this.continueWithAppleButton = page.getByRole('button', { name: /continue with apple/i });
  58  |     this.continueWithFacebookButton = page.getByRole('button', { name: /continue with facebook/i });
  59  | 
  60  |     // Error handling
  61  |     this.errorMessage = page.locator('[data-testid="auth-error-message"]')
  62  |       .or(page.locator('[role="alert"]'));
  63  | 
  64  |     // Links
  65  |     this.forgotPasswordLink = page.getByRole('link', { name: /forgot password/i });
  66  |     this.signUpLink = page.getByText("Don't have an account?");
  67  |   }
  68  | 
  69  |   /**
  70  |    * Open the login modal by clicking the navigation login button.
  71  |    */
  72  |   async openLoginModal(): Promise<void> {
  73  |     const loginTrigger = this.page.getByRole('button', { name: /log in/i })
  74  |       .or(this.page.locator('[data-testid="cypress-headernav-profile"]'));
  75  |     await loginTrigger.click();
  76  | 
  77  |     // The menu shows — click "Log in" inside it
  78  |     const menuLoginOption = this.page.getByRole('menuitem', { name: 'Log in' });
  79  |     if (await menuLoginOption.isVisible({ timeout: 2000 }).catch(() => false)) {
  80  |       await menuLoginOption.click();
  81  |     }
  82  | 
> 83  |     await this.authModal.waitFor({ state: 'visible', timeout: 5000 });
      |                          ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  84  |   }
  85  | 
  86  |   /**
  87  |    * Log in using email and password.
  88  |    */
  89  |   async loginWithEmail(email: string, password: string): Promise<void> {
  90  |     // Step 1: Enter email
  91  |     await this.emailInput.fill(email);
  92  |     await this.continueButton.click();
  93  | 
  94  |     // Step 2: Wait for password screen and enter password
  95  |     await this.passwordInput.waitFor({ state: 'visible', timeout: 5000 });
  96  |     await this.passwordInput.fill(password);
  97  |     await this.loginSubmitButton.click();
  98  | 
  99  |     // Wait for auth to complete (modal closes or redirects)
  100 |     await this.page.waitForTimeout(2000);
  101 |   }
  102 | 
  103 |   /**
  104 |    * Full login flow: open modal + authenticate.
  105 |    */
  106 |   async login(email: string, password: string): Promise<void> {
  107 |     await this.openLoginModal();
  108 |     await this.loginWithEmail(email, password);
  109 |   }
  110 | 
  111 |   /**
  112 |    * Get the current error message if authentication fails.
  113 |    */
  114 |   async getErrorMessage(): Promise<string> {
  115 |     await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
  116 |     return (await this.errorMessage.textContent()) ?? '';
  117 |   }
  118 | 
  119 |   /**
  120 |    * Assert the auth modal is open.
  121 |    */
  122 |   async assertModalOpen(): Promise<void> {
  123 |     await expect(this.authModal).toBeVisible();
  124 |   }
  125 | 
  126 |   /**
  127 |    * Assert login error is visible with optional text match.
  128 |    */
  129 |   async assertLoginError(expectedText?: string): Promise<void> {
  130 |     await expect(this.errorMessage).toBeVisible();
  131 |     if (expectedText) {
  132 |       await expect(this.errorMessage).toContainText(expectedText);
  133 |     }
  134 |   }
  135 | }
  136 | 
```