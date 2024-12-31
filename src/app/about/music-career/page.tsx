import Footer from "@/components/shared/footer";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import Image from "next/image";

// Winter 2012
import OldPhoto from "../../../assets/music_timeline/old_photo.jpg";
import FirstUniform from "../../../assets/music_timeline/first_wgi_uniform.jpg";
import FullMiddleWGIEnsemble from "../../../assets/music_timeline/full_middleschool_ensemble.jpg";

// Fall 2013
import ChoctawPit from "../../../assets/music_timeline/choctaw_pit.jpg";
import ChoctawPitRehearshal from "../../../assets/music_timeline/choctaw_high_school.jpg";

// Fall 2014
import UrbanRoots from "../../../assets/music_timeline/urban_roots.jpg";
import FullUrbanEnsemble from "../../../assets/music_timeline/full_urban_ensemble.png";

// Winter 2015
import OUEnsemble from "../../../assets/music_timeline/ou_full_ensemble.jpg";
import Chillen from "../../../assets/music_timeline/chillen.png";
import Displaced from "../../../assets/music_timeline/displaced.jpg";
import DisplacedGroup from "../../../assets/music_timeline/displaced_group.jpg";
import FullDisplacedEnsemble from "../../../assets/music_timeline/full_displaced_ensemble.jpg";
import ShelbyDisplaced from "../../../assets/music_timeline/shelby_displaced.png";

// Summer 2016
import MandarinsGang from "../../../assets/music_timeline/mandarin_gang.jpg";
import HousingSiteBoys from "../../../assets/music_timeline/housing_site_Boys.jpg";
import MandarinsOutside from "../../../assets/music_timeline/mandarins_outside.jpg";
import MandarinsUtah from "../../../assets/music_timeline/mandarins_utah.jpg";
import Mandarins from "../../../assets/music_timeline/mandarins.jpg";
import MandarinsWithSean from "../../../assets/music_timeline/mandarins_with_sean.jpg";

// Spring 2016
import OUCenter from "../../../assets/music_timeline/ou_indoor_center.jpeg";
import RIPSixteen from "../../../assets/music_timeline/rip_2016.jpeg";

// Fall 2017 (Teaching)
import SouthmoorePit from "../../../assets/music_timeline/southmoore_2016.jpg";
import SouthmooreStaffSixteen from "../../../assets/music_timeline/southmoore_staff_16.jpg";
import Balance from "../../../assets/music_timeline/southmoore_balance.jpg";
import PitCircle from "../../../assets/music_timeline/pit_circle.jpg";

// Spring 2017
import GatewayPit from "../../../assets/music_timeline/gateway_pit.png";
import GatewayFull from "../../../assets/music_timeline/gateway_full_ensemble.png";
import Gateway from "../../../assets/music_timeline/gateway.jpg";
import MandarinsGateway from "../../../assets/music_timeline/mandarins_gateway.jpeg";

// Summer 2017
import XMENPlaying from "../../../assets/music_timeline/xmen_playing_17.jpg";
import XMENSmile from "../../../assets/music_timeline/xmen_smile.jpg";
import XMENWife from "../../../assets/music_timeline/xmen_wife.jpg";
import XMENDegenerates from "../../../assets/music_timeline/xmen_degenerates.png";
import XMENHang from "../../../assets/music_timeline/xmen_hang.jpg";
import XMENHomies from "../../../assets/music_timeline/xmen_homies.jpg";
import XMENSeventeen from "../../../assets/music_timeline/xmen_17.jpg";
import XMENSeventeenPlaying from "../../../assets/music_timeline/xmen_17_playing.jpg";
import SeatPartner from "../../../assets/music_timeline/seat_partner.jpg";
import CrossmenSeventeen from "../../../assets/music_timeline/crossmen_2017.jpg";
import CrossmenSeventeenStaff from "../../../assets/music_timeline/crossmen_2017_staff.jpg";
import CrownAndCrossmen from "../../../assets/music_timeline/crown_and_crossmen.jpg";

// Fall 2017
import SouthmooreSeventeen from "../../../assets/music_timeline/southmoore_2017.jpeg";
import SouthmooreFull from "../../../assets/music_timeline/southmoore_2017_full.jpeg";

// Summer 2018
import XMENEighteenFinals from "../../../assets/music_timeline/xmen_18_finals.jpg";
import XMENBoat from "../../../assets/music_timeline/xmen_boat_18.jpg";
import XMENEighteen from "../../../assets/music_timeline/xmen_18.jpg";
import Gong from "../../../assets/music_timeline/gong.png";
import HairCutting from "../../../assets/music_timeline/hair_cutting.jpg";

