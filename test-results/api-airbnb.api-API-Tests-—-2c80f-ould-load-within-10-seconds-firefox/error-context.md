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
Received:   11158
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
                - /url: /rooms/36276450?check_in=2027-03-05&check_out=2027-03-07&photo_id=1722908008&source_impression_id=p3_1780336845_P38Pl2_YOudu_BKK&previous_page_section_name=1000
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
                - /url: /rooms/863468?check_in=2026-07-17&check_out=2026-07-19&photo_id=1662471077&source_impression_id=p3_1780336845_P36A-R8NBlub41Zw&previous_page_section_name=1000
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
                - /url: /rooms/588780489931455266?check_in=2026-07-03&check_out=2026-07-05&photo_id=1366393274&source_impression_id=p3_1780336845_P36SPEdI9rhRmu5K&previous_page_section_name=1000
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
                - /url: /rooms/1271915143781425950?check_in=2026-09-04&check_out=2026-09-06&photo_id=2620277807&source_impression_id=p3_1780336845_P3KfnPP4ShNrrRJy&previous_page_section_name=1000
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
                - /url: /rooms/1533368238229769136?check_in=2026-06-12&check_out=2026-06-14&photo_id=2372826300&source_impression_id=p3_1780336845_P3CJwTAPtnndwwuV&previous_page_section_name=1000
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
                - /url: /rooms/29542473?check_in=2026-08-21&check_out=2026-08-23&photo_id=2659033216&source_impression_id=p3_1780336845_P3eB2CjsPXBYrG-h&previous_page_section_name=1000
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
                - /url: /rooms/922335836639469888?check_in=2026-07-03&check_out=2026-07-05&photo_id=1741092511&source_impression_id=p3_1780336845_P3Wvm9UM8pwJfwE7&previous_page_section_name=1000
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
                - /url: /rooms/1132578800062436217?check_in=2026-06-26&check_out=2026-06-28&photo_id=1881534591&source_impression_id=p3_1780336845_P3BpIizg7v-mVJEX&previous_page_section_name=1000
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
                - /url: /rooms/1407441620981249723?check_in=2026-06-05&check_out=2026-06-07&photo_id=2151711298&source_impression_id=p3_1780336845_P3jRNKdHRshJOSRE&previous_page_section_name=1000
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
                - /url: /rooms/1396669506787422414?check_in=2026-07-24&check_out=2026-07-26&photo_id=2658002098&source_impression_id=p3_1780336845_P3F6WNZDl9XVx-fc&previous_page_section_name=1000
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
                - /url: /rooms/21063433?check_in=2026-07-24&check_out=2026-07-26&photo_id=2156739212&source_impression_id=p3_1780336845_P35OcCAP4GSX_K6H&previous_page_section_name=1000
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
                - /url: /rooms/42276919?check_in=2026-06-05&check_out=2026-06-07&photo_id=2078283190&source_impression_id=p3_1780336845_P36PP7wwHMfeK804&previous_page_section_name=1000
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
                - /url: /rooms/8805567?check_in=2026-11-06&check_out=2026-11-08&photo_id=1729058342&source_impression_id=p3_1780336845_P3WxjjOfPPK5VbbJ&previous_page_section_name=1000
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
                - /url: /rooms/1174411?check_in=2026-06-05&check_out=2026-06-07&photo_id=11610230&source_impression_id=p3_1780336845_P30uKYNk4UqY1BVR&previous_page_section_name=1000
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
                - /url: /rooms/643293193035927841?check_in=2026-06-19&check_out=2026-06-21&photo_id=1709497043&source_impression_id=p3_1780336845_P3gRUgkgVWmXupHU&previous_page_section_name=1000
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
                - /url: /rooms/1464398358185119415?check_in=2026-06-19&check_out=2026-06-21&photo_id=2251896015&source_impression_id=p3_1780336845_P3pyoLOw8GOxyHD2&previous_page_section_name=1000
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
            - /url: /s/Mumbai/experiences?place_id=ChIJwe1EZjDG5zsRaYxkjY_tpF0&refinement_paths%5B%5D=%2Fexperiences&search_type=HOMEPAGE_CAROUSEL_CLICK
            - generic [ref=e712]:
              - heading [level=2] [ref=e713]:
                - generic [ref=e714]: Popular experiences nearby
              - img [ref=e716]
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
                      - button [ref=e743] [cursor=pointer]:
                        - img [ref=e745]
                - generic [ref=e747]:
                  - generic [ref=e749]: Dharavi Slum Tour with Optional Dhobi ghat Laundry
                  - generic [ref=e750]:
                    - generic [ref=e754]:
                      - generic [ref=e755]:
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
            - group [ref=e770]:
              - link [ref=e771] [cursor=pointer]:
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
                      - button [ref=e774] [cursor=pointer]:
                        - img [ref=e776]
                - generic [ref=e778]:
                  - generic [ref=e780]: Mumbai Street Food and Local Market Tour
                  - generic [ref=e781]:
                    - generic [ref=e785]:
                      - generic [ref=e786]:
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
            - group [ref=e801]:
              - link [ref=e802] [cursor=pointer]:
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
                      - button [ref=e805] [cursor=pointer]:
                        - img [ref=e807]
                - generic [ref=e809]:
                  - generic [ref=e811]: Explore iconic sights Of Mumbai in Four Hours
                  - generic [ref=e812]:
                    - generic [ref=e816]:
                      - generic [ref=e817]:
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
            - group [ref=e832]:
              - link [ref=e833] [cursor=pointer]:
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
                      - button [ref=e836] [cursor=pointer]:
                        - img [ref=e838]
                - generic [ref=e840]:
                  - generic [ref=e842]: Bike Mumbai’s Calm Streets at Sunrise
                  - generic [ref=e843]:
                    - generic [ref=e847]:
                      - generic [ref=e848]:
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
            - group [ref=e863]:
              - link [ref=e864] [cursor=pointer]:
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
                      - button [ref=e867] [cursor=pointer]:
                        - img [ref=e869]
                - generic [ref=e871]:
                  - generic [ref=e873]: "Mumbai Morning Markets: Flowers, Fish, and More"
                  - generic [ref=e874]:
                    - generic [ref=e878]:
                      - generic [ref=e879]:
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
            - group [ref=e894]:
              - link [ref=e895] [cursor=pointer]:
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
                      - button [ref=e898] [cursor=pointer]:
                        - img [ref=e900]
                - generic [ref=e902]:
                  - generic [ref=e904]: Explore Dharavi's hidden gems
                  - generic [ref=e905]:
                    - generic [ref=e909]:
                      - generic [ref=e910]:
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
  - dialog [active] [ref=e1002]:
    - button "Close" [ref=e1004] [cursor=pointer]:
      - img [ref=e1006]
    - generic [ref=e1008]:
      - img [ref=e1010]
      - generic [ref=e1011]:
        - heading "Save 10% on a summertime trip" [level=2] [ref=e1012]
        - paragraph [ref=e1013]:
          - text: Book within 7 days and save up to ₹2,000 on your next stay.
          - link "Terms apply" [ref=e1014] [cursor=pointer]:
            - /url: https://www.airbnb.com/e/y26apr-in-b
    - button "Log in to claim offer" [ref=e1016] [cursor=pointer]:
      - generic [ref=e1017]:
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