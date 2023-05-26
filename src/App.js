import React from "react";
import SearchBar from "./SearchBar";
import CallButton from "./CallButton";
import DirectionsButton from "./DirectionsButton";

import ShareButton from "./ShareButton";
import CallButton1 from "./CallButton1";
import CallButton2 from "./CallButton2";
import CallButton3 from "./CallButton3";
import CallButton4 from "./CallButton4";
import CallButton5 from "./CallButton5";
import CallButton6 from "./CallButton6";
import CallButton7 from "./CallButton7";
import CallButton8 from "./CallButton8";
import CallButton9 from "./CallButton9";
import CallButton10 from "./CallButton10";
import CallButton11 from "./CallButton11";
import CallButton12 from "./CallButton12";
import CallButton13 from "./CallButton13";
import CallButton14 from "./CallButton14";
import CallButton15 from "./CallButton15";
import CallButton16 from "./CallButton16";
import CallButton17 from "./CallButton17";
import CallButton18 from "./CallButton18";
import CallButton19 from "./CallButton19";

import CallButton20 from "./CallButton20";
import CallButton21 from "./CallButton21";
import AddressSelectionButton from "./AddressSelectionButton";

export default function App() {
  return (
    <div class="">
      <div className="container mx-auto p-4">
        <AddressSelectionButton />
      </div>

      <button
        type="button"
        class="mb-2 block w-full rounded bg-primary px-6 pb-2 pt-2.5
text-xs font-medium uppercase leading-normal text-white
shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
hover:bg-primary-600
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(5
9,113,202,0.2)] focus:bg-primary-600
focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(5
9,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(
59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_r
gba(59,113,202,0.1)]
dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_r
gba(59,113,202,0.1)]
dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_
rgba(59,113,202,0.1)]"
      ></button>

      <div className="container mx-auto p-4 ">
        <SearchBar />
      </div>

      <div
        className="p-6 flex sm:w-1/2 lg:w-1/4 text-white mx-4
rounded-lg shadow-xl bg-orange-500 shadow-lg shadow-orange-300/50 "
      >
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold-coins-6.png"
          class=" justify-self-end h-auto max-w-full
rounded-lg w-1/2 lg:w-1/4"
        />
        Total Savings
        <p id="savings" class="text-white w-1/2">
          ₹ 0.0
        </p>
      </div>
      <div class="mt-6 ml-4 ">
        <p>Shops Near you </p>
      </div>

      <div class="container mx-auto">
        <div class=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl mb-8 p-6 bg-gray-100 "
          >
            <div className="text-center mt-2 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/palakkad/j8/9999px491.x491.2
20610215214.w8j8/catalogue/g-mart-super-market-palakkad-supermarkets-
yx98clqt92.jpg?clr="
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />

              <h3 className="text-lg font-semibold">EXODUS GENERAL STORE</h3>
              <p className="text-sm text-gray-500 mb-4 ">
                Open : 06:00 AM - 10:30 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipN1hXap-q5IDafVDvrb5tGA
rZuch-Sm3SaMLgZ5=s680-w680-h510"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">SILROSE GENERAL STORE</h3>

              <p className="text-lg font semibold">
                Hno. 92/A, Cansaulim, Goa{" "}
              </p>
              <p className="text-sm text-gray-500">
                Open : 07:00 AM - 10:00 PM
              </p>
              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton1 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMbXu4A0F9FGQEq0YLnNjCs
jz7Q-r9SrKLhMFvF=s680-w680-h510"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">RYLAN SUPERMARKET</h3>

              <p className="text-lg font semibold">
                Rylan Supermarket , Marjorda{" "}
              </p>
              <p className="text-sm text-gray-500 ">
                Open : 06:00 PM - 10:30 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton2 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNRybNeV5tioWK3v7MXybJB
uUn_3bd3Uqo2HKpq=s680-w680-h510"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                OMG AMUL ICE CREAM PARLOUR{" "}
              </h3>

              <p className="text-lg font semibold">
                Murda Grande,Nuvem, Salcete , Goa{" "}
              </p>
              <p className="text-sm text-gray-500">
                Open : 09:00 AM - 07:45 PM
              </p>
              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton3 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2 border-gray-300
rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://images.jdmagicbox.com/comp/pune/t8/020pxx20.xx20.1510291
30217.r7t8/catalogue/balaji-food-traders-hadapsar-pune-grocery-wholes
alers-4bawnim4u0.jpg?clr="
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                MAHALAXMI TRADERS SHOP N SAVE STORE{" "}
              </h3>
              <p className="text-sm text-gray-500">
                Open : 09:00 AM - 02:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton4 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2 border-gray-300
rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 ">
              <img
                src="https://content.jdmagicbox.com/comp/malappuram/j6/9999px483.x483
.211207161219.u4j6/catalogue/-6i6akr6ho6-250.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">ARABIAN CHICKEN CENTRE</h3>

              <p className="text-lg font semibold">
                Grace apartments Opp. Prabha Co-Operative Housing Society{" "}
              </p>
              <p className="text-sm text-gray-500">
                Open : 08:30 AM - 09:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton5 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2 border-gray-300
rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sreoJFe61E1KPfRyPGeetA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=7.2290077&pitch=0&thumbfov=100"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">AHMED CHICKEN CENTER</h3>

              <p className="text-lg font semibold">
                Priteam Recidency shop no.2 near alfa corner ,Margao{" "}
              </p>
              <p className="text-sm text-gray-500">
                Open : 08:00 AM - 09:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton6 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2 border-gray-300
rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/durgapur/p9/9999px343.x343.1
60709094744.n7p9/catalogue/arya-fruit-shop-bhiringi-durgapur-fruit-wh
olesalers-ku9f7l2-250.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">AARYA FRUIT </h3>
              <p className="text-sm text-gray-500">
                Open : 07:00 AM - 09:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton7 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/goa/u4/0832px832.x832.180614
103555.z6u4/catalogue/godavari-general-store-goa-uarsx.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">STREET CAFE </h3>
              <p className="text-lg font semibold"> Shop no.03 cosmas bldg </p>

              <p className="text-sm text-gray-500">
                Open : 07:30 AM - 08:45 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton8 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipP-ucdKdTplQcYU-GcMlV-7
FMuHmrRdrbNBpHG2=s680-w680-h510"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                SHREE BALAGI SUPERMARKET{" "}
              </h3>

              <p className="text-lg font semibold">
                {" "}
                shop no.01 Lewis park apartment near canara bank ATM{" "}
              </p>

              <p className="text-sm text-gray-500">
                Open : 07:00 AM - 11:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton9 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://static.wixstatic.com/media/89e553_87d82b868b294f0d9b555d
420bf4115f~mv2.jpg/v1/fill/w_516,h_518,al_c,q_80,enc_auto/89e553_87d8
2b868b294f0d9b555d420bf4115f~mv2.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">HITESH SUPERMARKET</h3>

              <p className="text-lg font semibold">
                {" "}
                S-1,Sanglow, CD Countryside,"Silvermist",Murida,Fatorda-Goa{" "}
              </p>

              <p className="text-sm text-gray-500">
                Open : 08:00 AM - 09:30 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton10 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://www.biharsehai.in/wp-content/uploads/2023/01/Suraj-Kiran
a-General-store-Indian-grocery-store-in-Harnichak-Anisabad-Patna-Biha
r.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">SNOW GENERAL STORE</h3>

              <p className="text-lg font semibold"> Riya , Goa -India</p>

              <p className="text-sm text-gray-500">
                Open : 07:00 AM - 09:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton11 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNr5zxAW1uM4TjycKeJ9IWj
deY1pn7fVsyttzMT=s680-w680-h510"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">JAQSON'S SUPERMART</h3>

              <p className="text-lg font semibold"> 13/3 Digvijay Guilding </p>
              <p className="text-sm text-gray-500">
                Open : 08:00 AM - 11:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton12 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/goa/y9/0832px832.x832.160213
110639.s4y9/catalogue/h-r-traders-patanjali-margao-goa-ayurvedic-prod
uct-dealers-patanjali-2zj4cnt.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">HR TRADERS </h3>
              <p className="text-sm text-gray-500">
                Open : 09:00 AM - 08:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton13 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMGN03aZ0vHsd9bF-XCiWie
