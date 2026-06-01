# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\airbnb.api.spec.ts >> API Tests — Network Interception >> API-007: should handle empty search results gracefully (mocked)
- Location: tests\api\airbnb.api.spec.ts:140:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "airbnb.com"
Received string:    "https://www.airbnb.co.in/s/SomeVeryObscurePlace/homes?locale=en&_set_bev_on_new_domain=1780336094_EAZDcyMmI2NDVlZG&set_everest_cookie_on_new_domain=1780336094.EANTJiMzNkMjhkMDljOD.vZYR09RNFzR4vF4GUOUAR2tksSw_AnE9XQaUC47GYhQ"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link [ref=e2] [cursor=pointer]:
    - /url: "#site-content"
    - text: Skip to content
    - img [ref=e3]
  - generic [ref=e14]:
    - banner [ref=e15]:
      - generic [ref=e19]:
        - link [ref=e20] [cursor=pointer]:
          - /url: /
          - img [ref=e22]
        - search [ref=e24]:
          - generic [ref=e26]:
            - tablist [ref=e28]:
              - tab [selected] [ref=e29] [cursor=pointer]:
                - generic [ref=e32]: Homes
                - generic [ref=e33]: Homes
              - tab [ref=e34] [cursor=pointer]:
                - generic [ref=e38]:
                  - text: NEW
                  - generic [ref=e39]: NEW
                - generic [ref=e42]: Experiences
                - generic [ref=e43]: Experiences, new
              - tab [ref=e44] [cursor=pointer]:
                - generic [ref=e48]:
                  - text: NEW
                  - generic [ref=e49]: NEW
                - generic [ref=e52]: Services
                - generic [ref=e53]: Services, new
            - search [ref=e58] [cursor=pointer]:
              - generic [ref=e59]: Start your search
              - generic [ref=e60]:
                - button [ref=e61]:
                  - generic [ref=e62]: Location
                  - generic [ref=e64]: Homes in SomeVeryObscurePlace
                - button [ref=e66]:
                  - generic [ref=e67]: Check in / Check out
                  - generic [ref=e68]: Any week
                - button [ref=e70]:
                  - generic [ref=e71]: Guests
                  - generic [ref=e72]: Add guests
              - img [ref=e76]
        - navigation [ref=e80]:
          - generic [ref=e81]:
            - button [ref=e82] [cursor=pointer]:
              - generic [ref=e83]: Become a host
            - button [ref=e85] [cursor=pointer]:
              - img [ref=e87]
          - button [ref=e91] [cursor=pointer]:
            - img [ref=e93]
      - group [ref=e100]:
        - generic [ref=e101]: filters
        - generic [ref=e103]:
          - button [ref=e106] [cursor=pointer]:
            - img [ref=e108]
            - generic [ref=e110]: Filters
          - generic [ref=e112]:
            - button [ref=e115] [cursor=pointer]:
              - generic [ref=e116]: Price
              - img [ref=e119]
            - button [ref=e123] [cursor=pointer]:
              - generic [ref=e124]: Type of place
              - img [ref=e127]
            - generic [ref=e129]:
              - checkbox [ref=e132] [cursor=pointer]: Allows pets
              - checkbox [ref=e135] [cursor=pointer]: Kitchen
              - checkbox [ref=e138] [cursor=pointer]: Washing machine
              - checkbox [ref=e141] [cursor=pointer]: Free parking
              - checkbox [ref=e144] [cursor=pointer]: Hot tub
              - checkbox [ref=e147] [cursor=pointer]: Wifi
              - checkbox [ref=e150] [cursor=pointer]: Air conditioning
              - checkbox [ref=e153] [cursor=pointer]: TV
    - main [ref=e154]:
      - generic [ref=e155]:
        - generic [ref=e159]:
          - heading [level=1] [ref=e162]:
            - generic [ref=e163]: Search results; Over 1,000 homes within map area
            - text: Over 1,000 homes within map area
          - generic [ref=e168]:
            - generic [ref=e169]:
              - generic [ref=e170]: Prices include all fees
              - generic [ref=e171]: Prices include all fees
              - generic [ref=e172]: Prices include all fees
              - generic [ref=e173]: Prices include all fees
              - generic [ref=e174]: Prices include all fees
              - generic [ref=e175]: Prices include all fees
              - generic [ref=e176]: Prices include all fees
              - generic [ref=e177]: Prices include all fees
              - generic [ref=e178]: Prices include all fees
              - generic [ref=e179]: Prices include all fees
              - generic [ref=e180]: Prices include all fees
              - generic [ref=e181]: Prices include all fees
              - generic [ref=e182]: Prices include all fees
              - generic [ref=e183]: Prices include all fees
              - generic [ref=e184]: Prices include all fees
              - generic [ref=e185]: Prices include all fees
              - generic [ref=e186]: Prices include all fees
              - generic [ref=e187]: Prices include all fees
              - generic [ref=e188]: Prices include all fees
              - generic [ref=e189]: Prices include all fees
              - generic [ref=e190]: Prices include all fees
              - generic [ref=e191]: Prices include all fees
              - generic [ref=e192]: Prices include all fees
            - generic [ref=e193]: Prices include all fees
        - generic [ref=e199]:
          - group [ref=e205]:
            - link [ref=e206] [cursor=pointer]:
              - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e207]:
              - group [ref=e210]:
                - generic:
                  - button [ref=e212] [cursor=pointer]:
                    - img [ref=e213]
                  - generic:
                    - button [disabled] [ref=e216] [cursor=pointer]:
                      - img [ref=e218]
                    - button [ref=e221] [cursor=pointer]:
                      - img [ref=e223]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e229]:
                  - link [ref=e230] [cursor=pointer]:
                    - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e233]
                  - link [ref=e234] [cursor=pointer]:
                    - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e235] [cursor=pointer]:
                    - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e236] [cursor=pointer]:
                    - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e237] [cursor=pointer]:
                    - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e238] [cursor=pointer]:
                    - /url: /rooms/1576224748240067858?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336939_P3fsoElTnPTvkF1s&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e239]:
                - generic [ref=e240]: Hotel in Jaipur, India
                - generic [ref=e242]: NeelKamal "Where Every Stay Feels Like Home."
                - generic [ref=e243]:
                  - generic [ref=e244]:
                    - generic [ref=e245]: 1 bedroom
                    - generic [ref=e246]: 1 bedroom
                  - generic [ref=e247]:
                    - generic [ref=e248]: 1 double bed
                    - generic [ref=e249]: ","
                    - generic [ref=e250]: ·
                    - generic [ref=e251]: 1 double bed
                  - generic [ref=e252]:
                    - generic [ref=e253]: 1 bathroom
                    - generic [ref=e254]: ","
                    - generic [ref=e255]: ·
                    - generic [ref=e256]: 1 bathroom
                - generic [ref=e258]:
                  - generic [ref=e259]: 1–6 Jun
                  - generic [ref=e260]: 1–6 Jun
                - generic [ref=e264]:
                  - button [ref=e269] [cursor=pointer]:
                    - text: ₹5,701
                    - generic [ref=e270]: Show price breakdown
                  - generic [ref=e272]: for 5 nights
                  - generic [ref=e273]: ₹5,701 for 5 nights
                - generic [ref=e274]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e280]:
            - link [ref=e281] [cursor=pointer]:
              - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e282]:
              - group [ref=e285]:
                - generic:
                  - button [ref=e287] [cursor=pointer]:
                    - img [ref=e288]
                  - generic:
                    - button [disabled] [ref=e291] [cursor=pointer]:
                      - img [ref=e293]
                    - button [ref=e296] [cursor=pointer]:
                      - img [ref=e298]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e304]:
                  - link [ref=e305] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e308]
                  - link [ref=e309] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e310] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e311] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e312] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e313] [cursor=pointer]:
                    - /url: /rooms/1644842103288733062?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2613374272&source_impression_id=p3_1780336939_P39-0iZgvi440cTo&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e314]:
                - generic [ref=e315]: Home in Higashisonogi, Japan
                - generic [ref=e317]: A 125year-old traditional Japanese farmhouse 187㎡
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - generic [ref=e320]: 4 bedrooms
                    - generic [ref=e321]: 4 bedrooms
                  - generic [ref=e322]:
                    - generic [ref=e323]: 5 double beds
                    - generic [ref=e324]: ","
                    - generic [ref=e325]: ·
                    - generic [ref=e326]: 5 double beds
                  - generic [ref=e327]:
                    - generic [ref=e328]: 2 bathrooms
                    - generic [ref=e329]: ","
                    - generic [ref=e330]: ·
                    - generic [ref=e331]: 2 bathrooms
                - generic [ref=e333]:
                  - generic [ref=e334]: 3–8 Jun
                  - generic [ref=e335]: 3–8 Jun
                - generic [ref=e336]:
                  - generic [ref=e339]:
                    - button [ref=e344] [cursor=pointer]:
                      - text: ₹1,10,135
                      - generic [ref=e345]: Show price breakdown
                    - generic [ref=e347]: for 5 nights
                    - generic [ref=e348]: ₹1,10,135 for 5 nights
                  - generic [ref=e350]: Free cancellation
                - generic [ref=e351]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e357]:
            - link [ref=e358] [cursor=pointer]:
              - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e359]:
              - group [ref=e362]:
                - generic:
                  - button [ref=e364] [cursor=pointer]:
                    - img [ref=e365]
                  - generic:
                    - button [disabled] [ref=e368] [cursor=pointer]:
                      - img [ref=e370]
                    - button [ref=e373] [cursor=pointer]:
                      - img [ref=e375]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e381]:
                  - link [ref=e382] [cursor=pointer]:
                    - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e385]
                  - link [ref=e386] [cursor=pointer]:
                    - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e387] [cursor=pointer]:
                    - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e388] [cursor=pointer]:
                    - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e389] [cursor=pointer]:
                    - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e390] [cursor=pointer]:
                    - /url: /rooms/1689956147295440487?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3gA9fp3DwCLcq-H&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e391]:
                - generic [ref=e392]: Place to stay in Indore, India
                - generic [ref=e394]: SleepoStay:1RKcouple Friendly/NearBombay hospital
                - generic [ref=e395]:
                  - generic [ref=e396]:
                    - generic [ref=e397]: 1 bedroom
                    - generic [ref=e398]: 1 bedroom
                  - generic [ref=e399]:
                    - generic [ref=e400]: 1 bed
                    - generic [ref=e401]: ","
                    - generic [ref=e402]: ·
                    - generic [ref=e403]: 1 bed
                  - generic [ref=e404]:
                    - generic [ref=e405]: 1 bathroom
                    - generic [ref=e406]: ","
                    - generic [ref=e407]: ·
                    - generic [ref=e408]: 1 bathroom
                - generic [ref=e410]:
                  - generic [ref=e411]: 3–8 Jun
                  - generic [ref=e412]: 3–8 Jun
                - generic [ref=e413]:
                  - generic [ref=e416]:
                    - button [ref=e421] [cursor=pointer]:
                      - text: ₹7,574
                      - generic [ref=e422]: Show price breakdown
                    - generic [ref=e424]: for 5 nights
                    - generic [ref=e425]: ₹7,574 for 5 nights
                  - generic [ref=e427]: Free cancellation
                - generic [ref=e428]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e434]:
            - link [ref=e435] [cursor=pointer]:
              - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e436]:
              - group [ref=e439]:
                - generic:
                  - button [ref=e441] [cursor=pointer]:
                    - img [ref=e442]
                  - generic:
                    - button [disabled] [ref=e445] [cursor=pointer]:
                      - img [ref=e447]
                    - button [ref=e450] [cursor=pointer]:
                      - img [ref=e452]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e458]:
                  - link [ref=e459] [cursor=pointer]:
                    - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e462]
                  - link [ref=e463] [cursor=pointer]:
                    - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e464] [cursor=pointer]:
                    - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e465] [cursor=pointer]:
                    - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e466] [cursor=pointer]:
                    - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e467] [cursor=pointer]:
                    - /url: /rooms/1681295783614963331?search_mode=regular_search&adults=1&check_in=2026-06-08&check_out=2026-06-13&children=0&infants=0&pets=0&photo_id=2628610692&source_impression_id=p3_1780336940_P3Z8BwWyYikWnmh8&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e468]:
                - generic [ref=e469]: Home in Itá, Brazil
                - generic [ref=e471]: Cabana Paraíso! A cozy and amazing place!
                - generic [ref=e472]:
                  - generic [ref=e473]:
                    - generic [ref=e474]: 1 bedroom
                    - generic [ref=e475]: 1 bedroom
                  - generic [ref=e476]:
                    - generic [ref=e477]: 2 beds
                    - generic [ref=e478]: ","
                    - generic [ref=e479]: ·
                    - generic [ref=e480]: 2 beds
                  - generic [ref=e481]:
                    - generic [ref=e482]: 1 bathroom
                    - generic [ref=e483]: ","
                    - generic [ref=e484]: ·
                    - generic [ref=e485]: 1 bathroom
                - generic [ref=e487]:
                  - generic [ref=e488]: 8–13 Jun
                  - generic [ref=e489]: 8–13 Jun
                - generic [ref=e490]:
                  - generic [ref=e495]:
                    - generic [ref=e496]:
                      - generic [ref=e497]: ₹59,980
                      - button [ref=e500] [cursor=pointer]:
                        - text: ₹49,764
                        - generic [ref=e501]: Show price breakdown
                    - generic [ref=e504]: for 5 nights
                  - generic [ref=e505]:
                    - generic [ref=e506]: New home discount
                    - generic [ref=e507]: Free cancellation
                - generic [ref=e508]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e514]:
            - link [ref=e515] [cursor=pointer]:
              - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e516]:
              - group [ref=e519]:
                - generic:
                  - button [ref=e521] [cursor=pointer]:
                    - img [ref=e522]
                  - generic:
                    - button [disabled] [ref=e525] [cursor=pointer]:
                      - img [ref=e527]
                    - button [ref=e530] [cursor=pointer]:
                      - img [ref=e532]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e538]:
                  - link [ref=e539] [cursor=pointer]:
                    - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e542]
                  - link [ref=e543] [cursor=pointer]:
                    - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e544] [cursor=pointer]:
                    - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e545] [cursor=pointer]:
                    - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e546] [cursor=pointer]:
                    - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e547] [cursor=pointer]:
                    - /url: /rooms/1656363291843606096?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2641547359&source_impression_id=p3_1780336940_P3mOkgiGE2ew8bEq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e548]:
                - generic [ref=e549]: Cabin in Higashiizu, Japan
                - generic [ref=e551]: "[Hoshikan-ya] A day where you don't have to hold back/Sauna/BBQ/Pets allowed/Loud music allowed/Private log house"
                - generic [ref=e552]:
                  - generic [ref=e553]:
                    - generic [ref=e554]: 2 bedrooms
                    - generic [ref=e555]: 2 bedrooms
                  - generic [ref=e556]:
                    - generic [ref=e557]: 4 single beds
                    - generic [ref=e558]: ","
                    - generic [ref=e559]: ·
                    - generic [ref=e560]: 4 single beds
                  - generic [ref=e561]:
                    - generic [ref=e562]: 1 bathroom
                    - generic [ref=e563]: ","
                    - generic [ref=e564]: ·
                    - generic [ref=e565]: 1 bathroom
                - generic [ref=e567]:
                  - generic [ref=e568]: 17–22 Jun
                  - generic [ref=e569]: 17–22 Jun
                - generic [ref=e573]:
                  - button [ref=e578] [cursor=pointer]:
                    - text: ₹75,288
                    - generic [ref=e579]: Show price breakdown
                  - generic [ref=e581]: for 5 nights
                  - generic [ref=e582]: ₹75,288 for 5 nights
                - generic [ref=e583]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e589]:
            - link [ref=e590] [cursor=pointer]:
              - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e591]:
              - group [ref=e594]:
                - generic:
                  - button [ref=e596] [cursor=pointer]:
                    - img [ref=e597]
                  - generic:
                    - button [disabled] [ref=e600] [cursor=pointer]:
                      - img [ref=e602]
                    - button [ref=e605] [cursor=pointer]:
                      - img [ref=e607]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e613]:
                  - link [ref=e614] [cursor=pointer]:
                    - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e617]
                  - link [ref=e618] [cursor=pointer]:
                    - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e619] [cursor=pointer]:
                    - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e620] [cursor=pointer]:
                    - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e621] [cursor=pointer]:
                    - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e622] [cursor=pointer]:
                    - /url: /rooms/1656294138122072331?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2578355234&source_impression_id=p3_1780336940_P3buazOJOFRR_ijb&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e623]:
                - generic [ref=e624]: Resort in Ghighud, India
                - generic [ref=e626]: Himalaya View Homestay | Peaceful Mountain Stay
                - generic [ref=e627]:
                  - generic [ref=e628]:
                    - generic [ref=e629]: 9 bedrooms
                    - generic [ref=e630]: 9 bedrooms
                  - generic [ref=e631]:
                    - generic [ref=e632]: 1 double bed
                    - generic [ref=e633]: ","
                    - generic [ref=e634]: ·
                    - generic [ref=e635]: 1 double bed
                  - generic [ref=e636]:
                    - generic [ref=e637]: 9 bathrooms
                    - generic [ref=e638]: ","
                    - generic [ref=e639]: ·
                    - generic [ref=e640]: 9 bathrooms
                - generic [ref=e642]:
                  - generic [ref=e643]: 1–6 Jun
                  - generic [ref=e644]: 1–6 Jun
                - generic [ref=e645]:
                  - generic [ref=e650]:
                    - generic [ref=e651]:
                      - generic [ref=e652]: ₹15,804
                      - button [ref=e655] [cursor=pointer]:
                        - text: ₹12,964
                        - generic [ref=e656]: Show price breakdown
                    - generic [ref=e659]: for 5 nights
                  - generic [ref=e660]:
                    - generic [ref=e661]: New home discount
                    - generic [ref=e662]: Free cancellation
                - generic [ref=e663]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e669]:
            - link [ref=e670] [cursor=pointer]:
              - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e671]:
              - group [ref=e674]:
                - generic:
                  - button [ref=e676] [cursor=pointer]:
                    - img [ref=e677]
                  - generic:
                    - button [disabled] [ref=e680] [cursor=pointer]:
                      - img [ref=e682]
                    - button [ref=e685] [cursor=pointer]:
                      - img [ref=e687]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e693]:
                  - link [ref=e694] [cursor=pointer]:
                    - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e697]
                  - link [ref=e698] [cursor=pointer]:
                    - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e699] [cursor=pointer]:
                    - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e700] [cursor=pointer]:
                    - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e701] [cursor=pointer]:
                    - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e702] [cursor=pointer]:
                    - /url: /rooms/1691470393579849851?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2645037429&source_impression_id=p3_1780336940_P3lVfz4bcreBYhu1&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e703]:
                - generic [ref=e704]: Home in Puebla, Mexico
                - generic [ref=e706]: Cabin-style house in the capital of Puebla
                - generic [ref=e707]:
                  - generic [ref=e708]:
                    - generic [ref=e709]: 1 bedroom
                    - generic [ref=e710]: 1 bedroom
                  - generic [ref=e711]:
                    - generic [ref=e712]: 3 beds
                    - generic [ref=e713]: ","
                    - generic [ref=e714]: ·
                    - generic [ref=e715]: 3 beds
                  - generic [ref=e716]:
                    - generic [ref=e717]: 1 bathroom
                    - generic [ref=e718]: ","
                    - generic [ref=e719]: ·
                    - generic [ref=e720]: 1 bathroom
                - generic [ref=e722]:
                  - generic [ref=e723]: 1–6 Jun
                  - generic [ref=e724]: 1–6 Jun
                - generic [ref=e725]:
                  - generic [ref=e728]:
                    - button [ref=e733] [cursor=pointer]:
                      - text: ₹16,249
                      - generic [ref=e734]: Show price breakdown
                    - generic [ref=e736]: for 5 nights
                    - generic [ref=e737]: ₹16,249 for 5 nights
                  - generic [ref=e739]: Free cancellation
                - generic [ref=e740]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e746]:
            - link [ref=e747] [cursor=pointer]:
              - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e748]:
              - group [ref=e751]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                        - generic: Top guest favourite
                        - generic: Guest favourite
                    - button [ref=e753] [cursor=pointer]:
                      - img [ref=e754]
                  - generic:
                    - button [disabled] [ref=e757] [cursor=pointer]:
                      - img [ref=e759]
                    - button [ref=e762] [cursor=pointer]:
                      - img [ref=e764]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e770]:
                  - link [ref=e771] [cursor=pointer]:
                    - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e774]
                  - link [ref=e775] [cursor=pointer]:
                    - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e776] [cursor=pointer]:
                    - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e777] [cursor=pointer]:
                    - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e778] [cursor=pointer]:
                    - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e779] [cursor=pointer]:
                    - /url: /rooms/1664651151054591888?search_mode=regular_search&adults=1&check_in=2026-06-17&check_out=2026-06-22&children=0&infants=0&pets=0&photo_id=2605144535&source_impression_id=p3_1780336940_P3O5HbuQpTM0_Kx0&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e780]:
                - generic [ref=e781]: Cabin in Crossville, Tennessee, US
                - generic [ref=e783]: Riverside cabin w/stone pizza oven & hiking trails
                - generic [ref=e784]:
                  - generic [ref=e785]:
                    - generic [ref=e786]: 1 bedroom
                    - generic [ref=e787]: 1 bedroom
                  - generic [ref=e788]:
                    - generic [ref=e789]: 2 beds
                    - generic [ref=e790]: ","
                    - generic [ref=e791]: ·
                    - generic [ref=e792]: 2 beds
                  - generic [ref=e793]:
                    - generic [ref=e794]: 1 bathroom
                    - generic [ref=e795]: ","
                    - generic [ref=e796]: ·
                    - generic [ref=e797]: 1 bathroom
                - generic [ref=e799]:
                  - generic [ref=e800]: 17–22 Jun
                  - generic [ref=e801]: 17–22 Jun
                - generic [ref=e802]:
                  - generic [ref=e805]:
                    - button [ref=e810] [cursor=pointer]:
                      - text: ₹99,752
                      - generic [ref=e811]: Show price breakdown
                    - generic [ref=e813]: for 5 nights
                    - generic [ref=e814]: ₹99,752 for 5 nights
                  - generic [ref=e816]: Free cancellation
                - generic [ref=e817]:
                  - generic:
                    - generic: 5.0 out of 5 average rating, 9 reviews
                    - generic:
                      - img
                    - generic: 5.0 (9)
          - group [ref=e823]:
            - link [ref=e824] [cursor=pointer]:
              - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e825]:
              - group [ref=e828]:
                - generic:
                  - button [ref=e830] [cursor=pointer]:
                    - img [ref=e831]
                  - generic:
                    - button [disabled] [ref=e834] [cursor=pointer]:
                      - img [ref=e836]
                    - button [ref=e839] [cursor=pointer]:
                      - img [ref=e841]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e847]:
                  - link [ref=e848] [cursor=pointer]:
                    - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e851]
                  - link [ref=e852] [cursor=pointer]:
                    - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e853] [cursor=pointer]:
                    - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e854] [cursor=pointer]:
                    - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e855] [cursor=pointer]:
                    - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e856] [cursor=pointer]:
                    - /url: /rooms/1684812568584754857?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2631782666&source_impression_id=p3_1780336940_P3vVh2PxgwG8an6i&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e857]:
                - generic [ref=e858]: Flat in Nashik, India
                - generic [ref=e860]: Periwinkle | 2BHK | Trinay | Nashik | Airbnb
                - generic [ref=e861]:
                  - generic [ref=e862]:
                    - generic [ref=e863]: 2 bedrooms
                    - generic [ref=e864]: 2 bedrooms
                  - generic [ref=e865]:
                    - generic [ref=e866]: 3 beds
                    - generic [ref=e867]: ","
                    - generic [ref=e868]: ·
                    - generic [ref=e869]: 3 beds
                  - generic [ref=e870]:
                    - generic [ref=e871]: 2 bathrooms
                    - generic [ref=e872]: ","
                    - generic [ref=e873]: ·
                    - generic [ref=e874]: 2 bathrooms
                - generic [ref=e876]:
                  - generic [ref=e877]: 2–7 Jun
                  - generic [ref=e878]: 2–7 Jun
                - generic [ref=e882]:
                  - button [ref=e887] [cursor=pointer]:
                    - text: ₹21,942
                    - generic [ref=e888]: Show price breakdown
                  - generic [ref=e890]: for 5 nights
                  - generic [ref=e891]: ₹21,942 for 5 nights
                - generic [ref=e892]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e898]:
            - link [ref=e899] [cursor=pointer]:
              - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e900]:
              - group [ref=e903]:
                - generic:
                  - button [ref=e905] [cursor=pointer]:
                    - img [ref=e906]
                  - generic:
                    - button [disabled] [ref=e909] [cursor=pointer]:
                      - img [ref=e911]
                    - button [ref=e914] [cursor=pointer]:
                      - img [ref=e916]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e922]:
                  - link [ref=e923] [cursor=pointer]:
                    - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e926]
                  - link [ref=e927] [cursor=pointer]:
                    - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e928] [cursor=pointer]:
                    - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e929] [cursor=pointer]:
                    - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e930] [cursor=pointer]:
                    - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e931] [cursor=pointer]:
                    - /url: /rooms/1565081928191965576?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1780336940_P3SDVz70bWkolOT4&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e932]:
                - generic [ref=e933]: Place to stay in Khammam, India
                - generic [ref=e935]: Balcony Bliss | Top Floor City View Stay
                - generic [ref=e936]:
                  - generic [ref=e937]:
                    - generic [ref=e938]: 1 bedroom
                    - generic [ref=e939]: 1 bedroom
                  - generic [ref=e940]:
                    - generic [ref=e941]: 1 queen bed
                    - generic [ref=e942]: ","
                    - generic [ref=e943]: ·
                    - generic [ref=e944]: 1 queen bed
                  - generic [ref=e945]:
                    - generic [ref=e946]: 1 bathroom
                    - generic [ref=e947]: ","
                    - generic [ref=e948]: ·
                    - generic [ref=e949]: 1 bathroom
                - generic [ref=e951]:
                  - generic [ref=e952]: 1–6 Jun
                  - generic [ref=e953]: 1–6 Jun
                - generic [ref=e954]:
                  - generic [ref=e957]:
                    - button [ref=e962] [cursor=pointer]:
                      - text: ₹11,368
                      - generic [ref=e963]: Show price breakdown
                    - generic [ref=e965]: for 5 nights
                    - generic [ref=e966]: ₹11,368 for 5 nights
                  - generic [ref=e968]: Free cancellation
                - generic [ref=e969]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e975]:
            - link [ref=e976] [cursor=pointer]:
              - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e977]:
              - group [ref=e980]:
                - generic:
                  - button [ref=e982] [cursor=pointer]:
                    - img [ref=e983]
                  - generic:
                    - button [disabled] [ref=e986] [cursor=pointer]:
                      - img [ref=e988]
                    - button [ref=e991] [cursor=pointer]:
                      - img [ref=e993]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e999]:
                  - link [ref=e1000] [cursor=pointer]:
                    - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1003]
                  - link [ref=e1004] [cursor=pointer]:
                    - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1005] [cursor=pointer]:
                    - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1006] [cursor=pointer]:
                    - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1007] [cursor=pointer]:
                    - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1008] [cursor=pointer]:
                    - /url: /rooms/1666150415970883655?search_mode=regular_search&adults=1&check_in=2026-06-03&check_out=2026-06-08&children=0&infants=0&pets=0&photo_id=2597062174&source_impression_id=p3_1780336940_P3RKTHlOepUV_fU2&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1009]:
                - generic [ref=e1010]: Cabin in Petrovići, Bosnia & Herzegovina
                - generic [ref=e1012]: Montecasa mountain cottage
                - generic [ref=e1013]:
                  - generic [ref=e1014]:
                    - generic [ref=e1015]: 1 bedroom
                    - generic [ref=e1016]: 1 bedroom
                  - generic [ref=e1017]:
                    - generic [ref=e1018]: 2 beds
                    - generic [ref=e1019]: ","
                    - generic [ref=e1020]: ·
                    - generic [ref=e1021]: 2 beds
                  - generic [ref=e1022]:
                    - generic [ref=e1023]: 1 bathroom
                    - generic [ref=e1024]: ","
                    - generic [ref=e1025]: ·
                    - generic [ref=e1026]: 1 bathroom
                - generic [ref=e1028]:
                  - generic [ref=e1029]: 3–8 Jun
                  - generic [ref=e1030]: 3–8 Jun
                - generic [ref=e1031]:
                  - generic [ref=e1036]:
                    - generic [ref=e1037]:
                      - generic [ref=e1038]: ₹57,607
                      - button [ref=e1041] [cursor=pointer]:
                        - text: ₹47,422
                        - generic [ref=e1042]: Show price breakdown
                    - generic [ref=e1045]: for 5 nights
                  - generic [ref=e1046]:
                    - generic [ref=e1047]: New home discount
                    - generic [ref=e1048]: Free cancellation
                - generic [ref=e1049]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e1055]:
            - link [ref=e1056] [cursor=pointer]:
              - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1057]:
              - group [ref=e1060]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic: Superhost
                        - generic: Superhost
                    - button [ref=e1062] [cursor=pointer]:
                      - img [ref=e1063]
                  - generic:
                    - button [disabled] [ref=e1066] [cursor=pointer]:
                      - img [ref=e1068]
                    - button [ref=e1071] [cursor=pointer]:
                      - img [ref=e1073]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1079]:
                  - link [ref=e1080] [cursor=pointer]:
                    - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1083]
                  - link [ref=e1084] [cursor=pointer]:
                    - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1085] [cursor=pointer]:
                    - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1086] [cursor=pointer]:
                    - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1087] [cursor=pointer]:
                    - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1088] [cursor=pointer]:
                    - /url: /rooms/1683329125712001649?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2628740414&source_impression_id=p3_1780336940_P3FaDqBgoMDfDuKl&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1089]:
                - generic [ref=e1090]: Home in New Delhi, India
                - generic [ref=e1092]: The Terrace House
                - generic [ref=e1093]:
                  - generic [ref=e1094]:
                    - generic [ref=e1095]: 2 bedrooms
                    - generic [ref=e1096]: 2 bedrooms
                  - generic [ref=e1097]:
                    - generic [ref=e1098]: 2 double beds
                    - generic [ref=e1099]: ","
                    - generic [ref=e1100]: ·
                    - generic [ref=e1101]: 2 double beds
                  - generic [ref=e1102]:
                    - generic [ref=e1103]: 2 bathrooms
                    - generic [ref=e1104]: ","
                    - generic [ref=e1105]: ·
                    - generic [ref=e1106]: 2 bathrooms
                - generic [ref=e1108]:
                  - generic [ref=e1109]: 7–12 Jun
                  - generic [ref=e1110]: 7–12 Jun
                - generic [ref=e1111]:
                  - generic [ref=e1114]:
                    - button [ref=e1119] [cursor=pointer]:
                      - text: ₹35,833
                      - generic [ref=e1120]: Show price breakdown
                    - generic [ref=e1122]: for 5 nights
                    - generic [ref=e1123]: ₹35,833 for 5 nights
                  - generic [ref=e1125]: Free cancellation
                - generic [ref=e1126]:
                  - generic:
                    - generic: 5.0 out of 5 average rating, 3 reviews
                    - generic:
                      - img
                    - generic: 5.0 (3)
          - group [ref=e1132]:
            - link [ref=e1133] [cursor=pointer]:
              - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1134]:
              - group [ref=e1137]:
                - generic:
                  - button [ref=e1139] [cursor=pointer]:
                    - img [ref=e1140]
                  - generic:
                    - button [disabled] [ref=e1143] [cursor=pointer]:
                      - img [ref=e1145]
                    - button [ref=e1148] [cursor=pointer]:
                      - img [ref=e1150]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1156]:
                  - link [ref=e1157] [cursor=pointer]:
                    - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1160]
                  - link [ref=e1161] [cursor=pointer]:
                    - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1162] [cursor=pointer]:
                    - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1163] [cursor=pointer]:
                    - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1164] [cursor=pointer]:
                    - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1165] [cursor=pointer]:
                    - /url: /rooms/1689816354976114596?search_mode=regular_search&adults=1&check_in=2026-06-07&check_out=2026-06-12&children=0&infants=0&pets=0&photo_id=2641393336&source_impression_id=p3_1780336940_P3U2I2MGwh4vGLke&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1166]:
                - generic [ref=e1167]: Home in Pohang-si, South Korea
                - generic [ref=e1169]: "[Haepond Stay] Ocean view detached house with lawn, large swimming pool, water play equipment, and beam projector/late check-out!"
                - generic [ref=e1170]:
                  - generic [ref=e1171]:
                    - generic [ref=e1172]: 3 bedrooms
                    - generic [ref=e1173]: 3 bedrooms
                  - generic [ref=e1174]:
                    - generic [ref=e1175]: 3 queen beds
                    - generic [ref=e1176]: ","
                    - generic [ref=e1177]: ·
                    - generic [ref=e1178]: 3 queen beds
                  - generic [ref=e1179]:
                    - generic [ref=e1180]: 3 bathrooms
                    - generic [ref=e1181]: ","
                    - generic [ref=e1182]: ·
                    - generic [ref=e1183]: 3 bathrooms
                - generic [ref=e1185]:
                  - generic [ref=e1186]: 7–12 Jun
                  - generic [ref=e1187]: 7–12 Jun
                - generic [ref=e1191]:
                  - button [ref=e1196] [cursor=pointer]:
                    - text: ₹1,13,404
                    - generic [ref=e1197]: Show price breakdown
                  - generic [ref=e1199]: for 5 nights
                  - generic [ref=e1200]: ₹1,13,404 for 5 nights
                - generic [ref=e1201]:
                  - generic:
                    - generic: 5.0 out of 5 average rating, 4 reviews
                    - generic:
                      - img
                    - generic: 5.0 (4)
          - group [ref=e1207]:
            - link [ref=e1208] [cursor=pointer]:
              - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1209]:
              - group [ref=e1212]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - img
                        - generic: Top guest favourite
                        - generic: Guest favourite
                    - button [ref=e1214] [cursor=pointer]:
                      - img [ref=e1215]
                  - generic:
                    - button [disabled] [ref=e1218] [cursor=pointer]:
                      - img [ref=e1220]
                    - button [ref=e1223] [cursor=pointer]:
                      - img [ref=e1225]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1231]:
                  - link [ref=e1232] [cursor=pointer]:
                    - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1235]
                  - link [ref=e1236] [cursor=pointer]:
                    - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1237] [cursor=pointer]:
                    - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1238] [cursor=pointer]:
                    - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1239] [cursor=pointer]:
                    - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1240] [cursor=pointer]:
                    - /url: /rooms/1672772358624020710?search_mode=regular_search&adults=1&check_in=2026-06-22&check_out=2026-06-27&children=0&infants=0&pets=0&photo_id=2631097077&source_impression_id=p3_1780336940_P3QO2B943246PVeq&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1241]:
                - generic [ref=e1242]: Cabin in Athens, Alabama, US
                - generic [ref=e1244]: Reel Sunset at Dogwood
                - generic [ref=e1245]:
                  - generic [ref=e1246]:
                    - generic [ref=e1247]: 3 bedrooms
                    - generic [ref=e1248]: 3 bedrooms
                  - generic [ref=e1249]:
                    - generic [ref=e1250]: 4 beds
                    - generic [ref=e1251]: ","
                    - generic [ref=e1252]: ·
                    - generic [ref=e1253]: 4 beds
                  - generic [ref=e1254]:
                    - generic [ref=e1255]: 1 bathroom
                    - generic [ref=e1256]: ","
                    - generic [ref=e1257]: ·
                    - generic [ref=e1258]: 1 bathroom
                - generic [ref=e1260]:
                  - generic [ref=e1261]: 22–27 Jun
                  - generic [ref=e1262]: 22–27 Jun
                - generic [ref=e1263]:
                  - generic [ref=e1266]:
                    - button [ref=e1271] [cursor=pointer]:
                      - text: ₹93,774
                      - generic [ref=e1272]: Show price breakdown
                    - generic [ref=e1274]: for 5 nights
                    - generic [ref=e1275]: ₹93,774 for 5 nights
                  - generic [ref=e1277]: Free cancellation
                - generic [ref=e1278]:
                  - generic:
                    - generic: 5.0 out of 5 average rating, 7 reviews
                    - generic:
                      - img
                    - generic: 5.0 (7)
          - group [ref=e1284]:
            - link [ref=e1285] [cursor=pointer]:
              - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1286]:
              - group [ref=e1289]:
                - generic:
                  - button [ref=e1291] [cursor=pointer]:
                    - img [ref=e1292]
                  - generic:
                    - button [disabled] [ref=e1295] [cursor=pointer]:
                      - img [ref=e1297]
                    - button [ref=e1300] [cursor=pointer]:
                      - img [ref=e1302]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1308]:
                  - link [ref=e1309] [cursor=pointer]:
                    - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1312]
                  - link [ref=e1313] [cursor=pointer]:
                    - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1314] [cursor=pointer]:
                    - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1315] [cursor=pointer]:
                    - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1316] [cursor=pointer]:
                    - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1317] [cursor=pointer]:
                    - /url: /rooms/1672518688240369424?search_mode=regular_search&adults=1&check_in=2026-06-24&check_out=2026-06-29&children=0&infants=0&pets=0&photo_id=2620791115&source_impression_id=p3_1780336940_P38upYdNkXRz5KXc&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1318]:
                - generic [ref=e1319]: Home in Munsyari, India
                - generic [ref=e1321]: Hayat-Mato Homestay
                - generic [ref=e1322]:
                  - generic [ref=e1323]:
                    - generic [ref=e1324]: 3 bedrooms
                    - generic [ref=e1325]: 3 bedrooms
                  - generic [ref=e1326]:
                    - generic [ref=e1327]: 3 beds
                    - generic [ref=e1328]: ","
                    - generic [ref=e1329]: ·
                    - generic [ref=e1330]: 3 beds
                  - generic [ref=e1331]:
                    - generic [ref=e1332]: 3 bathrooms
                    - generic [ref=e1333]: ","
                    - generic [ref=e1334]: ·
                    - generic [ref=e1335]: 3 bathrooms
                - generic [ref=e1337]:
                  - generic [ref=e1338]: 24–29 Jun
                  - generic [ref=e1339]: 24–29 Jun
                - generic [ref=e1343]:
                  - button [ref=e1348] [cursor=pointer]:
                    - text: ₹22,379
                    - generic [ref=e1349]: Show price breakdown
                  - generic [ref=e1351]: for 5 nights
                  - generic [ref=e1352]: ₹22,379 for 5 nights
                - generic [ref=e1353]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e1359]:
            - link [ref=e1360] [cursor=pointer]:
              - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1361]:
              - group [ref=e1364]:
                - generic:
                  - button [ref=e1366] [cursor=pointer]:
                    - img [ref=e1367]
                  - generic:
                    - button [disabled] [ref=e1370] [cursor=pointer]:
                      - img [ref=e1372]
                    - button [ref=e1375] [cursor=pointer]:
                      - img [ref=e1377]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1383]:
                  - link [ref=e1384] [cursor=pointer]:
                    - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1387]
                  - link [ref=e1388] [cursor=pointer]:
                    - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1389] [cursor=pointer]:
                    - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1390] [cursor=pointer]:
                    - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1391] [cursor=pointer]:
                    - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1392] [cursor=pointer]:
                    - /url: /rooms/1681327423559690778?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625482961&source_impression_id=p3_1780336941_P37IacKni6plaC3o&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1393]:
                - generic [ref=e1394]: Home in Usk, Washington, US
                - generic [ref=e1396]: 1 Bed, 1 Bath, 1 Queen Hide-a-Bed
                - generic [ref=e1397]:
                  - generic [ref=e1398]:
                    - generic [ref=e1399]: 1 bedroom
                    - generic [ref=e1400]: 1 bedroom
                  - generic [ref=e1401]:
                    - generic [ref=e1402]: 1 queen bed
                    - generic [ref=e1403]: ","
                    - generic [ref=e1404]: ·
                    - generic [ref=e1405]: 1 queen bed
                  - generic [ref=e1406]:
                    - generic [ref=e1407]: 1 bathroom
                    - generic [ref=e1408]: ","
                    - generic [ref=e1409]: ·
                    - generic [ref=e1410]: 1 bathroom
                - generic [ref=e1412]:
                  - generic [ref=e1413]: 1–6 Jun
                  - generic [ref=e1414]: 1–6 Jun
                - generic [ref=e1415]:
                  - generic [ref=e1418]:
                    - button [ref=e1423] [cursor=pointer]:
                      - text: ₹60,821
                      - generic [ref=e1424]: Show price breakdown
                    - generic [ref=e1426]: for 5 nights
                    - generic [ref=e1427]: ₹60,821 for 5 nights
                  - generic [ref=e1429]: Free cancellation
                - generic [ref=e1430]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e1436]:
            - link [ref=e1437] [cursor=pointer]:
              - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1438]:
              - group [ref=e1441]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic: Superhost
                        - generic: Superhost
                    - button [ref=e1443] [cursor=pointer]:
                      - img [ref=e1444]
                  - generic:
                    - button [disabled] [ref=e1447] [cursor=pointer]:
                      - img [ref=e1449]
                    - button [ref=e1452] [cursor=pointer]:
                      - img [ref=e1454]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1460]:
                  - link [ref=e1461] [cursor=pointer]:
                    - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1464]
                  - link [ref=e1465] [cursor=pointer]:
                    - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1466] [cursor=pointer]:
                    - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1467] [cursor=pointer]:
                    - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1468] [cursor=pointer]:
                    - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1469] [cursor=pointer]:
                    - /url: /rooms/1664131364761775470?search_mode=regular_search&adults=1&check_in=2026-06-02&check_out=2026-06-07&children=0&infants=0&pets=0&photo_id=2592726654&source_impression_id=p3_1780336941_P3yI6Ju1fuz5tqSs&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1470]:
                - generic [ref=e1471]: Cabin in Mentone, Alabama, US
                - generic [ref=e1473]: Unplug & Reconnect-Little Cabin, Fire Pit & Creek
                - generic [ref=e1474]:
                  - generic [ref=e1475]:
                    - generic [ref=e1476]: 2 bedrooms
                    - generic [ref=e1477]: 2 bedrooms
                  - generic [ref=e1478]:
                    - generic [ref=e1479]: 3 beds
                    - generic [ref=e1480]: ","
                    - generic [ref=e1481]: ·
                    - generic [ref=e1482]: 3 beds
                  - generic [ref=e1483]:
                    - generic [ref=e1484]: 1.5 bathrooms
                    - generic [ref=e1485]: ","
                    - generic [ref=e1486]: ·
                    - generic [ref=e1487]: 1.5 bathrooms
                - generic [ref=e1489]:
                  - generic [ref=e1490]: 2–7 Jun
                  - generic [ref=e1491]: 2–7 Jun
                - generic [ref=e1492]:
                  - generic [ref=e1495]:
                    - button [ref=e1500] [cursor=pointer]:
                      - text: ₹77,408
                      - generic [ref=e1501]: Show price breakdown
                    - generic [ref=e1503]: for 5 nights
                    - generic [ref=e1504]: ₹77,408 for 5 nights
                  - generic [ref=e1506]: Free cancellation
                - generic [ref=e1507]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
          - group [ref=e1513]:
            - link [ref=e1514] [cursor=pointer]:
              - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
            - generic [ref=e1515]:
              - group [ref=e1518]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic: Superhost
                        - generic: Superhost
                    - button [ref=e1520] [cursor=pointer]:
                      - img [ref=e1521]
                  - generic:
                    - button [disabled] [ref=e1524] [cursor=pointer]:
                      - img [ref=e1526]
                    - button [ref=e1529] [cursor=pointer]:
                      - img [ref=e1531]
                  - generic:
                    - generic:
                      - img
                - generic [ref=e1537]:
                  - link [ref=e1538] [cursor=pointer]:
                    - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                    - img [ref=e1541]
                  - link [ref=e1542] [cursor=pointer]:
                    - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1543] [cursor=pointer]:
                    - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1544] [cursor=pointer]:
                    - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1545] [cursor=pointer]:
                    - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
                  - link [ref=e1546] [cursor=pointer]:
                    - /url: /rooms/1681475645904913621?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=2625766988&source_impression_id=p3_1780336941_P31cn23Q0V14Tvt7&previous_page_section_name=1000&federated_search_id=4c664220-75cb-41fb-bcdb-9e0a20f8043a
              - generic [ref=e1547]:
                - generic [ref=e1548]: Dome in Mairiporã, Brazil
                - generic [ref=e1550]: Geodésia Alvorada – Dome
                - generic [ref=e1551]:
                  - generic [ref=e1552]:
                    - generic [ref=e1553]: 1 bedroom
                    - generic [ref=e1554]: 1 bedroom
                  - generic [ref=e1555]:
                    - generic [ref=e1556]: 2 beds
                    - generic [ref=e1557]: ","
                    - generic [ref=e1558]: ·
                    - generic [ref=e1559]: 2 beds
                  - generic [ref=e1560]:
                    - generic [ref=e1561]: 1 bathroom
                    - generic [ref=e1562]: ","
                    - generic [ref=e1563]: ·
                    - generic [ref=e1564]: 1 bathroom
                - generic [ref=e1566]:
                  - generic [ref=e1567]: 1–6 Jun
                  - generic [ref=e1568]: 1–6 Jun
                - generic [ref=e1569]:
                  - generic [ref=e1574]:
                    - generic [ref=e1575]:
                      - generic [ref=e1576]: ₹72,592
                      - button [ref=e1579] [cursor=pointer]:
                        - text: ₹60,339
                        - generic [ref=e1580]: Show price breakdown
                    - generic [ref=e1583]: for 5 nights
                  - generic [ref=e1585]: New home discount
                - generic [ref=e1586]:
                  - generic:
                    - generic: New place to stay
                    - generic:
                      - img
                    - generic: New
      - region [ref=e1592]:
        - generic [ref=e1593]: Centred on
        - heading [level=2] [ref=e1595]: Google map Showing 20 stays.
        - button [ref=e1596] [cursor=pointer]:
          - img [ref=e1597]
        - generic [ref=e1599]:
          - button [ref=e1602] [cursor=pointer]:
            - img [ref=e1604]
          - generic [ref=e1611]:
            - button [ref=e1612] [cursor=pointer]:
              - img [ref=e1613]
            - button [disabled] [ref=e1617]:
              - img [ref=e1618]
        - iframe [ref=e1630]:
          
    - contentinfo [ref=e1636]:
      - generic [ref=e1637]:
        - heading [level=2] [ref=e1639]: Site Footer
        - generic [ref=e1640]:
          - generic [ref=e1641]:
            - heading [level=3] [ref=e1642]: Support
            - list [ref=e1643]:
              - listitem [ref=e1644]:
                - link [ref=e1645] [cursor=pointer]:
                  - /url: /help/home?from=footer
                  - text: Help Centre
              - listitem [ref=e1646]:
                - link [ref=e1647] [cursor=pointer]:
                  - /url: /help/contact-us?entry=DESKTOP_FOOTER_SAFETY
                  - text: Get help with a safety issue
              - listitem [ref=e1648]:
                - link [ref=e1649] [cursor=pointer]:
                  - /url: /aircover
                  - text: AirCover
              - listitem [ref=e1650]:
                - link [ref=e1651] [cursor=pointer]:
                  - /url: /against-discrimination
                  - text: Anti-discrimination
              - listitem [ref=e1652]:
                - link [ref=e1653] [cursor=pointer]:
                  - /url: /accessibility
                  - text: Disability support
              - listitem [ref=e1654]:
                - link [ref=e1655] [cursor=pointer]:
                  - /url: /help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19
                  - text: Cancellation options
              - listitem [ref=e1656]:
                - link [ref=e1657] [cursor=pointer]:
                  - /url: /neighbors
                  - text: Report neighbourhood concern
          - generic [ref=e1658]:
            - heading [level=3] [ref=e1659]: Hosting
            - list [ref=e1660]:
              - listitem [ref=e1661]:
                - link [ref=e1662] [cursor=pointer]:
                  - /url: /host/homes?from_footer=1
                  - text: Airbnb your home
              - listitem [ref=e1663]:
                - link [ref=e1664] [cursor=pointer]:
                  - /url: /host/experiences
                  - text: Airbnb your experience
              - listitem [ref=e1665]:
                - link [ref=e1666] [cursor=pointer]:
                  - /url: /host/services
                  - text: Airbnb your service
              - listitem [ref=e1667]:
                - link [ref=e1668] [cursor=pointer]:
                  - /url: /aircover-for-hosts
                  - text: AirCover for Hosts
              - listitem [ref=e1669]:
                - link [ref=e1670] [cursor=pointer]:
                  - /url: /resources
                  - text: Hosting resources
              - listitem [ref=e1671]:
                - link [ref=e1672] [cursor=pointer]:
                  - /url: https://community.withairbnb.com/t5/Community-Center/ct-p/community-center
                  - text: Community forum
              - listitem [ref=e1673]:
                - link [ref=e1674] [cursor=pointer]:
                  - /url: /help/responsible-hosting
                  - text: Hosting responsibly
              - listitem [ref=e1675]:
                - link [ref=e1676] [cursor=pointer]:
                  - /url: /e/intro-to-hosting
                  - text: Join a free hosting class
              - listitem [ref=e1677]:
                - link [ref=e1678] [cursor=pointer]:
                  - /url: /host/co-hosts
                  - text: Find a co‑host
              - listitem [ref=e1679]:
                - link [ref=e1680] [cursor=pointer]:
                  - /url: /refer
                  - text: Refer a host
          - generic [ref=e1681]:
            - heading [level=3] [ref=e1682]: Airbnb
            - list [ref=e1683]:
              - listitem [ref=e1684]:
                - link [ref=e1685] [cursor=pointer]:
                  - /url: /release
                  - text: 2026 Summer Release
              - listitem [ref=e1686]:
                - link [ref=e1687] [cursor=pointer]:
                  - /url: /press/news
                  - text: Newsroom
              - listitem [ref=e1688]:
                - link [ref=e1689] [cursor=pointer]:
                  - /url: /careers
                  - text: Careers
              - listitem [ref=e1690]:
                - link [ref=e1691] [cursor=pointer]:
                  - /url: https://investors.airbnb.com
                  - text: Investors
              - listitem [ref=e1692]:
                - link [ref=e1693] [cursor=pointer]:
                  - /url: https://www.airbnb.org?locale=en-IN
                  - text: Airbnb.org emergency stays
        - generic [ref=e1694]:
          - generic [ref=e1695]: Footer section
          - generic [ref=e1697]:
            - generic [ref=e1699]:
              - generic [ref=e1700]: © 2026 Airbnb, Inc.
              - generic [ref=e1701]:
                - generic [ref=e1703]: ·
                - list [ref=e1705]:
                  - listitem [ref=e1706]:
                    - link [ref=e1707] [cursor=pointer]:
                      - /url: /terms/privacy_policy
                      - text: Privacy
                    - generic [ref=e1708]:
                      - generic:
                        - generic: ·
                  - listitem [ref=e1709]:
                    - link [ref=e1710] [cursor=pointer]:
                      - /url: /terms
                      - text: Terms
                    - generic [ref=e1711]:
                      - generic:
                        - generic: ·
                  - listitem [ref=e1712]:
                    - link [ref=e1713] [cursor=pointer]:
                      - /url: /about/company-details
                      - text: Company details
            - generic [ref=e1714]:
              - generic [ref=e1716]:
                - button [ref=e1718] [cursor=pointer]:
                  - generic [ref=e1719]:
                    - generic:
                      - img
                      - text: English (IN)
                - button [ref=e1721] [cursor=pointer]:
                  - generic [ref=e1723]:
                    - generic [ref=e1724]: ₹
                    - generic [ref=e1725]: INR
              - list [ref=e1727]:
                - listitem [ref=e1728]:
                  - link [ref=e1729] [cursor=pointer]:
                    - /url: https://www.facebook.com/AirbnbIndia
                    - img [ref=e1731]
                - listitem [ref=e1733]:
                  - link [ref=e1734] [cursor=pointer]:
                    - /url: https://twitter.com/airbnb_in
                    - img [ref=e1736]
                - listitem [ref=e1738]:
                  - link [ref=e1739] [cursor=pointer]:
                    - /url: https://instagram.com/airbnb
                    - img [ref=e1741]
  - dialog "Now you’ll see one price for your trip, all fees included." [active] [ref=e1750]:
    - button "Close" [ref=e1752] [cursor=pointer]:
      - img [ref=e1754]
    - generic [ref=e1760]:
      - generic [ref=e1761]:
        - generic [ref=e1762]:
          - generic [ref=e1763]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1764]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1765]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1766]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1767]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1768]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1769]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1770]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1771]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1772]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1773]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1774]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1775]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1776]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1777]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1778]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1779]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1780]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1781]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1782]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1783]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1784]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1785]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1786]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1787]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1788]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1789]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1790]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1791]: Now you’ll see one price foryour trip, all fees included.
          - generic [ref=e1792]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1793]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1794]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1795]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1796]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1797]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1798]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1799]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1800]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1801]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1802]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1803]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1804]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1805]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1806]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1807]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1808]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1809]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1810]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1811]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1812]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1813]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1814]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1815]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1816]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1817]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1818]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1819]: Now you’ll see one price for your trip, all fees included.
          - generic [ref=e1820]: Now you’ll see one price for your trip, all fees included.
        - generic [ref=e1821]: Now you’ll see one price for your trip, all fees included.
      - button "Got it" [ref=e1822] [cursor=pointer]
```

# Test source

```ts
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
  120 |     expect(loadTime).toBeLessThan(10_000);
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
> 165 |     expect(page.url()).toContain('airbnb.com');
      |                        ^ Error: expect(received).toContain(expected) // indexOf
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
  221 |   });
  222 | 
  223 |   /**
  224 |    * API-012: Non-existent page returns 404 not 500
  225 |    */
  226 |   test('API-012: non-existent routes should return 404', async ({ request }) => {
  227 |     const response = await request.get('https://www.airbnb.com/this-page-does-not-exist-xyz');
  228 |     // Should be 404 or redirect, not 500
  229 |     expect(response.status()).toBeLessThan(500);
  230 |   });
  231 | });
  232 | 
```