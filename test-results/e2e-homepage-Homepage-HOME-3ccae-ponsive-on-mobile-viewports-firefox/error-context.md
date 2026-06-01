# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\homepage.spec.ts >> Homepage >> HOME-007: homepage should be responsive on mobile viewports
- Location: tests\e2e\homepage.spec.ts:68:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - generic [ref=e15]:
    - heading [level=1] [ref=e16]: Airbnb homepage
    - banner [ref=e20]:
      - link [ref=e21] [cursor=pointer]:
        - /url: /
        - img [ref=e23]
      - search [ref=e25]:
        - generic [ref=e27]:
          - tablist [ref=e29]:
            - tab [selected] [ref=e30] [cursor=pointer]:
              - generic [ref=e33]: Homes
              - generic [ref=e34]: Homes
            - tab [ref=e35] [cursor=pointer]:
              - generic [ref=e39]:
                - text: NEW
                - generic [ref=e40]: NEW
              - generic [ref=e43]: Experiences
              - generic [ref=e44]: Experiences, new
            - tab [ref=e45] [cursor=pointer]:
              - generic [ref=e49]:
                - text: NEW
                - generic [ref=e50]: NEW
              - generic [ref=e53]: Services
              - generic [ref=e54]: Services, new
          - generic [ref=e58]:
            - generic [ref=e62]:
              - generic [ref=e64] [cursor=pointer]:
                - generic [ref=e65]: Where
                - searchbox [ref=e67]
              - button [ref=e69] [cursor=pointer]:
                - generic [ref=e70]:
                  - generic [ref=e71]: When
                  - generic [ref=e73]: Add dates
              - button [ref=e75] [cursor=pointer]:
                - generic [ref=e76]:
                  - generic [ref=e77]: Who
                  - generic [ref=e79]: Add guests
            - button [ref=e80] [cursor=pointer]:
              - img [ref=e83]
      - navigation [ref=e87]:
        - generic [ref=e88]:
          - button [ref=e89] [cursor=pointer]:
            - generic [ref=e90]: Become a host
          - button [ref=e92] [cursor=pointer]:
            - img [ref=e94]
        - button [ref=e98] [cursor=pointer]:
          - img [ref=e100]
    - main [ref=e104]:
      - generic [ref=e105]:
        - group [ref=e110]:
          - link [ref=e113] [cursor=pointer]:
            - /url: /s/Puri/homes?place_id=ChIJleRWAhjEGToR1_rBMIudakk&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
            - generic [ref=e114]:
              - heading [level=2] [ref=e115]:
                - generic [ref=e116]: Popular homes in Puri
              - img [ref=e118]
          - generic [ref=e121]: 6 of 9 items showing
          - generic [ref=e124]:
            - button [disabled] [ref=e125]:
              - generic [ref=e126]:
                - generic [ref=e127]: _
                - img [ref=e128]
            - button [ref=e130] [cursor=pointer]:
              - generic [ref=e131]:
                - generic [ref=e132]: _
                - img [ref=e133]
          - generic [ref=e139]:
            - group [ref=e141]:
              - link [ref=e142] [cursor=pointer]:
                - /url: /rooms/1614449954710582832?check_in=2026-06-12&check_out=2026-06-14&photo_id=2506116994&source_impression_id=p3_1780337650_P3IIy7GHop43xwCA&previous_page_section_name=1000
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
                      - button [ref=e145] [cursor=pointer]:
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
            - group [ref=e173]:
              - link [ref=e174] [cursor=pointer]:
                - /url: /rooms/1387046483945740191?check_in=2026-07-03&check_out=2026-07-05&photo_id=2120373398&source_impression_id=p3_1780337650_P3vGl8wcMNPnkJ2t&previous_page_section_name=1000
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
                      - button [ref=e177] [cursor=pointer]:
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
            - group [ref=e205]:
              - link [ref=e206] [cursor=pointer]:
                - /url: /rooms/1397518846388478383?check_in=2026-06-19&check_out=2026-06-21&photo_id=2155028880&source_impression_id=p3_1780337650_P3r8puo3tXq6M_z-&previous_page_section_name=1000
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
                      - button [ref=e209] [cursor=pointer]:
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
            - group [ref=e237]:
              - link [ref=e238] [cursor=pointer]:
                - /url: /rooms/1589878093972806419?check_in=2026-06-12&check_out=2026-06-14&photo_id=2464316924&source_impression_id=p3_1780337650_P3iJqJfCiVXeAYZn&previous_page_section_name=1000
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
                      - button [ref=e241] [cursor=pointer]:
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
            - group [ref=e269]:
              - link [ref=e270] [cursor=pointer]:
                - /url: /rooms/1479656798931020640?check_in=2026-06-19&check_out=2026-06-21&photo_id=2286762438&source_impression_id=p3_1780337650_P3ZqraEhy4TgOQEL&previous_page_section_name=1000
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
                      - button [ref=e273] [cursor=pointer]:
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
            - group [ref=e301]:
              - link [ref=e302] [cursor=pointer]:
                - /url: /rooms/1460666353743618361?check_in=2026-07-03&check_out=2026-07-05&photo_id=2244919409&source_impression_id=p3_1780337650_P33kjvy2cZwNQtGM&previous_page_section_name=1000
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
                      - button [ref=e305] [cursor=pointer]:
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
                - /url: /rooms/1442442162432459561?check_in=2026-06-19&check_out=2026-06-21&photo_id=2211588083&source_impression_id=p3_1780337650_P3IWVbhXH46dDjNG&previous_page_section_name=1000
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
                - /url: /rooms/1522464689546688495?check_in=2026-07-03&check_out=2026-07-05&photo_id=2355662295&source_impression_id=p3_1780337650_P3Aq4CclO6TUSkIb&previous_page_section_name=1000
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
        - group [ref=e409]:
          - link [ref=e412] [cursor=pointer]:
            - /url: /s/Noida/homes?place_id=ChIJezVzMaTlDDkRP8B8yDDO_zc&refinement_paths%5B%5D=%2Fhomes&date_picker_type=FLEXIBLE_DATES&flexible_trip_lengths%5B%5D=WEEKEND_TRIP&flexible_trip_dates%5B%5D=july&search_type=HOMEPAGE_CAROUSEL_CLICK
            - generic [ref=e413]:
              - heading [level=2] [ref=e414]:
                - generic [ref=e415]: Available next month in Noida
              - img [ref=e417]
          - generic [ref=e420]: 6 of 9 items showing
          - generic [ref=e423]:
            - button [disabled] [ref=e424]:
              - generic [ref=e425]:
                - generic [ref=e426]: _
                - img [ref=e427]
            - button [ref=e429] [cursor=pointer]:
              - generic [ref=e430]:
                - generic [ref=e431]: _
                - img [ref=e432]
          - generic [ref=e438]:
            - group [ref=e440]:
              - link [ref=e441] [cursor=pointer]:
                - /url: /rooms/1633438214841576576?check_in=2026-07-24&check_out=2026-07-26&photo_id=2543856396&source_impression_id=p3_1780337650_P37nK4kspYlkHL1U&previous_page_section_name=1000
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
                      - button [ref=e444] [cursor=pointer]:
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
            - group [ref=e472]:
              - link [ref=e473] [cursor=pointer]:
                - /url: /rooms/1259942929662348274?check_in=2026-07-03&check_out=2026-07-05&photo_id=2066823057&source_impression_id=p3_1780337650_P3rlc1NzzfLRFCgM&previous_page_section_name=1000
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
                      - button [ref=e476] [cursor=pointer]:
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
            - group [ref=e504]:
              - link [ref=e505] [cursor=pointer]:
                - /url: /rooms/51071329?check_in=2026-07-31&check_out=2026-08-02&photo_id=1233994473&source_impression_id=p3_1780337650_P32xJZN7cr9KuqcS&previous_page_section_name=1000
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
                      - button [ref=e508] [cursor=pointer]:
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
            - group [ref=e536]:
              - link [ref=e537] [cursor=pointer]:
                - /url: /rooms/1633994219022612467?check_in=2026-07-03&check_out=2026-07-05&photo_id=2540335254&source_impression_id=p3_1780337650_P30Ahsnx6e-o5hgL&previous_page_section_name=1000
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
                      - button [ref=e540] [cursor=pointer]:
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
            - group [ref=e568]:
              - link [ref=e569] [cursor=pointer]:
                - /url: /rooms/1202678810447204787?check_in=2026-07-17&check_out=2026-07-19&photo_id=2513857643&source_impression_id=p3_1780337650_P3izOOBv562ma37G&previous_page_section_name=1000
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
                      - button [ref=e572] [cursor=pointer]:
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
            - group [ref=e600]:
              - link [ref=e601] [cursor=pointer]:
                - /url: /rooms/1382204621028726963?check_in=2026-07-24&check_out=2026-07-26&photo_id=2253491916&source_impression_id=p3_1780337650_P3myR1wKnRGz-pHP&previous_page_section_name=1000
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
                      - button [ref=e604] [cursor=pointer]:
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
                - /url: /rooms/15182800?check_in=2026-07-17&check_out=2026-07-19&photo_id=220060214&source_impression_id=p3_1780337650_P3sTLYIe2_3OFSGE&previous_page_section_name=1000
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
                - /url: /rooms/50584157?check_in=2026-07-10&check_out=2026-07-12&photo_id=1324674946&source_impression_id=p3_1780337650_P3x1iZSU0g_jRQ4I&previous_page_section_name=1000
              - generic [ref=e666]:
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
                      - button [ref=e668] [cursor=pointer]:
                        - img [ref=e670]
                - generic [ref=e672]:
                  - generic [ref=e674]: Apartment in Sector 15
                  - generic [ref=e675]:
                    - generic [ref=e679]:
                      - generic [ref=e682]: ₹22,596
                      - generic [ref=e684]: for 2 nights
                      - generic [ref=e685]: ₹22,596 for 2 nights
                    - generic [ref=e686]:
                      - generic [ref=e687]: ","
                      - generic [ref=e688]: ·
                    - generic [ref=e689]:
                      - generic [ref=e690]: 4.94 out of 5 average rating
                      - img [ref=e692]
                      - generic [ref=e694]: "4.94"
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
  - dialog [ref=e767]:
    - button "Close" [ref=e769] [cursor=pointer]:
      - img [ref=e771]
    - generic [ref=e773]:
      - img [ref=e775]
      - generic [ref=e776]:
        - heading "Save 10% on a summertime trip" [level=2] [ref=e777]
        - paragraph [ref=e778]:
          - text: Book within 7 days and save up to ₹2,000 on your next stay.
          - link "Terms apply" [ref=e779] [cursor=pointer]:
            - /url: https://www.airbnb.com/e/y26apr-in-b
    - button "Log in to claim offer" [ref=e781] [cursor=pointer]:
      - generic [ref=e782]:
        - generic: Log in to claim offer
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures/pageFixtures';
  2  | 
  3  | /**
  4  |  * Homepage Test Suite
  5  |  *
  6  |  * Validates the landing page loads correctly and all key
  7  |  * interactive elements are present and functional.
  8  |  */
  9  | test.describe('Homepage', () => {
> 10 |   test.beforeEach(async ({ homePage }) => {
     |        ^ Test timeout of 60000ms exceeded while running "beforeEach" hook.
  11 |     await homePage.goto();
  12 |   });
  13 | 
  14 |   /**
  15 |    * HOME-001: Page loads with correct title
  16 |    */
  17 |   test('HOME-001: should load with Airbnb branding in title', async ({ homePage }) => {
  18 |     await homePage.assertPageLoaded();
  19 |     await homePage.assertTitle('Airbnb');
  20 |   });
  21 | 
  22 |   /**
  23 |    * HOME-002: Search bar is present
  24 |    */
  25 |   test('HOME-002: search bar should be visible on load', async ({ homePage }) => {
  26 |     await expect(homePage.destinationInput).toBeVisible();
  27 |   });
  28 | 
  29 |   /**
  30 |    * HOME-003: Destination input is interactive
  31 |    */
  32 |   test('HOME-003: destination input should accept text', async ({ homePage }) => {
  33 |     await homePage.destinationInput.click();
  34 |     await homePage.destinationInput.fill('Paris');
  35 |     await expect(homePage.destinationInput).toHaveValue('Paris');
  36 |   });
  37 | 
  38 |   /**
  39 |    * HOME-004: Navigation shows Log in and Sign up
  40 |    */
  41 |   test('HOME-004: navigation should show authentication options', async ({ page }) => {
  42 |     const hasLogIn = await page.getByRole('link', { name: /log in/i }).isVisible().catch(() => false);
  43 |     const hasSignUp = await page.getByRole('link', { name: /sign up/i }).isVisible().catch(() => false);
  44 |     const hasUserMenu = await page.locator('[data-testid="cypress-headernav-profile"]').isVisible().catch(() => false);
  45 | 
  46 |     // Either individual links or the user menu button should be present
  47 |     expect(hasLogIn || hasSignUp || hasUserMenu).toBe(true);
  48 |   });
  49 | 
  50 |   /**
  51 |    * HOME-005: Listing cards are shown on homepage
  52 |    */
  53 |   test('HOME-005: should display listing cards on the homepage', async ({ homePage }) => {
  54 |     const count = await homePage.getListingCount();
  55 |     expect(count).toBeGreaterThan(0);
  56 |   });
  57 | 
  58 |   /**
  59 |    * HOME-006: "Become a Host" link is present
  60 |    */
  61 |   test('HOME-006: should display Become a Host link', async ({ homePage }) => {
  62 |     await expect(homePage.becomeHostLink).toBeVisible();
  63 |   });
  64 | 
  65 |   /**
  66 |    * HOME-007: Page is responsive — mobile viewport
  67 |    */
  68 |   test('HOME-007: homepage should be responsive on mobile viewports', async ({ page }) => {
  69 |     await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14 size
  70 |     await page.goto('https://www.airbnb.com');
  71 |     await page.waitForLoadState('domcontentloaded');
  72 | 
  73 |     // Page should have loaded without horizontal overflow
  74 |     const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  75 |     expect(bodyWidth).toBeLessThanOrEqual(420); // Slight tolerance
  76 |   });
  77 | 
  78 |   /**
  79 |    * HOME-008: Airbnb logo links back to homepage
  80 |    */
  81 |   test('HOME-008: clicking the logo should navigate to homepage', async ({ page }) => {
  82 |     // First navigate away
  83 |     await page.goto('https://www.airbnb.com/s/New-York/homes');
  84 |     await page.waitForLoadState('domcontentloaded');
  85 | 
  86 |     // Click the logo
  87 |     const logo = page.locator('[aria-label="Airbnb homepage"]')
  88 |       .or(page.locator('a[href="/"]').first());
  89 |     await logo.click();
  90 | 
  91 |     await page.waitForLoadState('domcontentloaded');
  92 |     expect(page.url()).toMatch(/airbnb\.com\/?$/);
  93 |   });
  94 | });
  95 | 
```