d3joW_MZ2P_z-dgM=w1080-h608-p-no-v0"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                STAR PROVISION AND GENERAL STORE{" "}
              </h3>

              <p className="text-lg font semibold">Margao, Goa- India</p>
              <p className="text-sm text-gray-500">
                Open : 07:00 AM - 10:00 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton14 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/goa/a7/0832px832.x832.200107
175303.g3a7/catalogue/shivam-enterprises-goa-143fikmplh-250.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">SHIVAM ENTERPRISES</h3>

              <p className="text-sm text-gray-500">
                Open : 08:00 AM - 10:42 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton15 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content3.jdmagicbox.com/comp/goa/c5/0832px832.x832.21071
2182022.v4c5/catalogue/sunrise-supermarket-benaulim-goa-supermarkets-
ox4imrtdbl.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">SUNRISE SUPERMARKET</h3>

              <p className="text-lg font semibold">
                shop no.01 Damodar Building
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton16 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/goa/z8/0832px832.x832.170329
113100.a4z8/catalogue/shantadurga-general-store-ponda-goa-bakeries-1h
1orzo.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                SHANTADURGA GENERAL STORE{" "}
              </h3>
              <p className="text-sm text-gray-500">
                Open : 09:00 AM - 12:30 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton17 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://images.jdmagicbox.com/comp/goa/x7/0832px832.x832.2203280
21017.e4x7/catalogue/braganza-superstore-carmona-goa-grocery-stores-d
tv2c6l5b3.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                VAZ GROUP OF VAz SUPERSTORE{" "}
              </h3>

              <p className="text-lg font semibold">
                shop no.S9 varca sports club
              </p>
              <p className="text-sm text-gray-500">
                Open : 07:00 AM - 09:30 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton18 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://content.jdmagicbox.com/comp/goa/39/0832p832std517639/cat
alogue/kamaxi-enterprises-goa-pyg1vj4tjy-250.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">KAMAXI SUPERSTORE</h3>
              <p className="text-lg font semibold">
                Mira apartment near abram masjid
              </p>
              <p className="text-sm text-gray-500">
                Open : 09:00 AM - 10:30 PM
              </p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton19 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://images.jdmagicbox.com/comp/goa/b3/0832px832.x832.1905170
64135.u5b3/catalogue/shree-rajaram-marketing-goa-1tnazibwzo-250.jpg"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />
              <h3 className="text-lg font-semibold">
                SHREE RAJARAM SUPERMARKET{" "}
              </h3>
              <p className="text-sm text-gray-500">Open : 07:00 AM - 10:30PM</p>

              <div class="flex space-x-1" role="group">
                <div class="container mx-auto ">
                  <CallButton20 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center text-6xl border-2
border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <div className="text-center mt-4 mr-3">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPJupGOD3Ncct9wzK41b3D0
exBRx6rLF_3vRTO3=s680-w680-h510"
                class="h-auto max-w-full rounded-lg mx-4 my-4 "
              />

              <h3 className="text-lg font-semibold">ALL IN ONE MINI MART</h3>
              <p className="text-sm text-gray-500">
                Open : 08:30 AM - 09:30 PM
              </p>

              <div class="flex space-x-1 mb-12 mt-1" role="group">
                <div class="container mx-auto ">
                  <CallButton21 />
                </div>
                <div class="container mx-auto ">
                  <DirectionsButton />
                </div>
                <div class="container mx-auto ">
                  <ShareButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2
bg-white border border-gray-200 rounded-full bottom-4 left-1/2
dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
          <a
            href="https://q9hjw1.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-home"
            type="button"
            class="inline-flex flex-col items-center justify-center
px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="home"
            >
              <path
                fill="#200E32"
                d="M6.64373233,18.7821107 L6.64373233,15.7152449
