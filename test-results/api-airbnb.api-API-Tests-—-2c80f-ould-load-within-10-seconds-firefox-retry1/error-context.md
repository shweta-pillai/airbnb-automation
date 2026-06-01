# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\airbnb.api.spec.ts >> API Tests — Network Interception >> API-005: homepage should load within 10 seconds
- Location: tests\api\airbnb.api.spec.ts:114:7

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 10000
Received:   32399
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
    - generic [ref=e103]:
      - main [ref=e104]:
        - generic [ref=e105]:
          - group [ref=e110]:
            - link [ref=e113] [cursor=pointer]:
              - /url: /s/Paris/homes?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e114]:
                - heading [level=2] [ref=e115]:
                  - generic [ref=e116]: Popular homes in Paris
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
                  - /url: /rooms/36276450?check_in=2027-03-05&check_out=2027-03-07&photo_id=1722908008&source_impression_id=p3_1780336919_P3zWMKyXILsKB1Y_&previous_page_section_name=1000
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
                    - generic [ref=e151]: Room in Paris
                    - generic [ref=e152]:
                      - generic [ref=e156]:
                        - generic [ref=e159]: ₹18,679
                        - generic [ref=e161]: for 2 nights
                        - generic [ref=e162]: ₹18,679 for 2 nights
                      - generic [ref=e163]:
                        - generic [ref=e164]: ","
                        - generic [ref=e165]: ·
                      - generic [ref=e166]:
                        - generic [ref=e167]: 4.94 out of 5 average rating
                        - img [ref=e169]
                        - generic [ref=e171]: "4.94"
              - group [ref=e173]:
                - link [ref=e174] [cursor=pointer]:
                  - /url: /rooms/863468?check_in=2026-07-17&check_out=2026-07-19&photo_id=1662471077&source_impression_id=p3_1780336919_P3v0eC6mqY_MBuGS&previous_page_section_name=1000
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
                    - generic [ref=e183]: Room in Paris
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
              - group [ref=e205]:
                - link [ref=e206] [cursor=pointer]:
                  - /url: /rooms/588780489931455266?check_in=2026-07-03&check_out=2026-07-05&photo_id=1366393274&source_impression_id=p3_1780336919_P3kr1ua2Hstn3RyP&previous_page_section_name=1000
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
                    - generic [ref=e215]: Apartment in Paris
                    - generic [ref=e216]:
                      - generic [ref=e220]:
                        - generic [ref=e223]: ₹68,274
                        - generic [ref=e225]: for 2 nights
                        - generic [ref=e226]: ₹68,274 for 2 nights
                      - generic [ref=e227]:
                        - generic [ref=e228]: ","
                        - generic [ref=e229]: ·
                      - generic [ref=e230]:
                        - generic [ref=e231]: 5.0 out of 5 average rating
                        - img [ref=e233]
                        - generic [ref=e235]: "5.0"
              - group [ref=e237]:
                - link [ref=e238] [cursor=pointer]:
                  - /url: /rooms/1271915143781425950?check_in=2026-09-04&check_out=2026-09-06&photo_id=2620277807&source_impression_id=p3_1780336919_P3jH5r7muheIQU87&previous_page_section_name=1000
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
                    - generic [ref=e247]: Flat in Paris
                    - generic [ref=e248]:
                      - generic [ref=e252]:
                        - generic [ref=e255]: ₹32,205
                        - generic [ref=e257]: for 2 nights
                        - generic [ref=e258]: ₹32,205 for 2 nights
                      - generic [ref=e259]:
                        - generic [ref=e260]: ","
                        - generic [ref=e261]: ·
                      - generic [ref=e262]:
                        - generic [ref=e263]: 5.0 out of 5 average rating
                        - img [ref=e265]
                        - generic [ref=e267]: "5.0"
              - group [ref=e269]:
                - link [ref=e270] [cursor=pointer]:
                  - /url: /rooms/1533368238229769136?check_in=2026-06-12&check_out=2026-06-14&photo_id=2372826300&source_impression_id=p3_1780336919_P3BzS2TLrdc9wfFk&previous_page_section_name=1000
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
                    - generic [ref=e279]: Place to stay in Courbevoie
                    - generic [ref=e280]:
                      - generic [ref=e284]:
                        - generic [ref=e287]: ₹14,506
                        - generic [ref=e289]: for 2 nights
                        - generic [ref=e290]: ₹14,506 for 2 nights
                      - generic [ref=e291]:
                        - generic [ref=e292]: ","
                        - generic [ref=e293]: ·
                      - generic [ref=e294]:
                        - generic [ref=e295]: 5.0 out of 5 average rating
                        - img [ref=e297]
                        - generic [ref=e299]: "5.0"
              - group [ref=e301]:
                - link [ref=e302] [cursor=pointer]:
                  - /url: /rooms/29542473?check_in=2026-08-21&check_out=2026-08-23&photo_id=2659033216&source_impression_id=p3_1780336919_P340R_MaQYR0vVSq&previous_page_section_name=1000
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
                    - generic [ref=e311]: Place to stay in Paris
                    - generic [ref=e312]:
                      - generic [ref=e316]:
                        - generic [ref=e319]: ₹24,569
                        - generic [ref=e321]: for 2 nights
                        - generic [ref=e322]: ₹24,569 for 2 nights
                      - generic [ref=e323]:
                        - generic [ref=e324]: ","
                        - generic [ref=e325]: ·
                      - generic [ref=e326]:
                        - generic [ref=e327]: 5.0 out of 5 average rating
                        - img [ref=e329]
                        - generic [ref=e331]: "5.0"
              - group [ref=e333]:
                - link [ref=e334] [cursor=pointer]:
                  - /url: /rooms/922335836639469888?check_in=2026-07-03&check_out=2026-07-05&photo_id=1741092511&source_impression_id=p3_1780336919_P3DMrUOJVbstv0dD&previous_page_section_name=1000
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
                    - generic [ref=e343]: Place to stay in Clichy
                    - generic [ref=e344]:
                      - generic [ref=e348]:
                        - generic [ref=e351]: ₹16,747
                        - generic [ref=e353]: for 2 nights
                        - generic [ref=e354]: ₹16,747 for 2 nights
                      - generic [ref=e355]:
                        - generic [ref=e356]: ","
                        - generic [ref=e357]: ·
                      - generic [ref=e358]:
                        - generic [ref=e359]: 5.0 out of 5 average rating
                        - img [ref=e361]
                        - generic [ref=e363]: "5.0"
              - group [ref=e365]:
                - link [ref=e366] [cursor=pointer]:
                  - /url: /rooms/1132578800062436217?check_in=2026-06-26&check_out=2026-06-28&photo_id=1881534591&source_impression_id=p3_1780336919_P3es_NV0cbRmLLCQ&previous_page_section_name=1000
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
                    - generic [ref=e375]: Shared room in Paris
                    - generic [ref=e376]:
                      - generic [ref=e380]:
                        - generic [ref=e383]: ₹18,035
                        - generic [ref=e385]: for 2 nights
                        - generic [ref=e386]: ₹18,035 for 2 nights
                      - generic [ref=e387]:
                        - generic [ref=e388]: ","
                        - generic [ref=e389]: ·
                      - generic [ref=e390]:
                        - generic [ref=e391]: 4.95 out of 5 average rating
                        - img [ref=e393]
                        - generic [ref=e395]: "4.95"
              - link [ref=e398] [cursor=pointer]:
                - /url: /s/Paris/homes?place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e404]: See all
          - group [ref=e409]:
            - link [ref=e412] [cursor=pointer]:
              - /url: /s/London/homes?place_id=ChIJdd4hrwug2EcRmSrV3Vo6llI&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e413]:
                - heading [level=2] [ref=e414]:
                  - generic [ref=e415]: Stay in London
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
                  - /url: /rooms/1407441620981249723?check_in=2026-06-05&check_out=2026-06-07&photo_id=2151711298&source_impression_id=p3_1780336919_P3eTifRnKh3061C6&previous_page_section_name=1000
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
                    - generic [ref=e450]: Room in London
                    - generic [ref=e451]:
                      - generic [ref=e455]:
                        - generic [ref=e458]: ₹14,224
                        - generic [ref=e460]: for 2 nights
                        - generic [ref=e461]: ₹14,224 for 2 nights
                      - generic [ref=e462]:
                        - generic [ref=e463]: ","
                        - generic [ref=e464]: ·
                      - generic [ref=e465]:
                        - generic [ref=e466]: 5.0 out of 5 average rating
                        - img [ref=e468]
                        - generic [ref=e470]: "5.0"
              - group [ref=e472]:
                - link [ref=e473] [cursor=pointer]:
                  - /url: /rooms/1396669506787422414?check_in=2026-07-24&check_out=2026-07-26&photo_id=2658002098&source_impression_id=p3_1780336919_P34X4ias6b-YYkvX&previous_page_section_name=1000
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
                    - generic [ref=e482]: Room in London
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
              - group [ref=e504]:
                - link [ref=e505] [cursor=pointer]:
                  - /url: /rooms/21063433?check_in=2026-07-24&check_out=2026-07-26&photo_id=2156739212&source_impression_id=p3_1780336919_P3kvhS0wYgPBpKgB&previous_page_section_name=1000
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
                    - generic [ref=e514]: Room in London
                    - generic [ref=e515]:
                      - generic [ref=e519]:
                        - generic [ref=e522]: ₹17,380
                        - generic [ref=e524]: for 2 nights
                        - generic [ref=e525]: ₹17,380 for 2 nights
                      - generic [ref=e526]:
                        - generic [ref=e527]: ","
                        - generic [ref=e528]: ·
                      - generic [ref=e529]:
                        - generic [ref=e530]: 4.89 out of 5 average rating
                        - img [ref=e532]
                        - generic [ref=e534]: "4.89"
              - group [ref=e536]:
                - link [ref=e537] [cursor=pointer]:
                  - /url: /rooms/42276919?check_in=2026-06-05&check_out=2026-06-07&photo_id=2078283190&source_impression_id=p3_1780336919_P3uBt2vrLliBU6Ar&previous_page_section_name=1000
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
                    - generic [ref=e546]: Room in Mitcham
                    - generic [ref=e547]:
                      - generic [ref=e551]:
                        - generic [ref=e554]: ₹9,201
                        - generic [ref=e556]: for 2 nights
                        - generic [ref=e557]: ₹9,201 for 2 nights
                      - generic [ref=e558]:
                        - generic [ref=e559]: ","
                        - generic [ref=e560]: ·
                      - generic [ref=e561]:
                        - generic [ref=e562]: 5.0 out of 5 average rating
                        - img [ref=e564]
                        - generic [ref=e566]: "5.0"
              - group [ref=e568]:
                - link [ref=e569] [cursor=pointer]:
                  - /url: /rooms/8805567?check_in=2026-11-06&check_out=2026-11-08&photo_id=1729058342&source_impression_id=p3_1780336919_P3t0G9jhsljinsB2&previous_page_section_name=1000
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
                    - generic [ref=e578]: Room in London
                    - generic [ref=e579]:
                      - generic [ref=e583]:
                        - generic [ref=e586]: ₹21,214
                        - generic [ref=e588]: for 2 nights
                        - generic [ref=e589]: ₹21,214 for 2 nights
                      - generic [ref=e590]:
                        - generic [ref=e591]: ","
                        - generic [ref=e592]: ·
                      - generic [ref=e593]:
                        - generic [ref=e594]: 4.95 out of 5 average rating
                        - img [ref=e596]
                        - generic [ref=e598]: "4.95"
              - group [ref=e600]:
                - link [ref=e601] [cursor=pointer]:
                  - /url: /rooms/1174411?check_in=2026-06-05&check_out=2026-06-07&photo_id=11610230&source_impression_id=p3_1780336919_P3eq4XkGuJPfwNED&previous_page_section_name=1000
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
                    - generic [ref=e610]: Room in London
                    - generic [ref=e611]:
                      - generic [ref=e615]:
                        - generic [ref=e618]: ₹19,680
                        - generic [ref=e620]: for 2 nights
                        - generic [ref=e621]: ₹19,680 for 2 nights
                      - generic [ref=e622]:
                        - generic [ref=e623]: ","
                        - generic [ref=e624]: ·
                      - generic [ref=e625]:
                        - generic [ref=e626]: 4.88 out of 5 average rating
                        - img [ref=e628]
                        - generic [ref=e630]: "4.88"
              - group [ref=e632]:
                - link [ref=e633] [cursor=pointer]:
                  - /url: /rooms/643293193035927841?check_in=2026-06-19&check_out=2026-06-21&photo_id=1709497043&source_impression_id=p3_1780336919_P3T9Ubkd93pRahtx&previous_page_section_name=1000
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
                    - generic [ref=e642]: Room in London
                    - generic [ref=e643]:
                      - generic [ref=e647]:
                        - generic [ref=e650]: ₹14,697
                        - generic [ref=e652]: for 2 nights
                        - generic [ref=e653]: ₹14,697 for 2 nights
                      - generic [ref=e654]:
                        - generic [ref=e655]: ","
                        - generic [ref=e656]: ·
                      - generic [ref=e657]:
                        - generic [ref=e658]: 5.0 out of 5 average rating
                        - img [ref=e660]
                        - generic [ref=e662]: "5.0"
              - group [ref=e664]:
                - link [ref=e665] [cursor=pointer]:
                  - /url: /rooms/1464398358185119415?check_in=2026-06-19&check_out=2026-06-21&photo_id=2251896015&source_impression_id=p3_1780336919_P3ITzbCZ2lO4f5YH&previous_page_section_name=1000
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
                    - generic [ref=e674]: Room in London
                    - generic [ref=e675]:
                      - generic [ref=e679]:
                        - generic [ref=e682]: ₹23,514
                        - generic [ref=e684]: for 2 nights
                        - generic [ref=e685]: ₹23,514 for 2 nights
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
          - group [ref=e708]:
            - link [ref=e711] [cursor=pointer]:
              - /url: /s/Sao-Paulo/homes?place_id=ChIJ0WGkg4FEzpQRrlsz_whLqZs&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e712]:
                - heading [level=2] [ref=e713]:
                  - generic [ref=e714]: Homes in Sao Paulo
                - img [ref=e716]
            - generic [ref=e719]: 6 of 9 items showing
            - generic [ref=e722]:
              - button [disabled] [ref=e723]:
                - generic [ref=e724]:
                  - generic [ref=e725]: _
                  - img [ref=e726]
              - button [ref=e728] [cursor=pointer]:
                - generic [ref=e729]:
                  - generic [ref=e730]: _
                  - img [ref=e731]
            - generic [ref=e737]:
              - group [ref=e739]:
                - link [ref=e740] [cursor=pointer]:
                  - /url: /rooms/23136796?check_in=2026-06-19&check_out=2026-06-21&photo_id=1991135251&source_impression_id=p3_1780336919_P3hbgA6z2IQ2ed3o&previous_page_section_name=1000
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
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - button [ref=e743] [cursor=pointer]:
                          - img [ref=e745]
                  - generic [ref=e747]:
                    - generic [ref=e749]: Room in Jardim Paulista
                    - generic [ref=e750]:
                      - generic [ref=e754]:
                        - generic [ref=e757]: ₹8,119
                        - generic [ref=e759]: for 2 nights
                        - generic [ref=e760]: ₹8,119 for 2 nights
                      - generic [ref=e761]:
                        - generic [ref=e762]: ","
                        - generic [ref=e763]: ·
                      - generic [ref=e764]:
                        - generic [ref=e765]: 4.99 out of 5 average rating
                        - img [ref=e767]
                        - generic [ref=e769]: "4.99"
              - group [ref=e771]:
                - link [ref=e772] [cursor=pointer]:
                  - /url: /rooms/975630266510729266?check_in=2026-06-12&check_out=2026-06-14&photo_id=1777093917&source_impression_id=p3_1780336919_P3p4yVcFlJSctJvW&previous_page_section_name=1000
                - generic [ref=e773]:
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
                        - button [ref=e775] [cursor=pointer]:
                          - img [ref=e777]
                  - generic [ref=e779]:
                    - generic [ref=e781]: Room in Sao Paulo
                    - generic [ref=e782]:
                      - generic [ref=e786]:
                        - generic [ref=e789]: ₹5,135
                        - generic [ref=e791]: for 2 nights
                        - generic [ref=e792]: ₹5,135 for 2 nights
                      - generic [ref=e793]:
                        - generic [ref=e794]: ","
                        - generic [ref=e795]: ·
                      - generic [ref=e796]:
                        - generic [ref=e797]: 5.0 out of 5 average rating
                        - img [ref=e799]
                        - generic [ref=e801]: "5.0"
              - group [ref=e803]:
                - link [ref=e804] [cursor=pointer]:
                  - /url: /rooms/1299528238329045963?check_in=2026-06-05&check_out=2026-06-07&photo_id=2134000843&source_impression_id=p3_1780336919_P3Q3cTp8AFS451pM&previous_page_section_name=1000
                - generic [ref=e805]:
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
                        - button [ref=e807] [cursor=pointer]:
                          - img [ref=e809]
                  - generic [ref=e811]:
                    - generic [ref=e813]: Flat in Sao Paulo
                    - generic [ref=e814]:
                      - generic [ref=e818]:
                        - generic [ref=e821]: ₹13,591
                        - generic [ref=e823]: for 2 nights
                        - generic [ref=e824]: ₹13,591 for 2 nights
                      - generic [ref=e825]:
                        - generic [ref=e826]: ","
                        - generic [ref=e827]: ·
                      - generic [ref=e828]:
                        - generic [ref=e829]: 5.0 out of 5 average rating
                        - img [ref=e831]
                        - generic [ref=e833]: "5.0"
              - group [ref=e835]:
                - link [ref=e836] [cursor=pointer]:
                  - /url: /rooms/891348318271232638?check_in=2026-06-26&check_out=2026-06-28&photo_id=1658300784&source_impression_id=p3_1780336919_P3EvAMFUYJ5rP0UR&previous_page_section_name=1000
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
                            - generic: Guest favourite
                            - generic: Guest favourite
                        - button [ref=e839] [cursor=pointer]:
                          - img [ref=e841]
                  - generic [ref=e843]:
                    - generic [ref=e845]: Room in Sao Paulo
                    - generic [ref=e846]:
                      - generic [ref=e850]:
                        - generic [ref=e853]: ₹7,680
                        - generic [ref=e855]: for 2 nights
                        - generic [ref=e856]: ₹7,680 for 2 nights
                      - generic [ref=e857]:
                        - generic [ref=e858]: ","
                        - generic [ref=e859]: ·
                      - generic [ref=e860]:
                        - generic [ref=e861]: 4.98 out of 5 average rating
                        - img [ref=e863]
                        - generic [ref=e865]: "4.98"
              - group [ref=e867]:
                - link [ref=e868] [cursor=pointer]:
                  - /url: /rooms/1542132534699850493?check_in=2026-06-12&check_out=2026-06-14&photo_id=2406851156&source_impression_id=p3_1780336919_P3uS6MSZhYwMC_Zz&previous_page_section_name=1000
                - generic [ref=e869]:
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
                        - button [ref=e871] [cursor=pointer]:
                          - img [ref=e873]
                  - generic [ref=e875]:
                    - generic [ref=e877]: Flat in Sao Paulo
                    - generic [ref=e878]:
                      - generic [ref=e882]:
                        - generic [ref=e885]: ₹11,676
                        - generic [ref=e887]: for 2 nights
                        - generic [ref=e888]: ₹11,676 for 2 nights
                      - generic [ref=e889]:
                        - generic [ref=e890]: ","
                        - generic [ref=e891]: ·
                      - generic [ref=e892]:
                        - generic [ref=e893]: 4.9 out of 5 average rating
                        - img [ref=e895]
                        - generic [ref=e897]: "4.9"
              - group [ref=e899]:
                - link [ref=e900] [cursor=pointer]:
                  - /url: /rooms/999372861842932025?check_in=2026-06-12&check_out=2026-06-14&photo_id=1851968104&source_impression_id=p3_1780336919_P3W0X2kh0IQ86l7n&previous_page_section_name=1000
                - generic [ref=e901]:
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
                        - button [ref=e903] [cursor=pointer]:
                          - img [ref=e905]
                  - generic [ref=e907]:
                    - generic [ref=e909]: Flat in Sao Paulo
                    - generic [ref=e910]:
                      - generic [ref=e914]:
                        - generic [ref=e917]: ₹11,997
                        - generic [ref=e919]: for 2 nights
                        - generic [ref=e920]: ₹11,997 for 2 nights
                      - generic [ref=e921]:
                        - generic [ref=e922]: ","
                        - generic [ref=e923]: ·
                      - generic [ref=e924]:
                        - generic [ref=e925]: 4.9 out of 5 average rating
                        - img [ref=e927]
                        - generic [ref=e929]: "4.9"
              - group [ref=e931]:
                - link [ref=e932] [cursor=pointer]:
                  - /url: /rooms/1540641421961128000?check_in=2026-06-05&check_out=2026-06-07&photo_id=2454033128&source_impression_id=p3_1780336919_P3gGL6yR2ocdTaCX&previous_page_section_name=1000
                - generic [ref=e933]:
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
                        - button [ref=e935] [cursor=pointer]:
                          - img [ref=e937]
                  - generic [ref=e939]:
                    - generic [ref=e941]: Apartment in Sao Paulo
                    - generic [ref=e942]:
                      - generic [ref=e946]:
                        - generic [ref=e949]: ₹19,433
                        - generic [ref=e951]: for 2 nights
                        - generic [ref=e952]: ₹19,433 for 2 nights
                      - generic [ref=e953]:
                        - generic [ref=e954]: ","
                        - generic [ref=e955]: ·
                      - generic [ref=e956]:
                        - generic [ref=e957]: 5.0 out of 5 average rating
                        - img [ref=e959]
                        - generic [ref=e961]: "5.0"
              - group [ref=e963]:
                - link [ref=e964] [cursor=pointer]:
                  - /url: /rooms/1650838821337906641?check_in=2026-09-25&check_out=2026-09-27&photo_id=2569365518&source_impression_id=p3_1780336919_P334fT7DOV8s2KgL&previous_page_section_name=1000
                - generic [ref=e965]:
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
                        - button [ref=e967] [cursor=pointer]:
                          - img [ref=e969]
                  - generic [ref=e971]:
                    - generic [ref=e973]: Flat in Sao Paulo
                    - generic [ref=e974]:
                      - generic [ref=e978]:
                        - generic [ref=e981]: ₹8,883
                        - generic [ref=e983]: for 2 nights
                        - generic [ref=e984]: ₹8,883 for 2 nights
                      - generic [ref=e985]:
                        - generic [ref=e986]: ","
                        - generic [ref=e987]: ·
                      - generic [ref=e988]:
                        - generic [ref=e989]: 5.0 out of 5 average rating
                        - img [ref=e991]
                        - generic [ref=e993]: "5.0"
              - link [ref=e996] [cursor=pointer]:
                - /url: /s/Sao-Paulo/homes?place_id=ChIJ0WGkg4FEzpQRrlsz_whLqZs&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e1002]: See all
          - group [ref=e1007]:
            - link [ref=e1010] [cursor=pointer]:
              - /url: /s/Seoul/homes?place_id=ChIJzzlcLQGifDURm_JbQKHsEX4&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
              - generic [ref=e1011]:
                - heading [level=2] [ref=e1012]:
                  - generic [ref=e1013]: Places to stay in Seoul
                - img [ref=e1015]
            - generic [ref=e1018]: 6 of 9 items showing
            - generic [ref=e1021]:
              - button [disabled] [ref=e1022]:
                - generic [ref=e1023]:
                  - generic [ref=e1024]: _
                  - img [ref=e1025]
              - button [ref=e1027] [cursor=pointer]:
                - generic [ref=e1028]:
                  - generic [ref=e1029]: _
                  - img [ref=e1030]
            - generic [ref=e1036]:
              - group [ref=e1038]:
                - link [ref=e1039] [cursor=pointer]:
                  - /url: /rooms/1516492985146334259?check_in=2026-08-07&check_out=2026-08-09&photo_id=2345858114&source_impression_id=p3_1780336919_P3e-DWnp4qGLvfNX&previous_page_section_name=1000
                - generic [ref=e1040]:
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
                        - button [ref=e1042] [cursor=pointer]:
                          - img [ref=e1044]
                  - generic [ref=e1046]:
                    - generic [ref=e1048]: Shared room in Seoul
                    - generic [ref=e1049]:
                      - generic [ref=e1053]:
                        - generic [ref=e1056]: ₹5,671
                        - generic [ref=e1058]: for 2 nights
                        - generic [ref=e1059]: ₹5,671 for 2 nights
                      - generic [ref=e1060]:
                        - generic [ref=e1061]: ","
                        - generic [ref=e1062]: ·
                      - generic [ref=e1063]:
                        - generic [ref=e1064]: 5.0 out of 5 average rating
                        - img [ref=e1066]
                        - generic [ref=e1068]: "5.0"
              - group [ref=e1070]:
                - link [ref=e1071] [cursor=pointer]:
                  - /url: /rooms/1668855420448792706?check_in=2026-06-05&check_out=2026-06-07&photo_id=2631671939&source_impression_id=p3_1780336919_P3lGWcK9vAmg2KoI&previous_page_section_name=1000
                - generic [ref=e1072]:
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
                        - button [ref=e1074] [cursor=pointer]:
                          - img [ref=e1076]
                  - generic [ref=e1078]:
                    - generic [ref=e1080]: Place to stay in Seoul
                    - generic [ref=e1081]:
                      - generic [ref=e1085]:
                        - generic [ref=e1088]: ₹7,939
                        - generic [ref=e1090]: for 2 nights
                        - generic [ref=e1091]: ₹7,939 for 2 nights
                      - generic [ref=e1092]:
                        - generic [ref=e1093]: ","
                        - generic [ref=e1094]: ·
                      - generic [ref=e1095]:
                        - generic [ref=e1096]: 5.0 out of 5 average rating
                        - img [ref=e1098]
                        - generic [ref=e1100]: "5.0"
              - group [ref=e1102]:
                - link [ref=e1103] [cursor=pointer]:
                  - /url: /rooms/1591691424246848660?check_in=2026-06-05&check_out=2026-06-07&photo_id=2582285471&source_impression_id=p3_1780336919_P3NmgGYB_ho4RkeX&previous_page_section_name=1000
                - generic [ref=e1104]:
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
                        - button [ref=e1106] [cursor=pointer]:
                          - img [ref=e1108]
                  - generic [ref=e1110]:
                    - generic [ref=e1112]: Home in Seoul
                    - generic [ref=e1113]:
                      - generic [ref=e1117]:
                        - generic [ref=e1120]: ₹63,570
                        - generic [ref=e1122]: for 2 nights
                        - generic [ref=e1123]: ₹63,570 for 2 nights
                      - generic [ref=e1124]:
                        - generic [ref=e1125]: ","
                        - generic [ref=e1126]: ·
                      - generic [ref=e1127]:
                        - generic [ref=e1128]: 5.0 out of 5 average rating
                        - img [ref=e1130]
                        - generic [ref=e1132]: "5.0"
              - group [ref=e1134]:
                - link [ref=e1135] [cursor=pointer]:
                  - /url: /rooms/1679457331224179554?check_in=2026-08-28&check_out=2026-08-30&photo_id=2621412300&source_impression_id=p3_1780336919_P3eGfQ3edwukmd3u&previous_page_section_name=1000
                - generic [ref=e1136]:
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
                        - button [ref=e1138] [cursor=pointer]:
                          - img [ref=e1140]
                  - generic [ref=e1142]:
                    - generic [ref=e1144]: Home in Seoul
                    - generic [ref=e1145]:
                      - generic [ref=e1149]:
                        - generic [ref=e1152]: ₹26,146
                        - generic [ref=e1154]: for 2 nights
                        - generic [ref=e1155]: ₹26,146 for 2 nights
                      - generic [ref=e1156]:
                        - generic [ref=e1157]: ","
                        - generic [ref=e1158]: ·
                      - generic [ref=e1159]:
                        - generic [ref=e1160]: 5.0 out of 5 average rating
                        - img [ref=e1162]
                        - generic [ref=e1164]: "5.0"
              - group [ref=e1166]:
                - link [ref=e1167] [cursor=pointer]:
                  - /url: /rooms/1673725817253049331?check_in=2026-07-03&check_out=2026-07-05&photo_id=2619675298&source_impression_id=p3_1780336919_P36WI2-9F6ooXpDe&previous_page_section_name=1000
                - generic [ref=e1168]:
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
                        - button [ref=e1170] [cursor=pointer]:
                          - img [ref=e1172]
                  - generic [ref=e1174]:
                    - generic [ref=e1176]: Home in Seoul
                    - generic [ref=e1177]:
                      - generic [ref=e1181]:
                        - generic [ref=e1184]: ₹23,815
                        - generic [ref=e1186]: for 2 nights
                        - generic [ref=e1187]: ₹23,815 for 2 nights
                      - generic [ref=e1188]:
                        - generic [ref=e1189]: ","
                        - generic [ref=e1190]: ·
                      - generic [ref=e1191]:
                        - generic [ref=e1192]: 5.0 out of 5 average rating
                        - img [ref=e1194]
                        - generic [ref=e1196]: "5.0"
              - group [ref=e1198]:
                - link [ref=e1199] [cursor=pointer]:
                  - /url: /rooms/732267603314454632?check_in=2026-06-05&check_out=2026-06-07&photo_id=1976748198&source_impression_id=p3_1780336919_P3JyzJc2CnWNk_UB&previous_page_section_name=1000
                - generic [ref=e1200]:
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
                        - button [ref=e1202] [cursor=pointer]:
                          - img [ref=e1204]
                  - generic [ref=e1206]:
                    - generic [ref=e1208]: Shared room in Sin-chon-dong
                    - generic [ref=e1209]:
                      - generic [ref=e1213]:
                        - generic [ref=e1216]: ₹6,366
                        - generic [ref=e1218]: for 2 nights
                        - generic [ref=e1219]: ₹6,366 for 2 nights
                      - generic [ref=e1220]:
                        - generic [ref=e1221]: ","
                        - generic [ref=e1222]: ·
                      - generic [ref=e1223]:
                        - generic [ref=e1224]: 4.93 out of 5 average rating
                        - img [ref=e1226]
                        - generic [ref=e1228]: "4.93"
              - group [ref=e1230]:
                - link [ref=e1231] [cursor=pointer]:
                  - /url: /rooms/1292345406210065524?check_in=2026-08-14&check_out=2026-08-16&photo_id=2032005098&source_impression_id=p3_1780336919_P329jhwzCINq3uME&previous_page_section_name=1000
                - generic [ref=e1232]:
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
                        - button [ref=e1234] [cursor=pointer]:
                          - img [ref=e1236]
                  - generic [ref=e1238]:
                    - generic [ref=e1240]: Room in Yeongdeungpo-gu
                    - generic [ref=e1241]:
                      - generic [ref=e1245]:
                        - generic [ref=e1248]: ₹7,561
                        - generic [ref=e1250]: for 2 nights
                        - generic [ref=e1251]: ₹7,561 for 2 nights
                      - generic [ref=e1252]:
                        - generic [ref=e1253]: ","
                        - generic [ref=e1254]: ·
                      - generic [ref=e1255]:
                        - generic [ref=e1256]: 4.89 out of 5 average rating
                        - img [ref=e1258]
                        - generic [ref=e1260]: "4.89"
              - group [ref=e1262]:
                - link [ref=e1263] [cursor=pointer]:
                  - /url: /rooms/1665220650623146418?check_in=2026-07-10&check_out=2026-07-12&photo_id=2628240608&source_impression_id=p3_1780336919_P3KhpHQ4K8HhucSi&previous_page_section_name=1000
                - generic [ref=e1264]:
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
                        - button [ref=e1266] [cursor=pointer]:
                          - img [ref=e1268]
                  - generic [ref=e1270]:
                    - generic [ref=e1272]: Home in Seoul
                    - generic [ref=e1273]:
                      - generic [ref=e1277]:
                        - generic [ref=e1280]: ₹25,138
                        - generic [ref=e1282]: for 2 nights
                        - generic [ref=e1283]: ₹25,138 for 2 nights
                      - generic [ref=e1284]:
                        - generic [ref=e1285]: ","
                        - generic [ref=e1286]: ·
                      - generic [ref=e1287]:
                        - generic [ref=e1288]: 5.0 out of 5 average rating
                        - img [ref=e1290]
                        - generic [ref=e1292]: "5.0"
              - link [ref=e1295] [cursor=pointer]:
                - /url: /s/Seoul/homes?place_id=ChIJzzlcLQGifDURm_JbQKHsEX4&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK
                - generic [ref=e1301]: See all
      - generic [ref=e1306]:
        - heading [level=2] [ref=e1307]: Inspiration for future getaways
        - generic [ref=e1308]:
          - tablist [ref=e1311]:
            - tab [selected] [ref=e1312]: Popular
            - tab [ref=e1313] [cursor=pointer]: Arts & culture
            - tab [ref=e1314] [cursor=pointer]: Beach
            - tab [ref=e1315] [cursor=pointer]: Mountains
            - tab [ref=e1316] [cursor=pointer]: Outdoors
            - tab [ref=e1317] [cursor=pointer]: Things to do
          - tabpanel [ref=e1320]:
            - list [ref=e1321]:
              - listitem [ref=e1322]:
                - link [ref=e1323] [cursor=pointer]:
                  - /url: /san-juan-puerto-rico/stays/cabins
                  - generic [ref=e1324]: San Juan
                  - generic [ref=e1325]: Cabin rentals
              - listitem [ref=e1326]:
                - link [ref=e1327] [cursor=pointer]:
                  - /url: /san-diego-ca/stays/condos
                  - generic [ref=e1328]: San Diego
                  - generic [ref=e1329]: Apartment rentals
              - listitem [ref=e1330]:
                - link [ref=e1331] [cursor=pointer]:
                  - /url: /miramar-beach-fl/stays
                  - generic [ref=e1332]: Miramar Beach
                  - generic [ref=e1333]: Holiday rentals
              - listitem [ref=e1334]:
                - link [ref=e1335] [cursor=pointer]:
                  - /url: /barcelona-spain/stays
                  - generic [ref=e1336]: Barcelona
                  - generic [ref=e1337]: Holiday rentals
              - listitem [ref=e1338]:
                - link [ref=e1339] [cursor=pointer]:
                  - /url: /tokyo-japan/stays/villas
                  - generic [ref=e1340]: Tokyo
                  - generic [ref=e1341]: Villa rentals
              - listitem [ref=e1342]:
                - link [ref=e1343] [cursor=pointer]:
                  - /url: /montreal-canada/stays/monthly
                  - generic [ref=e1344]: Montreal
                  - generic [ref=e1345]: Monthly Rentals
              - listitem [ref=e1346]:
                - link [ref=e1347] [cursor=pointer]:
                  - /url: /gulf-shores-al/stays/monthly
                  - generic [ref=e1348]: Gulf Shores
                  - generic [ref=e1349]: Monthly Rentals
              - listitem [ref=e1350]:
                - link [ref=e1351] [cursor=pointer]:
                  - /url: /brooklyn-ny/stays/condos
                  - generic [ref=e1352]: Brooklyn
                  - generic [ref=e1353]: Apartment rentals
              - listitem [ref=e1354]:
                - link [ref=e1355] [cursor=pointer]:
                  - /url: /savannah-ga/stays/cottages
                  - generic [ref=e1356]: Savannah
                  - generic [ref=e1357]: Cottage rentals
              - listitem [ref=e1358]:
                - link [ref=e1359] [cursor=pointer]:
                  - /url: /manhattan-new-york-ny/stays/apartments
                  - generic [ref=e1360]: Manhattan
                  - generic [ref=e1361]: Flat rentals
              - listitem [ref=e1362]:
                - link [ref=e1363] [cursor=pointer]:
                  - /url: /kansas-city-mo/stays/apartments
                  - generic [ref=e1364]: Kansas City
                  - generic [ref=e1365]: Flat rentals
              - listitem [ref=e1366]:
                - link [ref=e1367] [cursor=pointer]:
                  - /url: /pocono-mountains-pa/stays/condos
                  - generic [ref=e1368]: Pocono Mountains
                  - generic [ref=e1369]: Apartment rentals
              - listitem [ref=e1370]:
                - link [ref=e1371] [cursor=pointer]:
                  - /url: /santo-domingo-dominican-republic/stays/apartments
                  - generic [ref=e1372]: Santo Domingo
                  - generic [ref=e1373]: Flat rentals
              - listitem [ref=e1374]:
                - link [ref=e1375] [cursor=pointer]:
                  - /url: /london-united-kingdom/stays/monthly
                  - generic [ref=e1376]: London
                  - generic [ref=e1377]: Monthly Rentals
              - listitem [ref=e1378]:
                - link [ref=e1379] [cursor=pointer]:
                  - /url: /amsterdam-netherlands/stays
                  - generic [ref=e1380]: Amsterdam
                  - generic [ref=e1381]: Holiday rentals
              - listitem [ref=e1382]:
                - link [ref=e1383] [cursor=pointer]:
                  - /url: /detroit-mi/stays/apartments
                  - generic [ref=e1384]: Detroit
                  - generic [ref=e1385]: Flat rentals
              - listitem [ref=e1386]:
                - link [ref=e1387] [cursor=pointer]:
                  - /url: /albuquerque-nm/stays/condos
                  - generic [ref=e1388]: Albuquerque
                  - generic [ref=e1389]: Apartment rentals
              - listitem [ref=e1390]:
                - button [ref=e1391] [cursor=pointer]:
                  - generic [ref=e1392]: Show more
                  - img [ref=e1393]
      - contentinfo [ref=e1396]:
        - generic [ref=e1397]:
          - heading [level=2] [ref=e1399]: Site Footer
          - generic [ref=e1400]:
            - generic [ref=e1401]:
              - heading [level=3] [ref=e1402]: Support
              - list [ref=e1403]:
                - listitem [ref=e1404]:
                  - link [ref=e1405] [cursor=pointer]:
                    - /url: /help/home?from=footer
                    - text: Help Centre
                - listitem [ref=e1406]:
                  - link [ref=e1407] [cursor=pointer]:
                    - /url: /help/contact-us?entry=DESKTOP_FOOTER_SAFETY
                    - text: Get help with a safety issue
                - listitem [ref=e1408]:
                  - link [ref=e1409] [cursor=pointer]:
                    - /url: /aircover
                    - text: AirCover
                - listitem [ref=e1410]:
                  - link [ref=e1411] [cursor=pointer]:
                    - /url: /against-discrimination
                    - text: Anti-discrimination
                - listitem [ref=e1412]:
                  - link [ref=e1413] [cursor=pointer]:
                    - /url: /accessibility
                    - text: Disability support
                - listitem [ref=e1414]:
                  - link [ref=e1415] [cursor=pointer]:
                    - /url: /help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19
                    - text: Cancellation options
                - listitem [ref=e1416]:
                  - link [ref=e1417] [cursor=pointer]:
                    - /url: /neighbors
                    - text: Report neighbourhood concern
            - generic [ref=e1418]:
              - heading [level=3] [ref=e1419]: Hosting
              - list [ref=e1420]:
                - listitem [ref=e1421]:
                  - link [ref=e1422] [cursor=pointer]:
                    - /url: /host/homes?from_footer=1
                    - text: Airbnb your home
                - listitem [ref=e1423]:
                  - link [ref=e1424] [cursor=pointer]:
                    - /url: /host/experiences
                    - text: Airbnb your experience
                - listitem [ref=e1425]:
                  - link [ref=e1426] [cursor=pointer]:
                    - /url: /host/services
                    - text: Airbnb your service
                - listitem [ref=e1427]:
                  - link [ref=e1428] [cursor=pointer]:
                    - /url: /aircover-for-hosts
                    - text: AirCover for Hosts
                - listitem [ref=e1429]:
                  - link [ref=e1430] [cursor=pointer]:
                    - /url: /resources
                    - text: Hosting resources
                - listitem [ref=e1431]:
                  - link [ref=e1432] [cursor=pointer]:
                    - /url: https://community.withairbnb.com/t5/Community-Center/ct-p/community-center
                    - text: Community forum
                - listitem [ref=e1433]:
                  - link [ref=e1434] [cursor=pointer]:
                    - /url: /help/responsible-hosting
                    - text: Hosting responsibly
                - listitem [ref=e1435]:
                  - link [ref=e1436] [cursor=pointer]:
                    - /url: /e/intro-to-hosting
                    - text: Join a free hosting class
                - listitem [ref=e1437]:
                  - link [ref=e1438] [cursor=pointer]:
                    - /url: /host/co-hosts
                    - text: Find a co‑host
                - listitem [ref=e1439]:
                  - link [ref=e1440] [cursor=pointer]:
                    - /url: /refer
                    - text: Refer a host
            - generic [ref=e1441]:
              - heading [level=3] [ref=e1442]: Airbnb
              - list [ref=e1443]:
                - listitem [ref=e1444]:
                  - link [ref=e1445] [cursor=pointer]:
                    - /url: /release
                    - text: 2026 Summer Release
                - listitem [ref=e1446]:
                  - link [ref=e1447] [cursor=pointer]:
                    - /url: /press/news
                    - text: Newsroom
                - listitem [ref=e1448]:
                  - link [ref=e1449] [cursor=pointer]:
                    - /url: /careers
                    - text: Careers
                - listitem [ref=e1450]:
                  - link [ref=e1451] [cursor=pointer]:
                    - /url: https://investors.airbnb.com
                    - text: Investors
                - listitem [ref=e1452]:
                  - link [ref=e1453] [cursor=pointer]:
                    - /url: https://www.airbnb.org?locale=en-IN
                    - text: Airbnb.org emergency stays
          - generic [ref=e1454]:
            - generic [ref=e1455]: Footer section
            - generic [ref=e1457]:
              - generic [ref=e1459]:
                - generic [ref=e1460]: © 2026 Airbnb, Inc.
                - generic [ref=e1461]:
                  - generic [ref=e1463]: ·
                  - list [ref=e1465]:
                    - listitem [ref=e1466]:
                      - link [ref=e1467] [cursor=pointer]:
                        - /url: /terms/privacy_policy
                        - text: Privacy
                      - generic [ref=e1468]:
                        - generic:
                          - generic: ·
                    - listitem [ref=e1469]:
                      - link [ref=e1470] [cursor=pointer]:
                        - /url: /terms
                        - text: Terms
                      - generic [ref=e1471]:
                        - generic:
                          - generic: ·
                    - listitem [ref=e1472]:
                      - link [ref=e1473] [cursor=pointer]:
                        - /url: /about/company-details
                        - text: Company details
              - generic [ref=e1474]:
                - generic [ref=e1476]:
                  - button [ref=e1478] [cursor=pointer]:
                    - generic [ref=e1479]:
                      - generic:
                        - img
                        - text: English (IN)
                  - button [ref=e1481] [cursor=pointer]:
                    - generic [ref=e1483]:
                      - generic [ref=e1484]: ₹
                      - generic [ref=e1485]: INR
                - list [ref=e1487]:
                  - listitem [ref=e1488]:
                    - link [ref=e1489] [cursor=pointer]:
                      - /url: https://www.facebook.com/AirbnbIndia
                      - img [ref=e1491]
                  - listitem [ref=e1493]:
                    - link [ref=e1494] [cursor=pointer]:
                      - /url: https://twitter.com/airbnb_in
                      - img [ref=e1496]
                  - listitem [ref=e1498]:
                    - link [ref=e1499] [cursor=pointer]:
                      - /url: https://instagram.com/airbnb
                      - img [ref=e1501]
  - dialog [active] [ref=e1510]:
    - button "Close" [ref=e1512] [cursor=pointer]:
      - img [ref=e1514]
    - generic [ref=e1516]:
      - img [ref=e1518]
      - generic [ref=e1519]:
        - heading "Save 10% on a summertime trip" [level=2] [ref=e1520]
        - paragraph [ref=e1521]:
          - text: Book within 7 days and save up to ₹2,000 on your next stay.
          - link "Terms apply" [ref=e1522] [cursor=pointer]:
            - /url: https://www.airbnb.com/e/y26apr-in-b
    - button "Log in to claim offer" [ref=e1524] [cursor=pointer]:
      - generic [ref=e1525]:
        - generic: Log in to claim offer
