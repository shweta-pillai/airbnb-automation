# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.spec.ts >> Authentication >> Login Modal >> AUTH-005: should display social login options
- Location: tests\e2e\auth.spec.ts:88:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('button[aria-label="Close"]').first()
    - locator resolved to <button type="button" variant="fill" aria-label="Close" class="l1ovpqvx atm_npmupv_14b5rvc_10saat9 atm_4s4swg_18xq13z_10saat9 atm_u9em2p_1r3889l_10saat9 atm_1ezpcqw_1u41vd9_10saat9 atm_fyjbsv_c4n71i_10saat9 atm_1rna0z7_1uk391_10saat9 c15yc2zx atm_1s_glywfm atm_5j_1ssbidh atm_9j_tlke0l atm_tl_1gw4zv3 atm_9s_1o8liyq atm_mk_h2mmj6 atm_l8_idpfg4 atm_gi_idpfg4 atm_3f_glywfm atm_2d_v1pa1f atm_7l_lerloo atm_vy_16ctctf atm_e2_u26bh1 atm_uc_9373uk atm_kd_glywfm atm_kd_glywfm_1w3cfyq atm_3f_glywfm_e4a3ld atm_l8…>…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - button "Main navigation menu" [ref=e98] [cursor=pointer]:
          - img [ref=e100]
    - generic [ref=e103]:
      - main [ref=e104]:
        - generic [ref=e105]:
          - group "Popular homes in Paris" [ref=e110]:
            - link "Popular homes in Paris" [ref=e113] [cursor=pointer]:
              - /url: /s/Paris/homes?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e114]:
                - heading "Popular homes in Paris" [level=2] [ref=e115]:
                  - generic [ref=e116]: Popular homes in Paris
                - img [ref=e118]
            - generic [ref=e121]: 6 of 9 items showing
            - generic [ref=e124]:
              - button "Previous" [disabled] [ref=e125]:
                - generic [ref=e126]:
                  - generic [ref=e127]: _
                  - img [ref=e128]
              - button "Next" [ref=e130] [cursor=pointer]:
                - generic [ref=e131]:
                  - generic [ref=e132]: _
                  - img [ref=e133]
            - generic [ref=e139]:
              - group "Apartment in 15th Arrondissement" [ref=e141]:
                - link "Apartment in 15th Arrondissement" [ref=e142] [cursor=pointer]:
                  - /url: /rooms/588780489931455266?check_in=2026-07-03&check_out=2026-07-05&photo_id=1366393274&source_impression_id=p3_1780337337_P35gQ-eTvgcJkaDX&previous_page_section_name=1000
                - generic [ref=e143]:
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
                        - 'button "Add to wishlist: Apartment in 15th Arrondissement" [ref=e145] [cursor=pointer]':
                          - img [ref=e147]
                  - generic [ref=e149]:
                    - generic [ref=e151]: Apartment in 15th Arrondissement
                    - generic [ref=e152]:
                      - generic [ref=e156]:
                        - generic [ref=e159]: ₹68,274
                        - generic [ref=e161]: for 2 nights
                        - generic [ref=e162]: ₹68,274 for 2 nights
                      - generic [ref=e163]:
                        - generic [ref=e164]: ","
                        - generic [ref=e165]: ·
                      - generic [ref=e166]:
                        - generic [ref=e167]: 5.0 out of 5 average rating
                        - img [ref=e169]
                        - generic [ref=e171]: "5.0"
              - group "Room in 13th Arrondissement" [ref=e173]:
                - link "Room in 13th Arrondissement" [ref=e174] [cursor=pointer]:
                  - /url: /rooms/863468?check_in=2026-07-17&check_out=2026-07-19&photo_id=1662471077&source_impression_id=p3_1780337337_P3dOSc6283-1OAiS&previous_page_section_name=1000
                - generic [ref=e175]:
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
                        - 'button "Add to wishlist: Room in 13th Arrondissement" [ref=e177] [cursor=pointer]':
                          - img [ref=e179]
                  - generic [ref=e181]:
                    - generic [ref=e183]: Room in 13th Arrondissement
                    - generic [ref=e184]:
                      - generic [ref=e188]:
                        - generic [ref=e191]: ₹15,459
                        - generic [ref=e193]: for 2 nights
                        - generic [ref=e194]: ₹15,459 for 2 nights
                      - generic [ref=e195]:
                        - generic [ref=e196]: ","
                        - generic [ref=e197]: ·
                      - generic [ref=e198]:
                        - generic [ref=e199]: 4.93 out of 5 average rating
                        - img [ref=e201]
                        - generic [ref=e203]: "4.93"
              - group "Flat in 9th Arrondissement" [ref=e205]:
                - link "Flat in 9th Arrondissement" [ref=e206] [cursor=pointer]:
                  - /url: /rooms/1271915143781425950?check_in=2026-09-04&check_out=2026-09-06&photo_id=2620277807&source_impression_id=p3_1780337337_P35fN7ZOBOvD_FF3&previous_page_section_name=1000
                - generic [ref=e207]:
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
                        - 'button "Add to wishlist: Flat in 9th Arrondissement" [ref=e209] [cursor=pointer]':
                          - img [ref=e211]
                  - generic [ref=e213]:
                    - generic [ref=e215]: Flat in 9th Arrondissement
                    - generic [ref=e216]:
                      - generic [ref=e220]:
                        - generic [ref=e223]: ₹32,205
                        - generic [ref=e225]: for 2 nights
                        - generic [ref=e226]: ₹32,205 for 2 nights
                      - generic [ref=e227]:
                        - generic [ref=e228]: ","
                        - generic [ref=e229]: ·
                      - generic [ref=e230]:
                        - generic [ref=e231]: 5.0 out of 5 average rating
                        - img [ref=e233]
                        - generic [ref=e235]: "5.0"
              - group "Flat in 9th Arrondissement" [ref=e237]:
                - link "Flat in 9th Arrondissement" [ref=e238] [cursor=pointer]:
                  - /url: /rooms/669229903809413129?check_in=2026-08-21&check_out=2026-08-23&photo_id=1447879856&source_impression_id=p3_1780337337_P3SP_Gw4Ffp0G-ma&previous_page_section_name=1000
                - generic [ref=e239]:
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
                        - 'button "Add to wishlist: Flat in 9th Arrondissement" [ref=e241] [cursor=pointer]':
                          - img [ref=e243]
                  - generic [ref=e245]:
                    - generic [ref=e247]: Flat in 9th Arrondissement
                    - generic [ref=e248]:
                      - generic [ref=e252]:
                        - generic [ref=e255]: ₹31,819
                        - generic [ref=e257]: for 2 nights
                        - generic [ref=e258]: ₹31,819 for 2 nights
                      - generic [ref=e259]:
                        - generic [ref=e260]: ","
                        - generic [ref=e261]: ·
                      - generic [ref=e262]:
                        - generic [ref=e263]: 4.89 out of 5 average rating
                        - img [ref=e265]
                        - generic [ref=e267]: "4.89"
              - group "Flat in Paris" [ref=e269]:
                - link "Flat in Paris" [ref=e270] [cursor=pointer]:
                  - /url: /rooms/1536119775792438782?check_in=2026-07-31&check_out=2026-08-02&photo_id=2394567908&source_impression_id=p3_1780337337_P3gYQnTAqQ60E8PU&previous_page_section_name=1000
                - generic [ref=e271]:
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
                        - 'button "Add to wishlist: Flat in Paris" [ref=e273] [cursor=pointer]':
                          - img [ref=e275]
                  - generic [ref=e277]:
                    - generic [ref=e279]: Flat in Paris
                    - generic [ref=e280]:
                      - generic [ref=e284]:
                        - generic [ref=e287]: ₹1,00,487
                        - generic [ref=e289]: for 2 nights
                        - generic [ref=e290]: ₹1,00,487 for 2 nights
                      - generic [ref=e291]:
                        - generic [ref=e292]: ","
                        - generic [ref=e293]: ·
                      - generic [ref=e294]:
                        - generic [ref=e295]: 5.0 out of 5 average rating
                        - img [ref=e297]
                        - generic [ref=e299]: "5.0"
              - group "Flat in Paris" [ref=e301]:
                - link "Flat in Paris" [ref=e302] [cursor=pointer]:
                  - /url: /rooms/1610735352677786969?check_in=2026-08-14&check_out=2026-08-16&photo_id=2499187056&source_impression_id=p3_1780337337_P3rMp8l01-ZJuP8x&previous_page_section_name=1000
                - generic [ref=e303]:
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
                        - 'button "Add to wishlist: Flat in Paris" [ref=e305] [cursor=pointer]':
                          - img [ref=e307]
                  - generic [ref=e309]:
                    - generic [ref=e311]: Flat in Paris
                    - generic [ref=e312]:
                      - generic [ref=e316]:
                        - generic [ref=e319]: ₹23,188
                        - generic [ref=e321]: for 2 nights
                        - generic [ref=e322]: ₹23,188 for 2 nights
                      - generic [ref=e323]:
                        - generic [ref=e324]: ","
                        - generic [ref=e325]: ·
                      - generic [ref=e326]:
                        - generic [ref=e327]: 4.96 out of 5 average rating
                        - img [ref=e329]
                        - generic [ref=e331]: "4.96"
              - group [ref=e333]:
                - link [ref=e334] [cursor=pointer]:
                  - /url: /rooms/1663965224630354473?check_in=2026-11-27&check_out=2026-11-29&photo_id=2592456958&source_impression_id=p3_1780337337_P3Mk07xdqqXz_pHq&previous_page_section_name=1000
                - generic [ref=e335]:
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
                        - button [ref=e337] [cursor=pointer]:
                          - img [ref=e339]
                  - generic [ref=e341]:
                    - generic [ref=e343]: Flat in Paris
                    - generic [ref=e344]:
                      - generic [ref=e348]:
                        - generic [ref=e351]: ₹61,654
                        - generic [ref=e353]: for 2 nights
                        - generic [ref=e354]: ₹61,654 for 2 nights
                      - generic [ref=e355]:
                        - generic [ref=e356]: ","
                        - generic [ref=e357]: ·
                      - generic [ref=e358]:
                        - generic [ref=e359]: 4.89 out of 5 average rating
                        - img [ref=e361]
                        - generic [ref=e363]: "4.89"
              - group [ref=e365]:
                - link [ref=e366] [cursor=pointer]:
                  - /url: /rooms/29542473?check_in=2026-08-21&check_out=2026-08-23&photo_id=2659033216&source_impression_id=p3_1780337337_P3BZlqZ4g8CdtcyO&previous_page_section_name=1000
                - generic [ref=e367]:
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
                        - button [ref=e369] [cursor=pointer]:
                          - img [ref=e371]
                  - generic [ref=e373]:
                    - generic [ref=e375]: Place to stay in Paris
                    - generic [ref=e376]:
                      - generic [ref=e380]:
                        - generic [ref=e383]: ₹24,569
                        - generic [ref=e385]: for 2 nights
                        - generic [ref=e386]: ₹24,569 for 2 nights
                      - generic [ref=e387]:
                        - generic [ref=e388]: ","
                        - generic [ref=e389]: ·
                      - generic [ref=e390]:
                        - generic [ref=e391]: 5.0 out of 5 average rating
                        - img [ref=e393]
                        - generic [ref=e395]: "5.0"
              - link [ref=e398] [cursor=pointer]:
                - /url: /s/Paris/homes?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e404]: See all
          - group "Stay in London" [ref=e409]:
            - link "Stay in London" [ref=e412] [cursor=pointer]:
              - /url: /s/London/homes?place_id=ChIJdd4hrwug2EcRmSrV3Vo6llI&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e413]:
                - heading "Stay in London" [level=2] [ref=e414]:
                  - generic [ref=e415]: Stay in London
                - img [ref=e417]
            - generic [ref=e420]: 6 of 9 items showing
            - generic [ref=e423]:
              - button "Previous" [disabled] [ref=e424]:
                - generic [ref=e425]:
                  - generic [ref=e426]: _
                  - img [ref=e427]
              - button "Next" [ref=e429] [cursor=pointer]:
                - generic [ref=e430]:
                  - generic [ref=e431]: _
                  - img [ref=e432]
            - generic [ref=e438]:
              - group "Room in Lambeth" [ref=e440]:
                - link "Room in Lambeth" [ref=e441] [cursor=pointer]:
                  - /url: /rooms/8805567?check_in=2026-11-06&check_out=2026-11-08&photo_id=1729058342&source_impression_id=p3_1780337337_P3LUMeOdOLlqDqJz&previous_page_section_name=1000
                - generic [ref=e442]:
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
                        - 'button "Add to wishlist: Room in Lambeth" [ref=e444] [cursor=pointer]':
                          - img [ref=e446]
                  - generic [ref=e448]:
                    - generic [ref=e450]: Room in Lambeth
                    - generic [ref=e451]:
                      - generic [ref=e455]:
                        - generic [ref=e458]: ₹21,214
                        - generic [ref=e460]: for 2 nights
                        - generic [ref=e461]: ₹21,214 for 2 nights
                      - generic [ref=e462]:
                        - generic [ref=e463]: ","
                        - generic [ref=e464]: ·
                      - generic [ref=e465]:
                        - generic [ref=e466]: 4.95 out of 5 average rating
                        - img [ref=e468]
                        - generic [ref=e470]: "4.95"
              - group "Room in Acton" [ref=e472]:
                - link "Room in Acton" [ref=e473] [cursor=pointer]:
                  - /url: /rooms/1396669506787422414?check_in=2026-07-24&check_out=2026-07-26&photo_id=2658002098&source_impression_id=p3_1780337337_P3jusiLCoCj9Oo_e&previous_page_section_name=1000
                - generic [ref=e474]:
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
                        - 'button "Add to wishlist: Room in Acton" [ref=e476] [cursor=pointer]':
                          - img [ref=e478]
                  - generic [ref=e480]:
                    - generic [ref=e482]: Room in Acton
                    - generic [ref=e483]:
                      - generic [ref=e487]:
                        - generic [ref=e490]: ₹16,639
                        - generic [ref=e492]: for 2 nights
                        - generic [ref=e493]: ₹16,639 for 2 nights
                      - generic [ref=e494]:
                        - generic [ref=e495]: ","
                        - generic [ref=e496]: ·
                      - generic [ref=e497]:
                        - generic [ref=e498]: 5.0 out of 5 average rating
                        - img [ref=e500]
                        - generic [ref=e502]: "5.0"
              - group "Room in London" [ref=e504]:
                - link "Room in London" [ref=e505] [cursor=pointer]:
                  - /url: /rooms/1407441620981249723?check_in=2026-06-05&check_out=2026-06-07&photo_id=2151711298&source_impression_id=p3_1780337337_P353T_SU-UU8uaaG&previous_page_section_name=1000
                - generic [ref=e506]:
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
                        - 'button "Add to wishlist: Room in London" [ref=e508] [cursor=pointer]':
                          - img [ref=e510]
                  - generic [ref=e512]:
                    - generic [ref=e514]: Room in London
                    - generic [ref=e515]:
                      - generic [ref=e519]:
                        - generic [ref=e522]: ₹14,224
                        - generic [ref=e524]: for 2 nights
                        - generic [ref=e525]: ₹14,224 for 2 nights
                      - generic [ref=e526]:
                        - generic [ref=e527]: ","
                        - generic [ref=e528]: ·
                      - generic [ref=e529]:
                        - generic [ref=e530]: 5.0 out of 5 average rating
                        - img [ref=e532]
                        - generic [ref=e534]: "5.0"
              - group "Room in London" [ref=e536]:
                - link "Room in London" [ref=e537] [cursor=pointer]:
                  - /url: /rooms/21063433?check_in=2026-07-24&check_out=2026-07-26&photo_id=2156739212&source_impression_id=p3_1780337337_P3ig4SRMYTN9zuFt&previous_page_section_name=1000
                - generic [ref=e538]:
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
                        - 'button "Add to wishlist: Room in London" [ref=e540] [cursor=pointer]':
                          - img [ref=e542]
                  - generic [ref=e544]:
                    - generic [ref=e546]: Room in London
                    - generic [ref=e547]:
                      - generic [ref=e551]:
                        - generic [ref=e554]: ₹17,380
                        - generic [ref=e556]: for 2 nights
                        - generic [ref=e557]: ₹17,380 for 2 nights
                      - generic [ref=e558]:
                        - generic [ref=e559]: ","
                        - generic [ref=e560]: ·
                      - generic [ref=e561]:
                        - generic [ref=e562]: 4.89 out of 5 average rating
                        - img [ref=e564]
                        - generic [ref=e566]: "4.89"
              - group "Room in Camberwell" [ref=e568]:
                - link "Room in Camberwell" [ref=e569] [cursor=pointer]:
                  - /url: /rooms/7537897?check_in=2026-11-20&check_out=2026-11-22&photo_id=92145103&source_impression_id=p3_1780337337_P3IWtn517dYmqTfn&previous_page_section_name=1000
                - generic [ref=e570]:
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
                        - 'button "Add to wishlist: Room in Camberwell" [ref=e572] [cursor=pointer]':
                          - img [ref=e574]
                  - generic [ref=e576]:
                    - generic [ref=e578]: Room in Camberwell
                    - generic [ref=e579]:
                      - generic [ref=e583]:
                        - generic [ref=e586]: ₹16,613
                        - generic [ref=e588]: for 2 nights
                        - generic [ref=e589]: ₹16,613 for 2 nights
                      - generic [ref=e590]:
                        - generic [ref=e591]: ","
                        - generic [ref=e592]: ·
                      - generic [ref=e593]:
                        - generic [ref=e594]: 4.94 out of 5 average rating
                        - img [ref=e596]
                        - generic [ref=e598]: "4.94"
              - group "Place to stay in London" [ref=e600]:
                - link "Place to stay in London" [ref=e601] [cursor=pointer]:
                  - /url: /rooms/1676938453923992087?check_in=2026-08-07&check_out=2026-08-09&photo_id=2616896846&source_impression_id=p3_1780337337_P3EpPpH3O9A34RLB&previous_page_section_name=1000
                - generic [ref=e602]:
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
                        - 'button "Add to wishlist: Place to stay in London" [ref=e604] [cursor=pointer]':
                          - img [ref=e606]
                  - generic [ref=e608]:
                    - generic [ref=e610]: Place to stay in London
                    - generic [ref=e611]:
                      - generic [ref=e615]:
                        - generic [ref=e618]: ₹14,569
                        - generic [ref=e620]: for 2 nights
                        - generic [ref=e621]: ₹14,569 for 2 nights
                      - generic [ref=e622]:
                        - generic [ref=e623]: ","
                        - generic [ref=e624]: ·
                      - generic [ref=e625]:
                        - generic [ref=e626]: 5.0 out of 5 average rating
                        - img [ref=e628]
                        - generic [ref=e630]: "5.0"
              - group [ref=e632]:
                - link [ref=e633] [cursor=pointer]:
                  - /url: /rooms/1464398358185119415?check_in=2026-06-19&check_out=2026-06-21&photo_id=2251896015&source_impression_id=p3_1780337337_P3wnlRt_5KlawWmS&previous_page_section_name=1000
                - generic [ref=e634]:
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
                        - button [ref=e636] [cursor=pointer]:
                          - img [ref=e638]
                  - generic [ref=e640]:
                    - generic [ref=e642]: Room in St Katharine's & Wapping
                    - generic [ref=e643]:
                      - generic [ref=e647]:
                        - generic [ref=e650]: ₹23,514
                        - generic [ref=e652]: for 2 nights
                        - generic [ref=e653]: ₹23,514 for 2 nights
                      - generic [ref=e654]:
                        - generic [ref=e655]: ","
                        - generic [ref=e656]: ·
                      - generic [ref=e657]:
                        - generic [ref=e658]: 5.0 out of 5 average rating
                        - img [ref=e660]
                        - generic [ref=e662]: "5.0"
              - group [ref=e664]:
                - link [ref=e665] [cursor=pointer]:
                  - /url: /rooms/1640000147187383266?check_in=2026-08-21&check_out=2026-08-23&photo_id=2615977123&source_impression_id=p3_1780337337_P3XDnCHFVDeBngpQ&previous_page_section_name=1000
                - generic [ref=e666]:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                    - button [ref=e668] [cursor=pointer]:
                      - img [ref=e670]
                  - generic [ref=e672]:
                    - generic [ref=e674]: Place to stay in London
                    - generic [ref=e675]:
                      - generic [ref=e679]:
                        - generic [ref=e682]: ₹17,125
                        - generic [ref=e684]: for 2 nights
                        - generic [ref=e685]: ₹17,125 for 2 nights
                      - generic [ref=e686]:
                        - generic [ref=e687]: ","
                        - generic [ref=e688]: ·
                      - generic [ref=e689]:
                        - generic [ref=e690]: 5.0 out of 5 average rating
                        - img [ref=e692]
                        - generic [ref=e694]: "5.0"
              - link [ref=e697] [cursor=pointer]:
                - /url: /s/London/homes?place_id=ChIJdd4hrwug2EcRmSrV3Vo6llI&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e703]: See all
          - group "Popular experiences nearby" [ref=e708]:
            - link "Popular experiences nearby" [ref=e711] [cursor=pointer]:
              - /url: /s/Mumbai/experiences?place_id=ChIJwe1EZjDG5zsRaYxkjY_tpF0&refinement_paths%5B%5D=%2Fexperiences&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e712]:
                - heading "Popular experiences nearby" [level=2] [ref=e713]:
                  - generic [ref=e714]: Popular experiences nearby
                - img [ref=e716]
            - generic [ref=e719]: 6 of 9 items showing
            - generic [ref=e722]:
              - button "Previous" [disabled] [ref=e723]:
                - generic [ref=e724]:
                  - generic [ref=e725]: _
                  - img [ref=e726]
              - button "Next" [ref=e728] [cursor=pointer]:
                - generic [ref=e729]:
                  - generic [ref=e730]: _
                  - img [ref=e731]
            - generic [ref=e737]:
              - group "Dharavi Slum Tour with Optional Dhobi ghat Laundry" [ref=e739]:
                - link "Dharavi Slum Tour with Optional Dhobi ghat Laundry" [ref=e740] [cursor=pointer]:
                  - /url: /experiences/4690821?adults=1&children=0&infants=0
                - generic [ref=e741]:
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
                        - 'button "Add to wishlist: Dharavi Slum Tour with Optional Dhobi ghat Laundry" [ref=e743] [cursor=pointer]':
                          - img [ref=e745]
                  - generic [ref=e747]:
                    - generic [ref=e749]: Dharavi Slum Tour with Optional Dhobi ghat Laundry
                    - generic [ref=e750]:
                      - generic [ref=e754]:
                        - generic "From ₹600 per guest" [ref=e755]:
                          - generic [ref=e756]: From
                          - generic [ref=e757]: ₹600
                          - generic [ref=e758]: / guest
                        - generic [ref=e759]: From ₹600 per guest
                      - generic [ref=e760]:
                        - generic [ref=e761]: ","
                        - generic [ref=e762]: ·
                      - generic [ref=e763]:
                        - generic [ref=e764]: 4.96 out of 5 average rating
                        - img [ref=e766]
                        - generic [ref=e768]: "4.96"
              - group "Mumbai Street Food and Local Market Tour" [ref=e770]:
                - link "Mumbai Street Food and Local Market Tour" [ref=e771] [cursor=pointer]:
                  - /url: /experiences/5365147?adults=1&children=0&infants=0
                - generic [ref=e772]:
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
                        - 'button "Add to wishlist: Mumbai Street Food and Local Market Tour" [ref=e774] [cursor=pointer]':
                          - img [ref=e776]
                  - generic [ref=e778]:
                    - generic [ref=e780]: Mumbai Street Food and Local Market Tour
                    - generic [ref=e781]:
                      - generic [ref=e785]:
                        - generic "From ₹1,240 per guest" [ref=e786]:
                          - generic [ref=e787]: From
                          - generic [ref=e788]: ₹1,240
                          - generic [ref=e789]: / guest
                        - generic [ref=e790]: From ₹1,240 per guest
                      - generic [ref=e791]:
                        - generic [ref=e792]: ","
                        - generic [ref=e793]: ·
                      - generic [ref=e794]:
                        - generic [ref=e795]: 4.99 out of 5 average rating
                        - img [ref=e797]
                        - generic [ref=e799]: "4.99"
              - group "Explore iconic sights Of Mumbai in Four Hours" [ref=e801]:
                - link "Explore iconic sights Of Mumbai in Four Hours" [ref=e802] [cursor=pointer]:
                  - /url: /experiences/4534431?adults=1&children=0&infants=0
                - generic [ref=e803]:
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
                        - 'button "Add to wishlist: Explore iconic sights Of Mumbai in Four Hours" [ref=e805] [cursor=pointer]':
                          - img [ref=e807]
                  - generic [ref=e809]:
                    - generic [ref=e811]: Explore iconic sights Of Mumbai in Four Hours
                    - generic [ref=e812]:
                      - generic [ref=e816]:
                        - generic "From ₹3,500 per guest" [ref=e817]:
                          - generic [ref=e818]: From
                          - generic [ref=e819]: ₹3,500
                          - generic [ref=e820]: / guest
                        - generic [ref=e821]: From ₹3,500 per guest
                      - generic [ref=e822]:
                        - generic [ref=e823]: ","
                        - generic [ref=e824]: ·
                      - generic [ref=e825]:
                        - generic [ref=e826]: 4.99 out of 5 average rating
                        - img [ref=e828]
                        - generic [ref=e830]: "4.99"
              - group "Bike Mumbai’s Calm Streets at Sunrise" [ref=e832]:
                - link "Bike Mumbai’s Calm Streets at Sunrise" [ref=e833] [cursor=pointer]:
                  - /url: /experiences/6988293?adults=1&children=0&infants=0
                - generic [ref=e834]:
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
                        - 'button "Add to wishlist: Bike Mumbai’s Calm Streets at Sunrise" [ref=e836] [cursor=pointer]':
                          - img [ref=e838]
                  - generic [ref=e840]:
                    - generic [ref=e842]: Bike Mumbai’s Calm Streets at Sunrise
                    - generic [ref=e843]:
                      - generic [ref=e847]:
                        - generic "From ₹1,000 per guest" [ref=e848]:
                          - generic [ref=e849]: From
                          - generic [ref=e850]: ₹1,000
                          - generic [ref=e851]: / guest
                        - generic [ref=e852]: From ₹1,000 per guest
                      - generic [ref=e853]:
                        - generic [ref=e854]: ","
                        - generic [ref=e855]: ·
                      - generic [ref=e856]:
                        - generic [ref=e857]: 5.0 out of 5 average rating
                        - img [ref=e859]
                        - generic [ref=e861]: "5.0"
              - 'group "Mumbai Morning Markets: Flowers, Fish, and More" [ref=e863]':
                - 'link "Mumbai Morning Markets: Flowers, Fish, and More" [ref=e864] [cursor=pointer]':
                  - /url: /experiences/5363945?adults=1&children=0&infants=0
                - generic [ref=e865]:
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
                        - 'button "Add to wishlist: Mumbai Morning Markets: Flowers, Fish, and More" [ref=e867] [cursor=pointer]':
                          - img [ref=e869]
                  - generic [ref=e871]:
                    - generic [ref=e873]: "Mumbai Morning Markets: Flowers, Fish, and More"
                    - generic [ref=e874]:
                      - generic [ref=e878]:
                        - generic "From ₹1,160 per guest" [ref=e879]:
                          - generic [ref=e880]: From
                          - generic [ref=e881]: ₹1,160
                          - generic [ref=e882]: / guest
                        - generic [ref=e883]: From ₹1,160 per guest
                      - generic [ref=e884]:
                        - generic [ref=e885]: ","
                        - generic [ref=e886]: ·
                      - generic [ref=e887]:
                        - generic [ref=e888]: 4.94 out of 5 average rating
                        - img [ref=e890]
                        - generic [ref=e892]: "4.94"
              - group "Explore Dharavi's hidden gems" [ref=e894]:
                - link "Explore Dharavi's hidden gems" [ref=e895] [cursor=pointer]:
                  - /url: /experiences/4271321?adults=1&children=0&infants=0
                - generic [ref=e896]:
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
                        - 'button "Add to wishlist: Explore Dharavi''s hidden gems" [ref=e898] [cursor=pointer]':
                          - img [ref=e900]
                  - generic [ref=e902]:
                    - generic [ref=e904]: Explore Dharavi's hidden gems
                    - generic [ref=e905]:
                      - generic [ref=e909]:
                        - generic "From ₹1,000 per guest" [ref=e910]:
                          - generic [ref=e911]: From
                          - generic [ref=e912]: ₹1,000
                          - generic [ref=e913]: / guest
                        - generic [ref=e914]: From ₹1,000 per guest
                      - generic [ref=e915]:
                        - generic [ref=e916]: ","
                        - generic [ref=e917]: ·
                      - generic [ref=e918]:
                        - generic [ref=e919]: 4.96 out of 5 average rating
                        - img [ref=e921]
                        - generic [ref=e923]: "4.96"
              - group [ref=e925]:
                - link [ref=e926] [cursor=pointer]:
                  - /url: /experiences/6881968?adults=1&children=0&infants=0
                - generic [ref=e927]:
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
                        - button [ref=e929] [cursor=pointer]:
                          - img [ref=e931]
                  - generic [ref=e933]:
                    - generic [ref=e935]: Mumbai Street Food & Night Markets Tour
                    - generic [ref=e936]:
                      - generic [ref=e940]:
                        - generic [ref=e941]:
                          - generic [ref=e942]: From
                          - generic [ref=e943]: ₹560
                          - generic [ref=e944]: / guest
                        - generic [ref=e945]: From ₹560 per guest
                      - generic [ref=e946]:
                        - generic [ref=e947]: ","
                        - generic [ref=e948]: ·
                      - generic [ref=e949]:
                        - generic [ref=e950]: 5.0 out of 5 average rating
                        - img [ref=e952]
                        - generic [ref=e954]: "5.0"
              - group [ref=e956]:
                - link [ref=e957] [cursor=pointer]:
                  - /url: /experiences/5363558?adults=1&children=0&infants=0
                - generic [ref=e958]:
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
                        - button [ref=e960] [cursor=pointer]:
                          - img [ref=e962]
                  - generic [ref=e964]:
                    - generic [ref=e966]: Explore the Ancient Elephanta Caves All Inclusive
                    - generic [ref=e967]:
                      - generic [ref=e971]:
                        - generic [ref=e972]:
                          - generic [ref=e973]: From
                          - generic [ref=e974]: ₹4,999
                          - generic [ref=e975]: / guest
                        - generic [ref=e976]: From ₹4,999 per guest
                      - generic [ref=e977]:
                        - generic [ref=e978]: ","
                        - generic [ref=e979]: ·
                      - generic [ref=e980]:
                        - generic [ref=e981]: 4.94 out of 5 average rating
                        - img [ref=e983]
                        - generic [ref=e985]: "4.94"
              - link [ref=e988] [cursor=pointer]:
                - /url: /s/Mumbai/experiences?place_id=ChIJwe1EZjDG5zsRaYxkjY_tpF0&refinement_paths%5B%5D=%2Fexperiences&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e994]: See all
      - generic [ref=e999]:
        - heading "Inspiration for future getaways" [level=2] [ref=e1000]
        - generic [ref=e1001]:
          - tablist [ref=e1004]:
            - tab "Popular" [selected] [ref=e1005]
            - tab "Arts & culture" [ref=e1006] [cursor=pointer]
            - tab "Beach" [ref=e1007] [cursor=pointer]
            - tab "Mountains" [ref=e1008] [cursor=pointer]
            - tab "Outdoors" [ref=e1009] [cursor=pointer]
            - tab "Things to do" [ref=e1010] [cursor=pointer]
          - tabpanel "Popular" [ref=e1013]:
            - list [ref=e1014]:
              - listitem [ref=e1015]:
                - link "San Juan Cabin rentals" [ref=e1016] [cursor=pointer]:
                  - /url: /san-juan-puerto-rico/stays/cabins
                  - generic [ref=e1017]: San Juan
                  - generic [ref=e1018]: Cabin rentals
              - listitem [ref=e1019]:
                - link "San Diego Apartment rentals" [ref=e1020] [cursor=pointer]:
                  - /url: /san-diego-ca/stays/condos
                  - generic [ref=e1021]: San Diego
                  - generic [ref=e1022]: Apartment rentals
              - listitem [ref=e1023]:
                - link "Miramar Beach Holiday rentals" [ref=e1024] [cursor=pointer]:
                  - /url: /miramar-beach-fl/stays
                  - generic [ref=e1025]: Miramar Beach
                  - generic [ref=e1026]: Holiday rentals
              - listitem [ref=e1027]:
                - link "Barcelona Holiday rentals" [ref=e1028] [cursor=pointer]:
                  - /url: /barcelona-spain/stays
                  - generic [ref=e1029]: Barcelona
                  - generic [ref=e1030]: Holiday rentals
              - listitem [ref=e1031]:
                - link "Tokyo Villa rentals" [ref=e1032] [cursor=pointer]:
                  - /url: /tokyo-japan/stays/villas
                  - generic [ref=e1033]: Tokyo
                  - generic [ref=e1034]: Villa rentals
              - listitem [ref=e1035]:
                - link "Montreal Monthly Rentals" [ref=e1036] [cursor=pointer]:
                  - /url: /montreal-canada/stays/monthly
                  - generic [ref=e1037]: Montreal
                  - generic [ref=e1038]: Monthly Rentals
              - listitem [ref=e1039]:
                - link "Gulf Shores Monthly Rentals" [ref=e1040] [cursor=pointer]:
                  - /url: /gulf-shores-al/stays/monthly
                  - generic [ref=e1041]: Gulf Shores
                  - generic [ref=e1042]: Monthly Rentals
              - listitem [ref=e1043]:
                - link "Brooklyn Apartment rentals" [ref=e1044] [cursor=pointer]:
                  - /url: /brooklyn-ny/stays/condos
                  - generic [ref=e1045]: Brooklyn
                  - generic [ref=e1046]: Apartment rentals
              - listitem [ref=e1047]:
                - link "Savannah Cottage rentals" [ref=e1048] [cursor=pointer]:
                  - /url: /savannah-ga/stays/cottages
                  - generic [ref=e1049]: Savannah
                  - generic [ref=e1050]: Cottage rentals
              - listitem [ref=e1051]:
                - link "Manhattan Flat rentals" [ref=e1052] [cursor=pointer]:
                  - /url: /manhattan-new-york-ny/stays/apartments
                  - generic [ref=e1053]: Manhattan
                  - generic [ref=e1054]: Flat rentals
              - listitem [ref=e1055]:
                - link "Kansas City Flat rentals" [ref=e1056] [cursor=pointer]:
                  - /url: /kansas-city-mo/stays/apartments
                  - generic [ref=e1057]: Kansas City
                  - generic [ref=e1058]: Flat rentals
              - listitem [ref=e1059]:
                - link "Pocono Mountains Apartment rentals" [ref=e1060] [cursor=pointer]:
                  - /url: /pocono-mountains-pa/stays/condos
                  - generic [ref=e1061]: Pocono Mountains
                  - generic [ref=e1062]: Apartment rentals
              - listitem [ref=e1063]:
                - link "Santo Domingo Flat rentals" [ref=e1064] [cursor=pointer]:
                  - /url: /santo-domingo-dominican-republic/stays/apartments
                  - generic [ref=e1065]: Santo Domingo
                  - generic [ref=e1066]: Flat rentals
              - listitem [ref=e1067]:
                - link "London Monthly Rentals" [ref=e1068] [cursor=pointer]:
                  - /url: /london-united-kingdom/stays/monthly
                  - generic [ref=e1069]: London
                  - generic [ref=e1070]: Monthly Rentals
              - listitem [ref=e1071]:
                - link "Amsterdam Holiday rentals" [ref=e1072] [cursor=pointer]:
                  - /url: /amsterdam-netherlands/stays
                  - generic [ref=e1073]: Amsterdam
                  - generic [ref=e1074]: Holiday rentals
              - listitem [ref=e1075]:
                - link "Detroit Flat rentals" [ref=e1076] [cursor=pointer]:
                  - /url: /detroit-mi/stays/apartments
                  - generic [ref=e1077]: Detroit
                  - generic [ref=e1078]: Flat rentals
              - listitem [ref=e1079]:
                - link "Albuquerque Apartment rentals" [ref=e1080] [cursor=pointer]:
                  - /url: /albuquerque-nm/stays/condos
                  - generic [ref=e1081]: Albuquerque
                  - generic [ref=e1082]: Apartment rentals
              - listitem [ref=e1083]:
                - button "Show more Popular" [ref=e1084] [cursor=pointer]:
                  - generic [ref=e1085]: Show more
                  - img [ref=e1086]
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * BasePage - The foundation for all Page Object Models.
  5   |  *
  6   |  * WHY POM? Page Object Model separates the "how to interact with a page"
  7   |  * from the "what to test". This means:
  8   |  *  - If Airbnb changes a button's selector, you fix it in ONE place
  9   |  *  - Tests are readable like English sentences
  10  |  *  - Reusable across multiple test files
  11  |  */
  12  | export abstract class BasePage {
  13  |   readonly page: Page;
  14  |   readonly baseURL: string;
  15  | 
  16  |   constructor(page: Page, baseURL = 'https://www.airbnb.com') {
  17  |     this.page = page;
  18  |     this.baseURL = baseURL;
  19  |   }
  20  | 
  21  |   /**
  22  |    * Navigate to a specific path on the site.
  23  |    * @param path - URL path relative to baseURL
  24  |    */
  25  |   async navigate(path = '/'): Promise<void> {
  26  |     await this.page.goto(`${this.baseURL}${path}`);
  27  |     await this.waitForPageLoad();
  28  |   }
  29  | 
  30  |   /**
  31  |    * Wait for the page to be in a ready state.
  32  |    * Combines network idle + DOM content loaded for reliability.
  33  |    */
  34  |   async waitForPageLoad(): Promise<void> {
  35  |     await this.page.waitForLoadState('domcontentloaded');
  36  |     // Give dynamic content a moment to settle
  37  |     await this.page.waitForTimeout(500);
  38  |   }
  39  | 
  40  |   /**
  41  |    * Get current URL
  42  |    */
  43  |   async getCurrentURL(): Promise<string> {
  44  |     return this.page.url();
  45  |   }
  46  | 
  47  |   /**
  48  |    * Get page title
  49  |    */
  50  |   async getTitle(): Promise<string> {
  51  |     return this.page.title();
  52  |   }
  53  | 
  54  |   /**
  55  |    * Take a screenshot with a descriptive name.
  56  |    * Useful for debugging and reporting.
  57  |    */
  58  |   async takeScreenshot(name: string): Promise<void> {
  59  |     await this.page.screenshot({
  60  |       path: `test-results/screenshots/${name}-${Date.now()}.png`,
  61  |       fullPage: true,
  62  |     });
  63  |   }
  64  | 
  65  |   /**
  66  |    * Scroll to an element and ensure it's visible.
  67  |    * Needed for Airbnb's dynamic/lazy-loaded content.
  68  |    */
  69  |   async scrollToElement(locator: Locator): Promise<void> {
  70  |     await locator.scrollIntoViewIfNeeded();
  71  |   }
  72  | 
  73  |   /**
  74  |    * Wait for an element to be visible with a custom timeout.
  75  |    */
  76  |   async waitForElement(locator: Locator, timeout = 10000): Promise<void> {
  77  |     await locator.waitFor({ state: 'visible', timeout });
  78  |   }
  79  | 
  80  |   /**
  81  |    * Dismiss any modal/cookie banner that might block interactions.
  82  |    * Airbnb frequently shows translation prompts or cookie consents.
  83  |    */
  84  |   async dismissModals(): Promise<void> {
  85  |     const closeSelectors = [
  86  |       '[aria-label="Close"]',
  87  |       '[data-testid="modal-close-button"]',
  88  |       'button[aria-label="Close"]',
  89  |     ];
  90  | 
  91  |     for (const selector of closeSelectors) {
  92  |       const modal = this.page.locator(selector).first();
  93  |       if (await modal.isVisible({ timeout: 2000 }).catch(() => false)) {
> 94  |         await modal.click();
      |                     ^ Error: locator.click: Test timeout of 60000ms exceeded.
  95  |         await this.page.waitForTimeout(300);
  96  |       }
  97  |     }
  98  |   }
  99  | 
  100 |   /**
  101 |    * Check if we're on a specific page by URL pattern.
  102 |    */
  103 |   async isOnPage(urlPattern: string | RegExp): Promise<boolean> {
  104 |     const url = this.page.url();
  105 |     if (typeof urlPattern === 'string') {
  106 |       return url.includes(urlPattern);
  107 |     }
  108 |     return urlPattern.test(url);
  109 |   }
  110 | 
  111 |   /**
  112 |    * Assert the page URL contains a pattern.
  113 |    */
  114 |   async assertURL(urlPattern: string | RegExp): Promise<void> {
  115 |     await expect(this.page).toHaveURL(urlPattern);
  116 |   }
  117 | 
  118 |   /**
  119 |    * Assert the page title contains text.
  120 |    */
  121 |   async assertTitle(titleText: string): Promise<void> {
  122 |     await expect(this.page).toHaveTitle(new RegExp(titleText, 'i'));
  123 |   }
  124 | }
  125 | 
```