C6.64371685,14.9380902 7.27567036,14.3067075 8.05843544,14.3018198
L10.9326107,14.3018198 C11.7188748,14.3018198 12.3562677,14.9346318
12.3562677,15.7152449 L12.3562677,15.7152449 L12.3562677,18.7732212
C12.3562498,19.4472781 12.9040221,19.995083 13.5829406,20
L15.5438266,20 C16.4596364,20.0023291 17.3387522,19.6427941
17.9871692,19.0007051 C18.6355861,18.3586161 19,17.4867541
19,16.5775231 L19,7.86584638 C19,7.13138763 18.6720694,6.43471253
18.1046183,5.96350064 L11.4429783,0.674268354
C10.2785132,-0.250877524 8.61537279,-0.22099178
7.48539114,0.745384082 C7.48539114,0.745384082 0.967012253,5.96350064
0.967012253,5.96350064 C0.37274068,6.42082162 0.0175522924,7.11956262
0,7.86584638 L0,16.5686336 C0,18.463707 1.54738155,20 3.45617342,20
L5.37229029,20 C5.69917279,20.0023364 6.01348703,19.8750734
6.24547302,19.6464237 C6.477459,19.417774 6.60792577,19.1066525
6.60791706,18.7821107 L6.64373233,18.7821107 Z"
                transform="translate(2.5 2)"
              ></path>
            </svg>

            <span class="sr-only">Home</span>
          </a>
          <div
            id="tooltip-home"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2
text-sm font-medium text-white transition-opacity duration-300
bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <a
            href="https://z6g6jf.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-wallet"
            type="button"
            class="inline-flex flex-col items-center justify-center

px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="bag"
            >
              <path
                fill="#200E32"
                d="M6.4229,0.7125 C8.0229,-0.2375 10.0229,-0.2375
11.6229,0.7125 C13.2229,1.6625 14.1629,3.4125 14.0929,5.2625
L14.0929,5.2625 L14.0929,5.4925 C15.3529,5.4925 16.6829,6.3725
17.1429,8.5125 L17.1429,8.5125 L17.9129,14.5025 C18.4839,18.4125
16.2129,20.0025 13.1629,20.0025 L13.1629,20.0025 L4.8729,20.0025
C1.8139,20.0025 -0.5271,18.9025 0.1029,14.5025 L0.1029,14.5025
L0.8829,8.5125 C1.0029,7.6225 1.4329,6.7925 2.1029,6.1825
C2.6139,5.7335 3.2729,5.4925 3.9529,5.4925 L3.9529,5.4925
L3.9529,5.2625 C3.8729,3.4125 4.8239,1.6625 6.4229,0.7125 Z

M11.8929,8.7125 C11.4039,8.7125 11.0029,9.1025 11.0029,9.5925
C11.0029,10.0725 11.4039,10.4725 11.8929,10.4725 C12.1229,10.4725
12.3529,10.3825 12.5129,10.2125 C12.6829,10.0525 12.7729,9.8225
12.7729,9.5925 C12.7729,9.1025 12.3729,8.7125 11.8929,8.7125 Z
M6.0929,8.7125 C5.6029,8.7125 5.2029,9.1025 5.2029,9.5925
C5.2029,10.0725 5.6029,10.4725 6.0929,10.4725 C6.5829,10.4725
6.9729,10.0725 6.9729,9.5925 C6.9729,9.1025 6.5829,8.7125
6.0929,8.7125 Z M9.0029,1.7425 C7.0529,1.7425 5.4729,3.3225
5.4729,5.2625 L5.4729,5.2625 L5.4729,5.4835 L12.5429,5.4835
L12.5429,5.2625 C12.5429,3.3225 10.9629,1.7425 9.0029,1.7425 Z"
                transform="translate(3 2)"
              ></path>
            </svg>

            <span class="sr-only">Wallet</span>
          </a>
          <div
            id="tooltip-wallet"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2
text-sm font-medium text-white transition-opacity duration-300
bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Order
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <a
            href="https://rivuh9.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-settings"
            type="button"
            class="inline-flex flex-col items-center justify-center

px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              id="user"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477
2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489
7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489
7.489 0 0 1-6-3Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Settings</span>
          </a>
          <div
            id="tooltip-settings"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2
text-sm font-medium text-white transition-opacity duration-300
bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <a
            href="https://dhjvkh.csb.app/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-target="tooltip-profile"
            type="button"
            class="inline-flex flex-col items-center justify-center
px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="settings"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M19.43

12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42
.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49
1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25
0-.46.18-.49.42l-.38
2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2
3.46c-.13.22-.07.49.12.64l2.11
1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11
1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4
1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0
.46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0
.61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93
0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5
3.5z"
              ></path>
            </svg>
            <span class="sr-only">Profile</span>
          </a>
          <div
            id="tooltip-profile"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2
text-sm font-medium text-white transition-opacity duration-300
bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
}