// Fall 2018
import OU from "../../../assets/music_timeline/ou.jpg";
import OUDrumline from "../../../assets/music_timeline/ou_drumline.png";
import OUFriends from "../../../assets/music_timeline/ou_friends.jpg";
import ShelbySnare from "../../../assets/music_timeline/shelby_snare.png";
import SouthmooreEighteen from "../../../assets/music_timeline/southmoore_2018.jpg";

// Spring 2019
import MonarchPlaying from "../../../assets/music_timeline/monarch_playing.jpg";
import MonarchWoods from "../../../assets/music_timeline/monarch_woods.jpg";
import MonarchFront from "../../../assets/music_timeline/monarch_front.jpeg";

// Summer 2019
import CavaliersNineteen from "../../../assets/music_timeline/cavaliers_19.jpg";
import CavShelby from "../../../assets/music_timeline/cav_shelby.jpg";
import CavBalance from "../../../assets/music_timeline/balance.jpg";
import CavCrotale from "../../../assets/music_timeline/cav_crotale.jpg";
import CavsNineteen from "../../../assets/music_timeline/cavs_19.jpg";

const TechnicalCareerPage: React.FC = () => {
  const data = [
    {
      title: "2010",
      content: (
        <div>
          <h2 className="text-xl font-semibold">Simple Beginnings</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I started learning percussion in 2010 as a middle schooler at
            Choctaw Middle School. We practiced basic rhythms on practice pads
            and drummed &quot;8&apos;s&quot; for hours on our beginner Vic Firth
            percussion kits. Out of all my classmates, I was the only one who
            wanted to try bells and other keyboard percussion. I didn&apos;t
            even know four mallets existed then—just that I was excited to
            learn! Our teacher was a brass player, but she did a great job of
            teaching us the basics.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src={OldPhoto}
              alt="Middle School Drums"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Winter 2012",
      content: (
        <div>
          <h2 className="text-xl font-semibold">First WGI Experience</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In my last year of middle school, we were invited to join the high
            school in their first WGI percussion competition. I was introduced
            to advanced playing for the first time—drumline members tackling
            difficult music and keyboard players working on four mallet
            literature. Even though I was shy and only used two mallets for a
            repetitive part, it hooked me into the world of competitive
            percussion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={OldPhoto}
              alt="First WGI"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={FirstUniform}
              alt="WGI Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={FullMiddleWGIEnsemble}
              alt="Full Middle School Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2013",
      content: (
        <div>
          <h2 className="text-xl font-semibold">High School Front Ensemble</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Entering high school, I joined the front ensemble playing marimba
            with two players on one board and only worked on major scales using
            two mallets. It was simple but a lot of fun. I noticed vibraphone
            parts seemed more challenging (and cooler) than our marimba parts,
            so I set my sights on vibraphone.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={ChoctawPit}
              alt="Middle School Drums"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={ChoctawPitRehearshal}
              alt="Major Scales"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Spring & Fall 2014",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Joining my first Independent A Class WGI Percussion Ensemble
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I finally got to play vibraphone in my high school group and even
            had a solo that fall! My first independent percussion group also
            started in Winter 2014— a young group out of Norman competing in WGI
            Independent A (about 3-4 years old at that time). I joined
            mid-season to fill a vibraphone hole, which opened my eyes to new
            levels of percussion and introduced me to great teachers like Jacob
            Carter, Tyler Simmons, and Beth Barnes. Our show was called
            &apos;Urban Roots&apos;, where we played a mix of ho-down country
            music and the tried and true &apos;Pure Imagination&apos; from Willy
            Wonka.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={UrbanRoots}
              alt="Vibraphone Solo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={FullUrbanEnsemble}
              alt="Independent A Group"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Spring & Fall 2015",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            OU Indoor, Tenor Drums, and Resistance Indoor 2015
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The University of Oklahoma launched an indoor percussion group,
            aiming for Open Class. I auditioned on tenors and made the line.
            Around the same time, in Fall 2015, I had to join my high school
            drumline and play tenors instead of keyboard. I grew to love it,
            practicing daily with my buddy Lee. Unfortunately, the OU group
            folded before our first show, so I ended up returning to my Norman
            group (Resistance Indoor Percussion) on vibes. Our show was called
            &apos;Displaced&apos; and was a blast to be a part of. We played on
            the back of the field, which was challenging due to the nature of
            the listening responsibilities. After this season, I decided to step
            away from my high school band program and focus on academics and
            other interests.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={OUEnsemble}
              alt="Tenor Drums"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={Chillen}
              alt="OU Indoor"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={Displaced}
              alt="Displaced"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={DisplacedGroup}
              alt="Displaced Group"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={FullDisplacedEnsemble}
              alt="Full Displaced Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={ShelbyDisplaced}
              alt="Shelby Displaced"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2016",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Mandarins Drum & Bugle Corps
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I auditioned for the Mandarins Drum and Bugle Corps and got cut,
            meaning I didn&apos;t get a spot. A few weeks later I got a call
            asking if I could fill a spot in their vibraphone line. This was a
            humbling experience and I was honored to be given a second chance.
            As quickly as I could, I hopped on a flight to join them for their
            spring training in Sacremento California. It was my first summer
            traveling and performing around the country. I learned from Shelby
            Shelton, Patrick Manning, Sean Womack, and Jimmy Madonia—players
            from all over the U.S. This was a huge step beyond the
            &quot;Oklahoma bubble.&quot; I learned a lot about myself and my
            playing that summer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={MandarinsGang}
              alt="Mandarins Gang"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={HousingSiteBoys}
              alt="Housing Site Boys"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={MandarinsOutside}
              alt="Mandarins Outside"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={MandarinsUtah}
              alt="Mandarins Utah"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={Mandarins}
              alt="Mandarins"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={MandarinsWithSean}
              alt="Mandarins with Sean"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Spring 2016",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Resistance Indoor Percussion 2016
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In Winter of 2016, OU tried to form another group, naming me center
            marimba and section leader. Sadly, it fell through again, so I ended
            up marching another season with my old group (Resistance Indoor
            Percussion), which moved up to Open Class. The show was hard, but
            the people and the techs made it an incredible learning experience.
            Resistance truly became family for me.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={OUCenter}
              alt="Open Class 2016"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={RIPSixteen}
              alt="Center Marimba"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2016",
      content: (
        <div>
          <h2 className="text-xl font-semibold">First Steps into Education</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I started teaching my first front ensemble at Southmoore High School
            and occasionally at Carl Albert. Over the years, Southmoore has
            grown into a fantastic ensemble, with some students going on to
            perform in major world class groups. It’s been a joy watching them
            grow.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SouthmoorePit}
              alt="Southmoore HS Front Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={SouthmooreStaffSixteen}
              alt="Teaching Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={Balance}
              alt="Balance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={PitCircle}
              alt="Pit Circle"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Spring 2017",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Gateway Indoor - My First World Class WGI Ensemble
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I joined Gateway Indoor, a world class WGI percussion group, on
            vibraphone. This was a leap into a professional mindset—higher
            standards, more efficient learning, and thicker skin. I learned a
            lot about personal growth from instructors like Peter Hilborn and
            Marcus Neudigate.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Gateway}
              alt="Gateway Indoor"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={GatewayPit}
              alt="Professional Mindset"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={GatewayFull}
              alt="Gateway Full Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={MandarinsGateway}
              alt="Mandarins Gateway"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2017",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Crossmen Drum and Bugle Corps
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Making The Crossmen was big deal to me. I still remember getting to
            the end of audtions and shaking Mike Bishops hand. I will never
            forget the hard work I put into preparation for this. Working with
            instructors like Dan Schmidt, Mike Bishop, Dr. Lane Summerline,
            Andrew Markworth, and Lee Allman shaped a lot of my current teaching
            style and elevated my technical approach. I also met my wife,
            Haruka, during this time. She was a medical intern that was on tour
            with us. She was a previous member and represented Japanese Drum
            Corps. We got married in 2020 and now have a son, Arthur.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={XMENPlaying}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENDegenerates}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENHang}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENHomies}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENSeventeen}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENSeventeenPlaying}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENSmile}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENWife}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={SeatPartner}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CrossmenSeventeen}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CrossmenSeventeenStaff}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CrownAndCrossmen}
              alt="Crossmen Drum and Bugle Corps"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2017",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            2nd Year of Teaching at Southmoore HS
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            My second year teaching at Southmoore High School was even more
            rewarding than the first. I had a lot to learn from the previous
            season and it was time to grow as an educator. The other pit techs
            moved on to different pastures and I was left to my own devices.
            This experience solidified my passion for teaching and mentoring
            young musicians.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SouthmooreSeventeen}
              alt="Southmoore HS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={SouthmooreFull}
              alt="Southmoore HS Two"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2018",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Crossmen Drum and Bugle Corps - Season 2
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This was my second season at the crossmen where I was the inside
            marimba to my good friend DJ and his brother. I became one of the
            corps barbers and got a lot of experience cutting hair on top of
            playing, terrifying that people trust me, I know. I was honored to
            learn from the incredible team of instructors: Will Buetow, Eric
            Pujari, Mike Bishop, Dr. Lane Summerline, Andrew Markworth, and Lee
            Allman.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={XMENEighteenFinals}
              alt="Crossmen 2018"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENEighteen}
              alt="Crossmen"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={Gong}
              alt="Crossmen"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={HairCutting}
              alt="Crossmen"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={XMENBoat}
              alt="Crossmen"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2018",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            OU Drumline on Snare & 3rd Year of Teaching at Southmoore HS
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            During my sophmore year at the University of Oklahoma, I made the OU
            Drumline and played Snare. This might have been the most fun I’ve
            had in marching band: we played tough beats, used traditional grip,
            and won most of our games! Going into my third year of teaching with
            Southmoore, I was able to apply a lot of what I learned from the
            Crossmen and OU to the students. I was able to push them harder and
            get them to a higher level of performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={OU}
              alt="OU Snare Drum"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={OUDrumline}
              alt="OU Drumline"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={OUFriends}
              alt="OU Friends"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={ShelbySnare}
              alt="Shelby Snare"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={SouthmooreEighteen}
              alt="Southmoore HS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Winter 2018",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Southmoore Indoor Percussion 2018
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This was my third year teaching at Southmoore High School and my
            first year as the head percussion instructor. I was able to take the
            students to a higher level of performance and push them to their
            limits. We placed 2nd at the state competition and I was very proud
            of the students.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={PitCircle}
              alt="Monarch Percussion"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={PitCircle}
              alt="Monarch Percussion"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Spring 2019",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Monarch Percussion - Making World Class WGI Finals
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I joined Monarch Percussion, a world class WGI finalist group,
            splitting center-marimba as a rookie. This season introduced new
            styles of playing and demanded intense practice (up to 9 hours a
            day!). I had the privilege of learning from Andy Filipiak, Rick
            Drewry, Tim Bartee II, and Chandler Long.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={MonarchFront}
              alt="Monarch Marimba"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={MonarchWoods}
              alt="Intense Rehearsals"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={MonarchPlaying}
              alt="Monarch Full Ensemble"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2019",
      content: (
        <div>
          <h2 className="text-xl font-semibold">Aging Out at Cavaliers</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I aged out at the Cavaliers as the xylophone player. This was a
            relatively relaxed season compared to others, but I still learned
            from an incredible team of instructors: Alan Miller, Rick Drewry,
            Rob Pastor, Erick Eckstrom, Andrew Lynge, and Michael McIntosh.
            Sadly, the founder of the corps passed that year, and I was honored
            to attend his funeral. I thought this might be the end of my musical
            journey, but it wasn’t!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={CavaliersNineteen}
              alt="Cavaliers 2019"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CavShelby}
              alt="Cavaliers Performance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CavBalance}
              alt="Cavaliers Performance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CavCrotale}
              alt="Cavaliers Performance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src={CavsNineteen}
              alt="Cavaliers Performance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2019",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            4th Year of Teaching at Southmoore HS
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            My fourth year of teaching at Southmoore was a big one. I was able
            to take what I learned from the Cavaliers and apply it to the
            students. I was able to push them harder and get them to a higher
            level of performance. I also started teaching at Choctaw HS and was
            able to bring some of the same techniques to their program.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/music/choctaw-2019.webp"
              alt="Choctaw HS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/music/choctaw-2019-two.webp"
              alt="Choctaw HS Two"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Now",
      content: (
        <div>
          <h2 className="text-xl font-semibold">
            Continuing to Teach & Inspire
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I’ve continued teaching ever since: front ensemble tech at Crossmen
            Drum and Bugle Corps in 2023 and 2025, front tech every summer at
            Zephryus Drum and Bugle Corps since 2023, and front ensemble
            director for Oklahoma Baptist University since 2022.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I’ve also been a front tech for the now-world-class WGI percussion
            group I marched with, starting in 2021. With my first kid now in the
            picture, I’ve shifted from full high school seasons to doing clinics
            and master classes at schools like Choctaw, Union, Mustang, Edmond
            Memorial, and Catoosa. I’m thankful that my journey in music
            continues on!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/music/masterclass.webp"
              alt="Masterclass Teaching"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/music/family-lifestyle.webp"
              alt="Family Lifestyle"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <main className="mx-auto">
        <Timeline
          data={data}
          title="My Musical Journey"
          subtitle="From practice pads to world-class performances, this is my story as a musician, teacher, and lifelong learner."
        />
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalCareerPage;
