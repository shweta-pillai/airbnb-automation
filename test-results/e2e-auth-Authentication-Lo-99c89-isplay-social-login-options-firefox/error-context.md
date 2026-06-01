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
  - waiting for getByRole('button', { name: /log in/i }).or(locator('[data-testid="cypress-headernav-profile"]'))
    - locator resolved to <button type="button" aria-expanded="false" aria-label="Main navigation menu" data-testid="cypress-headernav-profile" data-tooltip-anchor-id="guest-header-dropdownmenu" class="l1ovpqvx atm_npmupv_14b5rvc_10saat9 atm_4s4swg_18xq13z_10saat9 atm_u9em2p_1r3889l_10saat9 atm_1ezpcqw_1u41vd9_10saat9 atm_fyjbsv_c4n71i_10saat9 atm_1rna0z7_1uk391_10saat9 c11lr9v9 atm_1s_glywfm atm_5j_1ssbidh atm_9j_tlke0l atm_tl_1gw4zv3 atm_l8_idpfg4 atm_gi_idpfg4 atm_3f_glywfm atm_2d_v1pa1f atm_7l_lerloo atm_uc_9373uk atm_kd_g…>…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
    - main [ref=e104]:
      - generic [ref=e105]:
        - group "Popular homes in Puri" [ref=e110]:
          - link "Popular homes in Puri" [ref=e113] [cursor=pointer]:
            - /url: /s/Puri/homes?place_id=ChIJleRWAhjEGToR1_rBMIudakk&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
            - generic [ref=e114]:
              - heading "Popular homes in Puri" [level=2] [ref=e115]:
                - generic [ref=e116]: Popular homes in Puri
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
            - group "Apartment in Puri" [ref=e141]:
              - link "Apartment in Puri" [ref=e142] [cursor=pointer]:
                - /url: /rooms/1614449954710582832?check_in=2026-06-12&check_out=2026-06-14&photo_id=2506116994&source_impression_id=p3_1780337233_P34mXnowVVUWc_E6&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Apartment in Puri" [ref=e145] [cursor=pointer]':
                        - img [ref=e147]
                - generic [ref=e149]:
                  - generic [ref=e151]: Apartment in Puri
                  - generic [ref=e152]:
                    - generic [ref=e156]:
                      - generic [ref=e159]: ₹6,163
                      - generic [ref=e161]: for 2 nights
                      - generic [ref=e162]: ₹6,163 for 2 nights
                    - generic [ref=e163]:
                      - generic [ref=e164]: ","
                      - generic [ref=e165]: ·
                    - generic [ref=e166]:
                      - generic [ref=e167]: 4.89 out of 5 average rating
                      - img [ref=e169]
                      - generic [ref=e171]: "4.89"
            - group "Flat in Puri" [ref=e173]:
              - link "Flat in Puri" [ref=e174] [cursor=pointer]:
                - /url: /rooms/1387046483945740191?check_in=2026-07-03&check_out=2026-07-05&photo_id=2120373398&source_impression_id=p3_1780337233_P3bxys0Z4M0kpMKQ&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Puri" [ref=e177] [cursor=pointer]':
                        - img [ref=e179]
                - generic [ref=e181]:
                  - generic [ref=e183]: Flat in Puri
                  - generic [ref=e184]:
                    - generic [ref=e188]:
                      - generic [ref=e191]: ₹8,913
                      - generic [ref=e193]: for 2 nights
                      - generic [ref=e194]: ₹8,913 for 2 nights
                    - generic [ref=e195]:
                      - generic [ref=e196]: ","
                      - generic [ref=e197]: ·
                    - generic [ref=e198]:
                      - generic [ref=e199]: 4.82 out of 5 average rating
                      - img [ref=e201]
                      - generic [ref=e203]: "4.82"
            - group "Flat in Puri" [ref=e205]:
              - link "Flat in Puri" [ref=e206] [cursor=pointer]:
                - /url: /rooms/1397518846388478383?check_in=2026-06-19&check_out=2026-06-21&photo_id=2155028880&source_impression_id=p3_1780337233_P3NOc-V5QXUSA9NP&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Puri" [ref=e209] [cursor=pointer]':
                        - img [ref=e211]
                - generic [ref=e213]:
                  - generic [ref=e215]: Flat in Puri
                  - generic [ref=e216]:
                    - generic [ref=e220]:
                      - generic [ref=e223]: ₹9,872
                      - generic [ref=e225]: for 2 nights
                      - generic [ref=e226]: ₹9,872 for 2 nights
                    - generic [ref=e227]:
                      - generic [ref=e228]: ","
                      - generic [ref=e229]: ·
                    - generic [ref=e230]:
                      - generic [ref=e231]: 4.95 out of 5 average rating
                      - img [ref=e233]
                      - generic [ref=e235]: "4.95"
            - group "Flat in Puri" [ref=e237]:
              - link "Flat in Puri" [ref=e238] [cursor=pointer]:
                - /url: /rooms/1589878093972806419?check_in=2026-06-12&check_out=2026-06-14&photo_id=2464316924&source_impression_id=p3_1780337233_P3bR8SHCI_rUujuI&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Puri" [ref=e241] [cursor=pointer]':
                        - img [ref=e243]
                - generic [ref=e245]:
                  - generic [ref=e247]: Flat in Puri
                  - generic [ref=e248]:
                    - generic [ref=e252]:
                      - generic [ref=e255]: ₹9,815
                      - generic [ref=e257]: for 2 nights
                      - generic [ref=e258]: ₹9,815 for 2 nights
                    - generic [ref=e259]:
                      - generic [ref=e260]: ","
                      - generic [ref=e261]: ·
                    - generic [ref=e262]:
                      - generic [ref=e263]: 5.0 out of 5 average rating
                      - img [ref=e265]
                      - generic [ref=e267]: "5.0"
            - group "Flat in Puri" [ref=e269]:
              - link "Flat in Puri" [ref=e270] [cursor=pointer]:
                - /url: /rooms/1479656798931020640?check_in=2026-06-19&check_out=2026-06-21&photo_id=2286762438&source_impression_id=p3_1780337233_P3IK1_TYIMBz9o59&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Puri" [ref=e273] [cursor=pointer]':
                        - img [ref=e275]
                - generic [ref=e277]:
                  - generic [ref=e279]: Flat in Puri
                  - generic [ref=e280]:
                    - generic [ref=e284]:
                      - generic [ref=e287]: ₹6,848
                      - generic [ref=e289]: for 2 nights
                      - generic [ref=e290]: ₹6,848 for 2 nights
                    - generic [ref=e291]:
                      - generic [ref=e292]: ","
                      - generic [ref=e293]: ·
                    - generic [ref=e294]:
                      - generic [ref=e295]: 4.93 out of 5 average rating
                      - img [ref=e297]
                      - generic [ref=e299]: "4.93"
            - group "Apartment in Puri" [ref=e301]:
              - link "Apartment in Puri" [ref=e302] [cursor=pointer]:
                - /url: /rooms/1460666353743618361?check_in=2026-07-03&check_out=2026-07-05&photo_id=2244919409&source_impression_id=p3_1780337233_P31DWMgBG2NuK65U&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Apartment in Puri" [ref=e305] [cursor=pointer]':
                        - img [ref=e307]
                - generic [ref=e309]:
                  - generic [ref=e311]: Apartment in Puri
                  - generic [ref=e312]:
                    - generic [ref=e316]:
                      - generic [ref=e319]: ₹12,097
                      - generic [ref=e321]: for 2 nights
                      - generic [ref=e322]: ₹12,097 for 2 nights
                    - generic [ref=e323]:
                      - generic [ref=e324]: ","
                      - generic [ref=e325]: ·
                    - generic [ref=e326]:
                      - generic [ref=e327]: 4.94 out of 5 average rating
                      - img [ref=e329]
                      - generic [ref=e331]: "4.94"
            - group [ref=e333]:
              - link [ref=e334] [cursor=pointer]:
                - /url: /rooms/1442442162432459561?check_in=2026-06-19&check_out=2026-06-21&photo_id=2211588083&source_impression_id=p3_1780337233_P3W80Eg6aLA-8s74&previous_page_section_name=1000
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
                  - generic [ref=e343]: Flat in Puri
                  - generic [ref=e344]:
                    - generic [ref=e348]:
                      - generic [ref=e351]: ₹7,121
                      - generic [ref=e353]: for 2 nights
                      - generic [ref=e354]: ₹7,121 for 2 nights
                    - generic [ref=e355]:
                      - generic [ref=e356]: ","
                      - generic [ref=e357]: ·
                    - generic [ref=e358]:
                      - generic [ref=e359]: 4.95 out of 5 average rating
                      - img [ref=e361]
                      - generic [ref=e363]: "4.95"
            - group [ref=e365]:
              - link [ref=e366] [cursor=pointer]:
                - /url: /rooms/1522464689546688495?check_in=2026-07-03&check_out=2026-07-05&photo_id=2355662295&source_impression_id=p3_1780337233_P3k6B4yYKVuQy3XK&previous_page_section_name=1000
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
                  - generic [ref=e375]: Apartment in Puri
                  - generic [ref=e376]:
                    - generic [ref=e380]:
                      - generic [ref=e383]: ₹6,962
                      - generic [ref=e385]: for 2 nights
                      - generic [ref=e386]: ₹6,962 for 2 nights
                    - generic [ref=e387]:
                      - generic [ref=e388]: ","
                      - generic [ref=e389]: ·
                    - generic [ref=e390]:
                      - generic [ref=e391]: 4.98 out of 5 average rating
                      - img [ref=e393]
                      - generic [ref=e395]: "4.98"
            - link [ref=e398] [cursor=pointer]:
              - /url: /s/Puri/homes?place_id=ChIJleRWAhjEGToR1_rBMIudakk&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e404]: See all
        - group "Available next month in Noida" [ref=e409]:
          - link "Available next month in Noida" [ref=e412] [cursor=pointer]:
            - /url: /s/Noida/homes?place_id=ChIJezVzMaTlDDkRP8B8yDDO_zc&refinement_paths%5B%5D=%2Fhomes&date_picker_type=FLEXIBLE_DATES&flexible_trip_lengths%5B%5D=WEEKEND_TRIP&flexible_trip_dates%5B%5D=july&search_type=HOMEPAGE_CAROUSEL_CLICK
            - generic [ref=e413]:
              - heading "Available next month in Noida" [level=2] [ref=e414]:
                - generic [ref=e415]: Available next month in Noida
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
            - group "Flat in Sector 94" [ref=e440]:
              - link "Flat in Sector 94" [ref=e441] [cursor=pointer]:
                - /url: /rooms/1633438214841576576?check_in=2026-07-24&check_out=2026-07-26&photo_id=2543856396&source_impression_id=p3_1780337233_P3qxnvvrxTjgAAcn&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Sector 94" [ref=e444] [cursor=pointer]':
                        - img [ref=e446]
                - generic [ref=e448]:
                  - generic [ref=e450]: Flat in Sector 94
                  - generic [ref=e451]:
                    - generic [ref=e455]:
                      - generic [ref=e458]: ₹5,136
                      - generic [ref=e460]: for 2 nights
                      - generic [ref=e461]: ₹5,136 for 2 nights
                    - generic [ref=e462]:
                      - generic [ref=e463]: ","
                      - generic [ref=e464]: ·
                    - generic [ref=e465]:
                      - generic [ref=e466]: 4.85 out of 5 average rating
                      - img [ref=e468]
                      - generic [ref=e470]: "4.85"
            - group "Flat in Noida" [ref=e472]:
              - link "Flat in Noida" [ref=e473] [cursor=pointer]:
                - /url: /rooms/1259942929662348274?check_in=2026-07-03&check_out=2026-07-05&photo_id=2066823057&source_impression_id=p3_1780337233_P3OiyzXpmBe5h_IP&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Noida" [ref=e476] [cursor=pointer]':
                        - img [ref=e478]
                - generic [ref=e480]:
                  - generic [ref=e482]: Flat in Noida
                  - generic [ref=e483]:
                    - generic [ref=e487]:
                      - generic [ref=e490]: ₹7,422
                      - generic [ref=e492]: for 2 nights
                      - generic [ref=e493]: ₹7,422 for 2 nights
                    - generic [ref=e494]:
                      - generic [ref=e495]: ","
                      - generic [ref=e496]: ·
                    - generic [ref=e497]:
                      - generic [ref=e498]: 4.9 out of 5 average rating
                      - img [ref=e500]
                      - generic [ref=e502]: "4.9"
            - group "Apartment in Sector 19" [ref=e504]:
              - link "Apartment in Sector 19" [ref=e505] [cursor=pointer]:
                - /url: /rooms/51071329?check_in=2026-07-31&check_out=2026-08-02&photo_id=1233994473&source_impression_id=p3_1780337233_P3QLJYSTkOisG3ug&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Apartment in Sector 19" [ref=e508] [cursor=pointer]':
                        - img [ref=e510]
                - generic [ref=e512]:
                  - generic [ref=e514]: Apartment in Sector 19
                  - generic [ref=e515]:
                    - generic [ref=e519]:
                      - generic [ref=e522]: ₹3,116
                      - generic [ref=e524]: for 2 nights
                      - generic [ref=e525]: ₹3,116 for 2 nights
                    - generic [ref=e526]:
                      - generic [ref=e527]: ","
                      - generic [ref=e528]: ·
                    - generic [ref=e529]:
                      - generic [ref=e530]: 4.75 out of 5 average rating
                      - img [ref=e532]
                      - generic [ref=e534]: "4.75"
            - group "Apartment in Sector 104" [ref=e536]:
              - link "Apartment in Sector 104" [ref=e537] [cursor=pointer]:
                - /url: /rooms/1633994219022612467?check_in=2026-07-03&check_out=2026-07-05&photo_id=2540335254&source_impression_id=p3_1780337233_P3iw6XAbDF1H1Ji4&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Apartment in Sector 104" [ref=e540] [cursor=pointer]':
                        - img [ref=e542]
                - generic [ref=e544]:
                  - generic [ref=e546]: Apartment in Sector 104
                  - generic [ref=e547]:
                    - generic [ref=e551]:
                      - generic [ref=e554]: ₹12,325
                      - generic [ref=e556]: for 2 nights
                      - generic [ref=e557]: ₹12,325 for 2 nights
                    - generic [ref=e558]:
                      - generic [ref=e559]: ","
                      - generic [ref=e560]: ·
                    - generic [ref=e561]:
                      - generic [ref=e562]: 5.0 out of 5 average rating
                      - img [ref=e564]
                      - generic [ref=e566]: "5.0"
            - group "Flat in Sector 143B" [ref=e568]:
              - link "Flat in Sector 143B" [ref=e569] [cursor=pointer]:
                - /url: /rooms/1202678810447204787?check_in=2026-07-17&check_out=2026-07-19&photo_id=2513857643&source_impression_id=p3_1780337233_P3RjohfsSpalyXW-&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Flat in Sector 143B" [ref=e572] [cursor=pointer]':
                        - img [ref=e574]
                - generic [ref=e576]:
                  - generic [ref=e578]: Flat in Sector 143B
                  - generic [ref=e579]:
                    - generic [ref=e583]:
                      - generic [ref=e586]: ₹4,417
                      - generic [ref=e588]: for 2 nights
                      - generic [ref=e589]: ₹4,417 for 2 nights
                    - generic [ref=e590]:
                      - generic [ref=e591]: ","
                      - generic [ref=e592]: ·
                    - generic [ref=e593]:
                      - generic [ref=e594]: 5.0 out of 5 average rating
                      - img [ref=e596]
                      - generic [ref=e598]: "5.0"
            - group "Apartment in Noida" [ref=e600]:
              - link "Apartment in Noida" [ref=e601] [cursor=pointer]:
                - /url: /rooms/1382204621028726963?check_in=2026-07-24&check_out=2026-07-26&photo_id=2253491916&source_impression_id=p3_1780337233_P3upcqZYF_cqdtZO&previous_page_section_name=1000
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
                      - 'button "Add to wishlist: Apartment in Noida" [ref=e604] [cursor=pointer]':
                        - img [ref=e606]
                - generic [ref=e608]:
                  - generic [ref=e610]: Apartment in Noida
                  - generic [ref=e611]:
                    - generic [ref=e615]:
                      - generic [ref=e618]: ₹7,053
                      - generic [ref=e620]: for 2 nights
                      - generic [ref=e621]: ₹7,053 for 2 nights
                    - generic [ref=e622]:
                      - generic [ref=e623]: ","
                      - generic [ref=e624]: ·
                    - generic [ref=e625]:
                      - generic [ref=e626]: 4.85 out of 5 average rating
                      - img [ref=e628]
                      - generic [ref=e630]: "4.85"
            - group [ref=e632]:
              - link [ref=e633] [cursor=pointer]:
                - /url: /rooms/15182800?check_in=2026-07-17&check_out=2026-07-19&photo_id=220060214&source_impression_id=p3_1780337233_P3unGCRCLuNL1uvB&previous_page_section_name=1000
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
                  - generic [ref=e642]: Room in Sector 19
                  - generic [ref=e643]:
                    - generic [ref=e647]:
                      - generic [ref=e650]: ₹3,344
                      - generic [ref=e652]: for 2 nights
                      - generic [ref=e653]: ₹3,344 for 2 nights
                    - generic [ref=e654]:
                      - generic [ref=e655]: ","
                      - generic [ref=e656]: ·
                    - generic [ref=e657]:
                      - generic [ref=e658]: 4.95 out of 5 average rating
                      - img [ref=e660]
                      - generic [ref=e662]: "4.95"
            - group [ref=e664]:
              - link [ref=e665] [cursor=pointer]:
                - /url: /rooms/1030201438882199337?check_in=2026-07-31&check_out=2026-08-02&photo_id=1786515525&source_impression_id=p3_1780337233_P3Myq9BcuandxXas&previous_page_section_name=1000
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
                  - generic [ref=e674]: Apartment in Noida
                  - generic [ref=e675]:
                    - generic [ref=e679]:
                      - generic [ref=e682]: ₹27,389
                      - generic [ref=e684]: for 2 nights
                      - generic [ref=e685]: ₹27,389 for 2 nights
                    - generic [ref=e686]:
                      - generic [ref=e687]: ","
                      - generic [ref=e688]: ·
                    - generic [ref=e689]:
                      - generic [ref=e690]: 4.93 out of 5 average rating
                      - img [ref=e692]
                      - generic [ref=e694]: "4.93"
            - link [ref=e697] [cursor=pointer]:
              - /url: /s/Noida/homes?place_id=ChIJezVzMaTlDDkRP8B8yDDO_zc&refinement_paths%5B%5D=%2Fhomes&date_picker_type=FLEXIBLE_DATES&flexible_trip_lengths%5B%5D=WEEKEND_TRIP&flexible_trip_dates%5B%5D=july&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e703]: See all
        - group [ref=e708]:
          - generic [ref=e712]: 0 of 0 items showing
          - generic [ref=e717]:
            - group [ref=e719]
            - group [ref=e725]
            - group [ref=e731]
            - group [ref=e737]
            - group [ref=e743]
            - group [ref=e749]
            - group [ref=e755]
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
> 75  |     await loginTrigger.click();
      |                        ^ Error: locator.click: Test timeout of 60000ms exceeded.
  76  | 
  77  |     // The menu shows — click "Log in" inside it
  78  |     const menuLoginOption = this.page.getByRole('menuitem', { name: 'Log in' });
  79  |     if (await menuLoginOption.isVisible({ timeout: 2000 }).catch(() => false)) {
  80  |       await menuLoginOption.click();
  81  |     }
  82  | 
  83  |     await this.authModal.waitFor({ state: 'visible', timeout: 5000 });
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