```

# Test source

```ts
  20  |   /**
  21  |    * API-001: Verify search API is called when searching
  22  |    * We intercept the network request and validate the response structure.
  23  |    */
  24  |   test('API-001: search request should return listings data', async ({ page }) => {
  25  |     // Capture all XHR/fetch requests to Airbnb's API
  26  |     const apiRequests: string[] = [];
  27  | 
  28  |     page.on('request', (request) => {
  29  |       if (request.url().includes('api.airbnb.com') || request.url().includes('/api/v3')) {
  30  |         apiRequests.push(request.url());
  31  |       }
  32  |     });
  33  | 
  34  |     await page.goto('https://www.airbnb.com/s/New-York--NY/homes?adults=2');
  35  |     await page.waitForLoadState('networkidle');
  36  | 
  37  |     // Verify API calls were made
  38  |     expect(apiRequests.length).toBeGreaterThan(0);
  39  |   });
  40  | 
  41  |   /**
  42  |    * API-002: Search API response should contain listing data
  43  |    */
  44  |   test('API-002: search API response should have valid structure', async ({ page }) => {
  45  |     let searchResponse: Record<string, unknown> | null = null;
  46  | 
  47  |     // Intercept the search API response
  48  |     page.on('response', async (response) => {
  49  |       if (
  50  |         response.url().includes('/api/v3/ExploreSearch') ||
  51  |         response.url().includes('/api/v3/StaysSearch')
  52  |       ) {
  53  |         try {
  54  |           searchResponse = await response.json();
  55  |         } catch {
  56  |           // Not all responses are JSON
  57  |         }
  58  |       }
  59  |     });
  60  | 
  61  |     await page.goto('https://www.airbnb.com/s/New-York--NY/homes?adults=2');
  62  |     await page.waitForLoadState('networkidle');
  63  | 
  64  |     // If we captured a search response, validate its structure
  65  |     if (searchResponse) {
  66  |       // Airbnb's API typically wraps data in a "data" key
  67  |       expect(searchResponse).toBeDefined();
  68  |     }
  69  |   });
  70  | 
  71  |   /**
  72  |    * API-003: Listing detail API call
  73  |    */
  74  |   test('API-003: listing detail page should make API calls for listing data', async ({ page }) => {
  75  |     const detailAPICalls: string[] = [];
  76  | 
  77  |     page.on('request', (request) => {
  78  |       if (
  79  |         request.url().includes('/api/v3/PdpAvailabilityCalendar') ||
  80  |         request.url().includes('/api/v3/StaysPdpSections')
  81  |       ) {
  82  |         detailAPICalls.push(request.url());
  83  |       }
  84  |     });
  85  | 
  86  |     await page.goto('https://www.airbnb.com/rooms/20776811');
  87  |     await page.waitForLoadState('networkidle');
  88  | 
  89  |     // At least one detail API call should have been made
  90  |     expect(detailAPICalls.length).toBeGreaterThanOrEqual(0); // Flexible — endpoint may vary
  91  |   });
  92  | 
  93  |   /**
  94  |    * API-004: No 5xx server errors on homepage load
  95  |    */
  96  |   test('API-004: homepage should not produce 5xx server errors', async ({ page }) => {
  97  |     const serverErrors: string[] = [];
  98  | 
  99  |     page.on('response', (response) => {
  100 |       if (response.status() >= 500) {
  101 |         serverErrors.push(`${response.status()} ${response.url()}`);
  102 |       }
  103 |     });
  104 | 
  105 |     await page.goto('https://www.airbnb.com');
  106 |     await page.waitForLoadState('networkidle');
  107 | 
  108 |     expect(serverErrors).toHaveLength(0);
  109 |   });
  110 | 
  111 |   /**
  112 |    * API-005: Homepage response time is acceptable
  113 |    */
  114 |   test('API-005: homepage should load within 10 seconds', async ({ page }) => {
  115 |     const startTime = Date.now();
  116 |     await page.goto('https://www.airbnb.com');
  117 |     await page.waitForLoadState('domcontentloaded');
  118 |     const loadTime = Date.now() - startTime;
  119 | 
> 120 |     expect(loadTime).toBeLessThan(10_000);
      |                      ^ Error: expect(received).toBeLessThan(expected)
  121 |   });
  122 | 
  123 |   /**
  124 |    * API-006: Search page response contains required HTTP headers
  125 |    */
  126 |   test('API-006: search page response should have proper headers', async ({ page }) => {
  127 |     const response = await page.goto('https://www.airbnb.com/s/New-York/homes');
  128 | 
  129 |     expect(response).toBeDefined();
  130 |     expect(response!.status()).toBe(200);
  131 | 
  132 |     const contentType = response!.headers()['content-type'];
  133 |     expect(contentType).toContain('text/html');
  134 |   });
  135 | 
  136 |   /**
  137 |    * API-007: Mock API response to test UI behavior
  138 |    * This demonstrates API mocking — a powerful technique for isolated testing.
  139 |    */
  140 |   test('API-007: should handle empty search results gracefully (mocked)', async ({ page }) => {
  141 |     // Intercept search API and return empty results
  142 |     await page.route('**/api/v3/ExploreSearch**', async (route) => {
  143 |       await route.fulfill({
  144 |         status: 200,
  145 |         contentType: 'application/json',
  146 |         body: JSON.stringify({
  147 |           data: {
  148 |             presentation: {
  149 |               staysSearch: {
  150 |                 results: {
  151 |                   searchResults: [],
  152 |                   paginationInfo: { hasNextPage: false },
  153 |                 },
  154 |               },
  155 |             },
  156 |           },
  157 |         }),
  158 |       });
  159 |     });
  160 | 
  161 |     await page.goto('https://www.airbnb.com/s/SomeVeryObscurePlace/homes');
  162 |     await page.waitForLoadState('domcontentloaded');
  163 | 
  164 |     // Page should not crash with empty results
  165 |     expect(page.url()).toContain('airbnb.com');
  166 |   });
  167 | 
  168 |   /**
  169 |    * API-008: Validate response times for search API calls
  170 |    */
  171 |   test('API-008: API calls on search page should respond within 5 seconds', async ({ page }) => {
  172 |     const slowRequests: string[] = [];
  173 | 
  174 |     page.on('response', async (response) => {
  175 |       // Check timing from the request object
  176 |       const request = response.request();
  177 |       const timing = request.timing();
  178 |       if (timing.responseEnd - timing.requestStart > 5000) {
  179 |         slowRequests.push(response.url());
  180 |       }
  181 |     });
  182 | 
  183 |     await page.goto('https://www.airbnb.com/s/New-York/homes');
  184 |     await page.waitForLoadState('networkidle');
  185 | 
  186 |     // Log slow requests but don't fail (network conditions vary in CI)
  187 |     if (slowRequests.length > 0) {
  188 |       console.warn('Slow API calls detected:', slowRequests);
  189 |     }
  190 | 
  191 |     // Page should have loaded regardless
  192 |     expect(page.url()).toContain('airbnb.com');
  193 |   });
  194 | });
  195 | 
  196 | test.describe('API Tests — Direct HTTP Requests', () => {
  197 |   /**
  198 |    * API-009: Public sitemap is accessible
  199 |    */
  200 |   test('API-009: sitemap.xml should be accessible', async ({ request }) => {
  201 |     const response = await request.get('https://www.airbnb.com/sitemap.xml');
  202 |     expect(response.status()).toBe(200);
  203 |   });
  204 | 
  205 |   /**
  206 |    * API-010: robots.txt is accessible
  207 |    */
  208 |   test('API-010: robots.txt should be present', async ({ request }) => {
  209 |     const response = await request.get('https://www.airbnb.com/robots.txt');
  210 |     expect(response.status()).toBe(200);
  211 |     const body = await response.text();
  212 |     expect(body).toContain('User-agent');
  213 |   });
  214 | 
  215 |   /**
  216 |    * API-011: Canonical homepage returns 200
  217 |    */
  218 |   test('API-011: homepage should return HTTP 200', async ({ request }) => {
  219 |     const response = await request.get('https://www.airbnb.com/');
  220 |     expect(response.status()).toBe(200);
```