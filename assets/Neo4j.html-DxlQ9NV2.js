import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as s}from"./app-CN-Tp3xY.js";const l={},a=s(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><p>https://neo4j.com/download-center/#community</p><h1 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h1><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE (TheMatrix:Movie {title:&#39;The Matrix&#39;, released:1999, tagline:&#39;Welcome to the Real World&#39;})
      CREATE (Keanu:Person {name:&#39;Keanu Reeves&#39;, born:1964})
      CREATE (Carrie:Person {name:&#39;Carrie-Anne Moss&#39;, born:1967})
      CREATE (Laurence:Person {name:&#39;Laurence Fishburne&#39;, born:1961})
      CREATE (Hugo:Person {name:&#39;Hugo Weaving&#39;, born:1960})
      CREATE (LillyW:Person {name:&#39;Lilly Wachowski&#39;, born:1967})
      CREATE (LanaW:Person {name:&#39;Lana Wachowski&#39;, born:1965})
      CREATE (JoelS:Person {name:&#39;Joel Silver&#39;, born:1952})
      CREATE
      (Keanu)-[:ACTED_IN {roles:[&#39;Neo&#39;]}]-&gt;(TheMatrix),
      (Carrie)-[:ACTED_IN {roles:[&#39;Trinity&#39;]}]-&gt;(TheMatrix),
      (Laurence)-[:ACTED_IN {roles:[&#39;Morpheus&#39;]}]-&gt;(TheMatrix),
      (Hugo)-[:ACTED_IN {roles:[&#39;Agent Smith&#39;]}]-&gt;(TheMatrix),
      (LillyW)-[:DIRECTED]-&gt;(TheMatrix),
      (LanaW)-[:DIRECTED]-&gt;(TheMatrix),
      (JoelS)-[:PRODUCED]-&gt;(TheMatrix)

      CREATE (Emil:Person {name:&quot;Emil Eifrem&quot;, born:1978})
      CREATE (Emil)-[:ACTED_IN {roles:[&quot;Emil&quot;]}]-&gt;(TheMatrix)

      CREATE (TheMatrixReloaded:Movie {title:&#39;The Matrix Reloaded&#39;, released:2003, tagline:&#39;Free your mind&#39;})
      CREATE
      (Keanu)-[:ACTED_IN {roles:[&#39;Neo&#39;]}]-&gt;(TheMatrixReloaded),
      (Carrie)-[:ACTED_IN {roles:[&#39;Trinity&#39;]}]-&gt;(TheMatrixReloaded),
      (Laurence)-[:ACTED_IN {roles:[&#39;Morpheus&#39;]}]-&gt;(TheMatrixReloaded),
      (Hugo)-[:ACTED_IN {roles:[&#39;Agent Smith&#39;]}]-&gt;(TheMatrixReloaded),
      (LillyW)-[:DIRECTED]-&gt;(TheMatrixReloaded),
      (LanaW)-[:DIRECTED]-&gt;(TheMatrixReloaded),
      (JoelS)-[:PRODUCED]-&gt;(TheMatrixReloaded)

      CREATE (TheMatrixRevolutions:Movie {title:&#39;The Matrix Revolutions&#39;, released:2003, tagline:&#39;Everything that has a beginning has an end&#39;})
      CREATE
      (Keanu)-[:ACTED_IN {roles:[&#39;Neo&#39;]}]-&gt;(TheMatrixRevolutions),
      (Carrie)-[:ACTED_IN {roles:[&#39;Trinity&#39;]}]-&gt;(TheMatrixRevolutions),
      (Laurence)-[:ACTED_IN {roles:[&#39;Morpheus&#39;]}]-&gt;(TheMatrixRevolutions),
      (Hugo)-[:ACTED_IN {roles:[&#39;Agent Smith&#39;]}]-&gt;(TheMatrixRevolutions),
      (LillyW)-[:DIRECTED]-&gt;(TheMatrixRevolutions),
      (LanaW)-[:DIRECTED]-&gt;(TheMatrixRevolutions),
      (JoelS)-[:PRODUCED]-&gt;(TheMatrixRevolutions)

      CREATE (TheDevilsAdvocate:Movie {title:&quot;The Devil&#39;s Advocate&quot;, released:1997, tagline:&#39;Evil has its winning ways&#39;})
      CREATE (Charlize:Person {name:&#39;Charlize Theron&#39;, born:1975})
      CREATE (Al:Person {name:&#39;Al Pacino&#39;, born:1940})
      CREATE (Taylor:Person {name:&#39;Taylor Hackford&#39;, born:1944})
      CREATE
      (Keanu)-[:ACTED_IN {roles:[&#39;Kevin Lomax&#39;]}]-&gt;(TheDevilsAdvocate),
      (Charlize)-[:ACTED_IN {roles:[&#39;Mary Ann Lomax&#39;]}]-&gt;(TheDevilsAdvocate),
      (Al)-[:ACTED_IN {roles:[&#39;John Milton&#39;]}]-&gt;(TheDevilsAdvocate),
      (Taylor)-[:DIRECTED]-&gt;(TheDevilsAdvocate)

      CREATE (AFewGoodMen:Movie {title:&quot;A Few Good Men&quot;, released:1992, tagline:&quot;In the heart of the nation&#39;s capital, in a courthouse of the U.S. government, one man will stop at nothing to keep his honor, and one will stop at nothing to find the truth.&quot;})
      CREATE (TomC:Person {name:&#39;Tom Cruise&#39;, born:1962})
      CREATE (JackN:Person {name:&#39;Jack Nicholson&#39;, born:1937})
      CREATE (DemiM:Person {name:&#39;Demi Moore&#39;, born:1962})
      CREATE (KevinB:Person {name:&#39;Kevin Bacon&#39;, born:1958})
      CREATE (KieferS:Person {name:&#39;Kiefer Sutherland&#39;, born:1966})
      CREATE (NoahW:Person {name:&#39;Noah Wyle&#39;, born:1971})
      CREATE (CubaG:Person {name:&#39;Cuba Gooding Jr.&#39;, born:1968})
      CREATE (KevinP:Person {name:&#39;Kevin Pollak&#39;, born:1957})
      CREATE (JTW:Person {name:&#39;J.T. Walsh&#39;, born:1943})
      CREATE (JamesM:Person {name:&#39;James Marshall&#39;, born:1967})
      CREATE (ChristopherG:Person {name:&#39;Christopher Guest&#39;, born:1948})
      CREATE (RobR:Person {name:&#39;Rob Reiner&#39;, born:1947})
      CREATE (AaronS:Person {name:&#39;Aaron Sorkin&#39;, born:1961})
      CREATE
      (TomC)-[:ACTED_IN {roles:[&#39;Lt. Daniel Kaffee&#39;]}]-&gt;(AFewGoodMen),
      (JackN)-[:ACTED_IN {roles:[&#39;Col. Nathan R. Jessup&#39;]}]-&gt;(AFewGoodMen),
      (DemiM)-[:ACTED_IN {roles:[&#39;Lt. Cdr. JoAnne Galloway&#39;]}]-&gt;(AFewGoodMen),
      (KevinB)-[:ACTED_IN {roles:[&#39;Capt. Jack Ross&#39;]}]-&gt;(AFewGoodMen),
      (KieferS)-[:ACTED_IN {roles:[&#39;Lt. Jonathan Kendrick&#39;]}]-&gt;(AFewGoodMen),
      (NoahW)-[:ACTED_IN {roles:[&#39;Cpl. Jeffrey Barnes&#39;]}]-&gt;(AFewGoodMen),
      (CubaG)-[:ACTED_IN {roles:[&#39;Cpl. Carl Hammaker&#39;]}]-&gt;(AFewGoodMen),
      (KevinP)-[:ACTED_IN {roles:[&#39;Lt. Sam Weinberg&#39;]}]-&gt;(AFewGoodMen),
      (JTW)-[:ACTED_IN {roles:[&#39;Lt. Col. Matthew Andrew Markinson&#39;]}]-&gt;(AFewGoodMen),
      (JamesM)-[:ACTED_IN {roles:[&#39;Pfc. Louden Downey&#39;]}]-&gt;(AFewGoodMen),
      (ChristopherG)-[:ACTED_IN {roles:[&#39;Dr. Stone&#39;]}]-&gt;(AFewGoodMen),
      (AaronS)-[:ACTED_IN {roles:[&#39;Man in Bar&#39;]}]-&gt;(AFewGoodMen),
      (RobR)-[:DIRECTED]-&gt;(AFewGoodMen),
      (AaronS)-[:WROTE]-&gt;(AFewGoodMen)

      CREATE (TopGun:Movie {title:&quot;Top Gun&quot;, released:1986, tagline:&#39;I feel the need, the need for speed.&#39;})
      CREATE (KellyM:Person {name:&#39;Kelly McGillis&#39;, born:1957})
      CREATE (ValK:Person {name:&#39;Val Kilmer&#39;, born:1959})
      CREATE (AnthonyE:Person {name:&#39;Anthony Edwards&#39;, born:1962})
      CREATE (TomS:Person {name:&#39;Tom Skerritt&#39;, born:1933})
      CREATE (MegR:Person {name:&#39;Meg Ryan&#39;, born:1961})
      CREATE (TonyS:Person {name:&#39;Tony Scott&#39;, born:1944})
      CREATE (JimC:Person {name:&#39;Jim Cash&#39;, born:1941})
      CREATE
      (TomC)-[:ACTED_IN {roles:[&#39;Maverick&#39;]}]-&gt;(TopGun),
      (KellyM)-[:ACTED_IN {roles:[&#39;Charlie&#39;]}]-&gt;(TopGun),
      (ValK)-[:ACTED_IN {roles:[&#39;Iceman&#39;]}]-&gt;(TopGun),
      (AnthonyE)-[:ACTED_IN {roles:[&#39;Goose&#39;]}]-&gt;(TopGun),
      (TomS)-[:ACTED_IN {roles:[&#39;Viper&#39;]}]-&gt;(TopGun),
      (MegR)-[:ACTED_IN {roles:[&#39;Carole&#39;]}]-&gt;(TopGun),
      (TonyS)-[:DIRECTED]-&gt;(TopGun),
      (JimC)-[:WROTE]-&gt;(TopGun)

      CREATE (JerryMaguire:Movie {title:&#39;Jerry Maguire&#39;, released:2000, tagline:&#39;The rest of his life begins now.&#39;})
      CREATE (ReneeZ:Person {name:&#39;Renee Zellweger&#39;, born:1969})
      CREATE (KellyP:Person {name:&#39;Kelly Preston&#39;, born:1962})
      CREATE (JerryO:Person {name:&quot;Jerry O&#39;Connell&quot;, born:1974})
      CREATE (JayM:Person {name:&#39;Jay Mohr&#39;, born:1970})
      CREATE (BonnieH:Person {name:&#39;Bonnie Hunt&#39;, born:1961})
      CREATE (ReginaK:Person {name:&#39;Regina King&#39;, born:1971})
      CREATE (JonathanL:Person {name:&#39;Jonathan Lipnicki&#39;, born:1996})
      CREATE (CameronC:Person {name:&#39;Cameron Crowe&#39;, born:1957})
      CREATE
      (TomC)-[:ACTED_IN {roles:[&#39;Jerry Maguire&#39;]}]-&gt;(JerryMaguire),
      (CubaG)-[:ACTED_IN {roles:[&#39;Rod Tidwell&#39;]}]-&gt;(JerryMaguire),
      (ReneeZ)-[:ACTED_IN {roles:[&#39;Dorothy Boyd&#39;]}]-&gt;(JerryMaguire),
      (KellyP)-[:ACTED_IN {roles:[&#39;Avery Bishop&#39;]}]-&gt;(JerryMaguire),
      (JerryO)-[:ACTED_IN {roles:[&#39;Frank Cushman&#39;]}]-&gt;(JerryMaguire),
      (JayM)-[:ACTED_IN {roles:[&#39;Bob Sugar&#39;]}]-&gt;(JerryMaguire),
      (BonnieH)-[:ACTED_IN {roles:[&#39;Laurel Boyd&#39;]}]-&gt;(JerryMaguire),
      (ReginaK)-[:ACTED_IN {roles:[&#39;Marcee Tidwell&#39;]}]-&gt;(JerryMaguire),
      (JonathanL)-[:ACTED_IN {roles:[&#39;Ray Boyd&#39;]}]-&gt;(JerryMaguire),
      (CameronC)-[:DIRECTED]-&gt;(JerryMaguire),
      (CameronC)-[:PRODUCED]-&gt;(JerryMaguire),
      (CameronC)-[:WROTE]-&gt;(JerryMaguire)

      CREATE (StandByMe:Movie {title:&quot;Stand By Me&quot;, released:1986, tagline:&quot;For some, it&#39;s the last real taste of innocence, and the first real taste of life. But for everyone, it&#39;s the time that memories are made of.&quot;})
      CREATE (RiverP:Person {name:&#39;River Phoenix&#39;, born:1970})
      CREATE (CoreyF:Person {name:&#39;Corey Feldman&#39;, born:1971})
      CREATE (WilW:Person {name:&#39;Wil Wheaton&#39;, born:1972})
      CREATE (JohnC:Person {name:&#39;John Cusack&#39;, born:1966})
      CREATE (MarshallB:Person {name:&#39;Marshall Bell&#39;, born:1942})
      CREATE
      (WilW)-[:ACTED_IN {roles:[&#39;Gordie Lachance&#39;]}]-&gt;(StandByMe),
      (RiverP)-[:ACTED_IN {roles:[&#39;Chris Chambers&#39;]}]-&gt;(StandByMe),
      (JerryO)-[:ACTED_IN {roles:[&#39;Vern Tessio&#39;]}]-&gt;(StandByMe),
      (CoreyF)-[:ACTED_IN {roles:[&#39;Teddy Duchamp&#39;]}]-&gt;(StandByMe),
      (JohnC)-[:ACTED_IN {roles:[&#39;Denny Lachance&#39;]}]-&gt;(StandByMe),
      (KieferS)-[:ACTED_IN {roles:[&#39;Ace Merrill&#39;]}]-&gt;(StandByMe),
      (MarshallB)-[:ACTED_IN {roles:[&#39;Mr. Lachance&#39;]}]-&gt;(StandByMe),
      (RobR)-[:DIRECTED]-&gt;(StandByMe)

      CREATE (AsGoodAsItGets:Movie {title:&#39;As Good as It Gets&#39;, released:1997, tagline:&#39;A comedy from the heart that goes for the throat.&#39;})
      CREATE (HelenH:Person {name:&#39;Helen Hunt&#39;, born:1963})
      CREATE (GregK:Person {name:&#39;Greg Kinnear&#39;, born:1963})
      CREATE (JamesB:Person {name:&#39;James L. Brooks&#39;, born:1940})
      CREATE
      (JackN)-[:ACTED_IN {roles:[&#39;Melvin Udall&#39;]}]-&gt;(AsGoodAsItGets),
      (HelenH)-[:ACTED_IN {roles:[&#39;Carol Connelly&#39;]}]-&gt;(AsGoodAsItGets),
      (GregK)-[:ACTED_IN {roles:[&#39;Simon Bishop&#39;]}]-&gt;(AsGoodAsItGets),
      (CubaG)-[:ACTED_IN {roles:[&#39;Frank Sachs&#39;]}]-&gt;(AsGoodAsItGets),
      (JamesB)-[:DIRECTED]-&gt;(AsGoodAsItGets)

      CREATE (WhatDreamsMayCome:Movie {title:&#39;What Dreams May Come&#39;, released:1998, tagline:&#39;After life there is more. The end is just the beginning.&#39;})
      CREATE (AnnabellaS:Person {name:&#39;Annabella Sciorra&#39;, born:1960})
      CREATE (MaxS:Person {name:&#39;Max von Sydow&#39;, born:1929})
      CREATE (WernerH:Person {name:&#39;Werner Herzog&#39;, born:1942})
      CREATE (Robin:Person {name:&#39;Robin Williams&#39;, born:1951})
      CREATE (VincentW:Person {name:&#39;Vincent Ward&#39;, born:1956})
      CREATE
      (Robin)-[:ACTED_IN {roles:[&#39;Chris Nielsen&#39;]}]-&gt;(WhatDreamsMayCome),
      (CubaG)-[:ACTED_IN {roles:[&#39;Albert Lewis&#39;]}]-&gt;(WhatDreamsMayCome),
      (AnnabellaS)-[:ACTED_IN {roles:[&#39;Annie Collins-Nielsen&#39;]}]-&gt;(WhatDreamsMayCome),
      (MaxS)-[:ACTED_IN {roles:[&#39;The Tracker&#39;]}]-&gt;(WhatDreamsMayCome),
      (WernerH)-[:ACTED_IN {roles:[&#39;The Face&#39;]}]-&gt;(WhatDreamsMayCome),
      (VincentW)-[:DIRECTED]-&gt;(WhatDreamsMayCome)

      CREATE (SnowFallingonCedars:Movie {title:&#39;Snow Falling on Cedars&#39;, released:1999, tagline:&#39;First loves last. Forever.&#39;})
      CREATE (EthanH:Person {name:&#39;Ethan Hawke&#39;, born:1970})
      CREATE (RickY:Person {name:&#39;Rick Yune&#39;, born:1971})
      CREATE (JamesC:Person {name:&#39;James Cromwell&#39;, born:1940})
      CREATE (ScottH:Person {name:&#39;Scott Hicks&#39;, born:1953})
      CREATE
      (EthanH)-[:ACTED_IN {roles:[&#39;Ishmael Chambers&#39;]}]-&gt;(SnowFallingonCedars),
      (RickY)-[:ACTED_IN {roles:[&#39;Kazuo Miyamoto&#39;]}]-&gt;(SnowFallingonCedars),
      (MaxS)-[:ACTED_IN {roles:[&#39;Nels Gudmundsson&#39;]}]-&gt;(SnowFallingonCedars),
      (JamesC)-[:ACTED_IN {roles:[&#39;Judge Fielding&#39;]}]-&gt;(SnowFallingonCedars),
      (ScottH)-[:DIRECTED]-&gt;(SnowFallingonCedars)

      CREATE (YouveGotMail:Movie {title:&quot;You&#39;ve Got Mail&quot;, released:1998, tagline:&#39;At odds in life... in love on-line.&#39;})
      CREATE (ParkerP:Person {name:&#39;Parker Posey&#39;, born:1968})
      CREATE (DaveC:Person {name:&#39;Dave Chappelle&#39;, born:1973})
      CREATE (SteveZ:Person {name:&#39;Steve Zahn&#39;, born:1967})
      CREATE (TomH:Person {name:&#39;Tom Hanks&#39;, born:1956})
      CREATE (NoraE:Person {name:&#39;Nora Ephron&#39;, born:1941})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Joe Fox&#39;]}]-&gt;(YouveGotMail),
      (MegR)-[:ACTED_IN {roles:[&#39;Kathleen Kelly&#39;]}]-&gt;(YouveGotMail),
      (GregK)-[:ACTED_IN {roles:[&#39;Frank Navasky&#39;]}]-&gt;(YouveGotMail),
      (ParkerP)-[:ACTED_IN {roles:[&#39;Patricia Eden&#39;]}]-&gt;(YouveGotMail),
      (DaveC)-[:ACTED_IN {roles:[&#39;Kevin Jackson&#39;]}]-&gt;(YouveGotMail),
      (SteveZ)-[:ACTED_IN {roles:[&#39;George Pappas&#39;]}]-&gt;(YouveGotMail),
      (NoraE)-[:DIRECTED]-&gt;(YouveGotMail)

      CREATE (SleeplessInSeattle:Movie {title:&#39;Sleepless in Seattle&#39;, released:1993, tagline:&#39;What if someone you never met, someone you never saw, someone you never knew was the only someone for you?&#39;})
      CREATE (RitaW:Person {name:&#39;Rita Wilson&#39;, born:1956})
      CREATE (BillPull:Person {name:&#39;Bill Pullman&#39;, born:1953})
      CREATE (VictorG:Person {name:&#39;Victor Garber&#39;, born:1949})
      CREATE (RosieO:Person {name:&quot;Rosie O&#39;Donnell&quot;, born:1962})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Sam Baldwin&#39;]}]-&gt;(SleeplessInSeattle),
      (MegR)-[:ACTED_IN {roles:[&#39;Annie Reed&#39;]}]-&gt;(SleeplessInSeattle),
      (RitaW)-[:ACTED_IN {roles:[&#39;Suzy&#39;]}]-&gt;(SleeplessInSeattle),
      (BillPull)-[:ACTED_IN {roles:[&#39;Walter&#39;]}]-&gt;(SleeplessInSeattle),
      (VictorG)-[:ACTED_IN {roles:[&#39;Greg&#39;]}]-&gt;(SleeplessInSeattle),
      (RosieO)-[:ACTED_IN {roles:[&#39;Becky&#39;]}]-&gt;(SleeplessInSeattle),
      (NoraE)-[:DIRECTED]-&gt;(SleeplessInSeattle)

      CREATE (JoeVersustheVolcano:Movie {title:&#39;Joe Versus the Volcano&#39;, released:1990, tagline:&#39;A story of love, lava and burning desire.&#39;})
      CREATE (JohnS:Person {name:&#39;John Patrick Stanley&#39;, born:1950})
      CREATE (Nathan:Person {name:&#39;Nathan Lane&#39;, born:1956})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Joe Banks&#39;]}]-&gt;(JoeVersustheVolcano),
      (MegR)-[:ACTED_IN {roles:[&#39;DeDe&#39;, &#39;Angelica Graynamore&#39;, &#39;Patricia Graynamore&#39;]}]-&gt;(JoeVersustheVolcano),
      (Nathan)-[:ACTED_IN {roles:[&#39;Baw&#39;]}]-&gt;(JoeVersustheVolcano),
      (JohnS)-[:DIRECTED]-&gt;(JoeVersustheVolcano)

      CREATE (WhenHarryMetSally:Movie {title:&#39;When Harry Met Sally&#39;, released:1998, tagline:&#39;Can two friends sleep together and still love each other in the morning?&#39;})
      CREATE (BillyC:Person {name:&#39;Billy Crystal&#39;, born:1948})
      CREATE (CarrieF:Person {name:&#39;Carrie Fisher&#39;, born:1956})
      CREATE (BrunoK:Person {name:&#39;Bruno Kirby&#39;, born:1949})
      CREATE
      (BillyC)-[:ACTED_IN {roles:[&#39;Harry Burns&#39;]}]-&gt;(WhenHarryMetSally),
      (MegR)-[:ACTED_IN {roles:[&#39;Sally Albright&#39;]}]-&gt;(WhenHarryMetSally),
      (CarrieF)-[:ACTED_IN {roles:[&#39;Marie&#39;]}]-&gt;(WhenHarryMetSally),
      (BrunoK)-[:ACTED_IN {roles:[&#39;Jess&#39;]}]-&gt;(WhenHarryMetSally),
      (RobR)-[:DIRECTED]-&gt;(WhenHarryMetSally),
      (RobR)-[:PRODUCED]-&gt;(WhenHarryMetSally),
      (NoraE)-[:PRODUCED]-&gt;(WhenHarryMetSally),
      (NoraE)-[:WROTE]-&gt;(WhenHarryMetSally)

      CREATE (ThatThingYouDo:Movie {title:&#39;That Thing You Do&#39;, released:1996, tagline:&#39;In every life there comes a time when that thing you dream becomes that thing you do&#39;})
      CREATE (LivT:Person {name:&#39;Liv Tyler&#39;, born:1977})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Mr. White&#39;]}]-&gt;(ThatThingYouDo),
      (LivT)-[:ACTED_IN {roles:[&#39;Faye Dolan&#39;]}]-&gt;(ThatThingYouDo),
      (Charlize)-[:ACTED_IN {roles:[&#39;Tina&#39;]}]-&gt;(ThatThingYouDo),
      (TomH)-[:DIRECTED]-&gt;(ThatThingYouDo)

      CREATE (TheReplacements:Movie {title:&#39;The Replacements&#39;, released:2000, tagline:&#39;Pain heals, Chicks dig scars... Glory lasts forever&#39;})
      CREATE (Brooke:Person {name:&#39;Brooke Langton&#39;, born:1970})
      CREATE (Gene:Person {name:&#39;Gene Hackman&#39;, born:1930})
      CREATE (Orlando:Person {name:&#39;Orlando Jones&#39;, born:1968})
      CREATE (Howard:Person {name:&#39;Howard Deutch&#39;, born:1950})
      CREATE
      (Keanu)-[:ACTED_IN {roles:[&#39;Shane Falco&#39;]}]-&gt;(TheReplacements),
      (Brooke)-[:ACTED_IN {roles:[&#39;Annabelle Farrell&#39;]}]-&gt;(TheReplacements),
      (Gene)-[:ACTED_IN {roles:[&#39;Jimmy McGinty&#39;]}]-&gt;(TheReplacements),
      (Orlando)-[:ACTED_IN {roles:[&#39;Clifford Franklin&#39;]}]-&gt;(TheReplacements),
      (Howard)-[:DIRECTED]-&gt;(TheReplacements)

      CREATE (RescueDawn:Movie {title:&#39;RescueDawn&#39;, released:2006, tagline:&quot;Based on the extraordinary true story of one man&#39;s fight for freedom&quot;})
      CREATE (ChristianB:Person {name:&#39;Christian Bale&#39;, born:1974})
      CREATE (ZachG:Person {name:&#39;Zach Grenier&#39;, born:1954})
      CREATE
      (MarshallB)-[:ACTED_IN {roles:[&#39;Admiral&#39;]}]-&gt;(RescueDawn),
      (ChristianB)-[:ACTED_IN {roles:[&#39;Dieter Dengler&#39;]}]-&gt;(RescueDawn),
      (ZachG)-[:ACTED_IN {roles:[&#39;Squad Leader&#39;]}]-&gt;(RescueDawn),
      (SteveZ)-[:ACTED_IN {roles:[&#39;Duane&#39;]}]-&gt;(RescueDawn),
      (WernerH)-[:DIRECTED]-&gt;(RescueDawn)

      CREATE (TheBirdcage:Movie {title:&#39;The Birdcage&#39;, released:1996, tagline:&#39;Come as you are&#39;})
      CREATE (MikeN:Person {name:&#39;Mike Nichols&#39;, born:1931})
      CREATE
      (Robin)-[:ACTED_IN {roles:[&#39;Armand Goldman&#39;]}]-&gt;(TheBirdcage),
      (Nathan)-[:ACTED_IN {roles:[&#39;Albert Goldman&#39;]}]-&gt;(TheBirdcage),
      (Gene)-[:ACTED_IN {roles:[&#39;Sen. Kevin Keeley&#39;]}]-&gt;(TheBirdcage),
      (MikeN)-[:DIRECTED]-&gt;(TheBirdcage)

      CREATE (Unforgiven:Movie {title:&#39;Unforgiven&#39;, released:1992, tagline:&quot;It&#39;s a hell of a thing, killing a man&quot;})
      CREATE (RichardH:Person {name:&#39;Richard Harris&#39;, born:1930})
      CREATE (ClintE:Person {name:&#39;Clint Eastwood&#39;, born:1930})
      CREATE
      (RichardH)-[:ACTED_IN {roles:[&#39;English Bob&#39;]}]-&gt;(Unforgiven),
      (ClintE)-[:ACTED_IN {roles:[&#39;Bill Munny&#39;]}]-&gt;(Unforgiven),
      (Gene)-[:ACTED_IN {roles:[&#39;Little Bill Daggett&#39;]}]-&gt;(Unforgiven),
      (ClintE)-[:DIRECTED]-&gt;(Unforgiven)

      CREATE (JohnnyMnemonic:Movie {title:&#39;Johnny Mnemonic&#39;, released:1995, tagline:&#39;The hottest data on earth. In the coolest head in town&#39;})
      CREATE (Takeshi:Person {name:&#39;Takeshi Kitano&#39;, born:1947})
      CREATE (Dina:Person {name:&#39;Dina Meyer&#39;, born:1968})
      CREATE (IceT:Person {name:&#39;Ice-T&#39;, born:1958})
      CREATE (RobertL:Person {name:&#39;Robert Longo&#39;, born:1953})
      CREATE
      (Keanu)-[:ACTED_IN {roles:[&#39;Johnny Mnemonic&#39;]}]-&gt;(JohnnyMnemonic),
      (Takeshi)-[:ACTED_IN {roles:[&#39;Takahashi&#39;]}]-&gt;(JohnnyMnemonic),
      (Dina)-[:ACTED_IN {roles:[&#39;Jane&#39;]}]-&gt;(JohnnyMnemonic),
      (IceT)-[:ACTED_IN {roles:[&#39;J-Bone&#39;]}]-&gt;(JohnnyMnemonic),
      (RobertL)-[:DIRECTED]-&gt;(JohnnyMnemonic)

      CREATE (CloudAtlas:Movie {title:&#39;Cloud Atlas&#39;, released:2012, tagline:&#39;Everything is connected&#39;})
      CREATE (HalleB:Person {name:&#39;Halle Berry&#39;, born:1966})
      CREATE (JimB:Person {name:&#39;Jim Broadbent&#39;, born:1949})
      CREATE (TomT:Person {name:&#39;Tom Tykwer&#39;, born:1965})
      CREATE (DavidMitchell:Person {name:&#39;David Mitchell&#39;, born:1969})
      CREATE (StefanArndt:Person {name:&#39;Stefan Arndt&#39;, born:1961})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Zachry&#39;, &#39;Dr. Henry Goose&#39;, &#39;Isaac Sachs&#39;, &#39;Dermot Hoggins&#39;]}]-&gt;(CloudAtlas),
      (Hugo)-[:ACTED_IN {roles:[&#39;Bill Smoke&#39;, &#39;Haskell Moore&#39;, &#39;Tadeusz Kesselring&#39;, &#39;Nurse Noakes&#39;, &#39;Boardman Mephi&#39;, &#39;Old Georgie&#39;]}]-&gt;(CloudAtlas),
      (HalleB)-[:ACTED_IN {roles:[&#39;Luisa Rey&#39;, &#39;Jocasta Ayrs&#39;, &#39;Ovid&#39;, &#39;Meronym&#39;]}]-&gt;(CloudAtlas),
      (JimB)-[:ACTED_IN {roles:[&#39;Vyvyan Ayrs&#39;, &#39;Captain Molyneux&#39;, &#39;Timothy Cavendish&#39;]}]-&gt;(CloudAtlas),
      (TomT)-[:DIRECTED]-&gt;(CloudAtlas),
      (LillyW)-[:DIRECTED]-&gt;(CloudAtlas),
      (LanaW)-[:DIRECTED]-&gt;(CloudAtlas),
      (DavidMitchell)-[:WROTE]-&gt;(CloudAtlas),
      (StefanArndt)-[:PRODUCED]-&gt;(CloudAtlas)

      CREATE (TheDaVinciCode:Movie {title:&#39;The Da Vinci Code&#39;, released:2006, tagline:&#39;Break The Codes&#39;})
      CREATE (IanM:Person {name:&#39;Ian McKellen&#39;, born:1939})
      CREATE (AudreyT:Person {name:&#39;Audrey Tautou&#39;, born:1976})
      CREATE (PaulB:Person {name:&#39;Paul Bettany&#39;, born:1971})
      CREATE (RonH:Person {name:&#39;Ron Howard&#39;, born:1954})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Dr. Robert Langdon&#39;]}]-&gt;(TheDaVinciCode),
      (IanM)-[:ACTED_IN {roles:[&#39;Sir Leight Teabing&#39;]}]-&gt;(TheDaVinciCode),
      (AudreyT)-[:ACTED_IN {roles:[&#39;Sophie Neveu&#39;]}]-&gt;(TheDaVinciCode),
      (PaulB)-[:ACTED_IN {roles:[&#39;Silas&#39;]}]-&gt;(TheDaVinciCode),
      (RonH)-[:DIRECTED]-&gt;(TheDaVinciCode)

      CREATE (VforVendetta:Movie {title:&#39;V for Vendetta&#39;, released:2006, tagline:&#39;Freedom! Forever!&#39;})
      CREATE (NatalieP:Person {name:&#39;Natalie Portman&#39;, born:1981})
      CREATE (StephenR:Person {name:&#39;Stephen Rea&#39;, born:1946})
      CREATE (JohnH:Person {name:&#39;John Hurt&#39;, born:1940})
      CREATE (BenM:Person {name: &#39;Ben Miles&#39;, born:1967})
      CREATE
      (Hugo)-[:ACTED_IN {roles:[&#39;V&#39;]}]-&gt;(VforVendetta),
      (NatalieP)-[:ACTED_IN {roles:[&#39;Evey Hammond&#39;]}]-&gt;(VforVendetta),
      (StephenR)-[:ACTED_IN {roles:[&#39;Eric Finch&#39;]}]-&gt;(VforVendetta),
      (JohnH)-[:ACTED_IN {roles:[&#39;High Chancellor Adam Sutler&#39;]}]-&gt;(VforVendetta),
      (BenM)-[:ACTED_IN {roles:[&#39;Dascomb&#39;]}]-&gt;(VforVendetta),
      (JamesM)-[:DIRECTED]-&gt;(VforVendetta),
      (LillyW)-[:PRODUCED]-&gt;(VforVendetta),
      (LanaW)-[:PRODUCED]-&gt;(VforVendetta),
      (JoelS)-[:PRODUCED]-&gt;(VforVendetta),
      (LillyW)-[:WROTE]-&gt;(VforVendetta),
      (LanaW)-[:WROTE]-&gt;(VforVendetta)

      CREATE (SpeedRacer:Movie {title:&#39;Speed Racer&#39;, released:2008, tagline:&#39;Speed has no limits&#39;})
      CREATE (EmileH:Person {name:&#39;Emile Hirsch&#39;, born:1985})
      CREATE (JohnG:Person {name:&#39;John Goodman&#39;, born:1960})
      CREATE (SusanS:Person {name:&#39;Susan Sarandon&#39;, born:1946})
      CREATE (MatthewF:Person {name:&#39;Matthew Fox&#39;, born:1966})
      CREATE (ChristinaR:Person {name:&#39;Christina Ricci&#39;, born:1980})
      CREATE (Rain:Person {name:&#39;Rain&#39;, born:1982})
      CREATE
      (EmileH)-[:ACTED_IN {roles:[&#39;Speed Racer&#39;]}]-&gt;(SpeedRacer),
      (JohnG)-[:ACTED_IN {roles:[&#39;Pops&#39;]}]-&gt;(SpeedRacer),
      (SusanS)-[:ACTED_IN {roles:[&#39;Mom&#39;]}]-&gt;(SpeedRacer),
      (MatthewF)-[:ACTED_IN {roles:[&#39;Racer X&#39;]}]-&gt;(SpeedRacer),
      (ChristinaR)-[:ACTED_IN {roles:[&#39;Trixie&#39;]}]-&gt;(SpeedRacer),
      (Rain)-[:ACTED_IN {roles:[&#39;Taejo Togokahn&#39;]}]-&gt;(SpeedRacer),
      (BenM)-[:ACTED_IN {roles:[&#39;Cass Jones&#39;]}]-&gt;(SpeedRacer),
      (LillyW)-[:DIRECTED]-&gt;(SpeedRacer),
      (LanaW)-[:DIRECTED]-&gt;(SpeedRacer),
      (LillyW)-[:WROTE]-&gt;(SpeedRacer),
      (LanaW)-[:WROTE]-&gt;(SpeedRacer),
      (JoelS)-[:PRODUCED]-&gt;(SpeedRacer)

      CREATE (NinjaAssassin:Movie {title:&#39;Ninja Assassin&#39;, released:2009, tagline:&#39;Prepare to enter a secret world of assassins&#39;})
      CREATE (NaomieH:Person {name:&#39;Naomie Harris&#39;})
      CREATE
      (Rain)-[:ACTED_IN {roles:[&#39;Raizo&#39;]}]-&gt;(NinjaAssassin),
      (NaomieH)-[:ACTED_IN {roles:[&#39;Mika Coretti&#39;]}]-&gt;(NinjaAssassin),
      (RickY)-[:ACTED_IN {roles:[&#39;Takeshi&#39;]}]-&gt;(NinjaAssassin),
      (BenM)-[:ACTED_IN {roles:[&#39;Ryan Maslow&#39;]}]-&gt;(NinjaAssassin),
      (JamesM)-[:DIRECTED]-&gt;(NinjaAssassin),
      (LillyW)-[:PRODUCED]-&gt;(NinjaAssassin),
      (LanaW)-[:PRODUCED]-&gt;(NinjaAssassin),
      (JoelS)-[:PRODUCED]-&gt;(NinjaAssassin)

      CREATE (TheGreenMile:Movie {title:&#39;The Green Mile&#39;, released:1999, tagline:&quot;Walk a mile you&#39;ll never forget.&quot;})
      CREATE (MichaelD:Person {name:&#39;Michael Clarke Duncan&#39;, born:1957})
      CREATE (DavidM:Person {name:&#39;David Morse&#39;, born:1953})
      CREATE (SamR:Person {name:&#39;Sam Rockwell&#39;, born:1968})
      CREATE (GaryS:Person {name:&#39;Gary Sinise&#39;, born:1955})
      CREATE (PatriciaC:Person {name:&#39;Patricia Clarkson&#39;, born:1959})
      CREATE (FrankD:Person {name:&#39;Frank Darabont&#39;, born:1959})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Paul Edgecomb&#39;]}]-&gt;(TheGreenMile),
      (MichaelD)-[:ACTED_IN {roles:[&#39;John Coffey&#39;]}]-&gt;(TheGreenMile),
      (DavidM)-[:ACTED_IN {roles:[&#39;Brutus &quot;Brutal&quot; Howell&#39;]}]-&gt;(TheGreenMile),
      (BonnieH)-[:ACTED_IN {roles:[&#39;Jan Edgecomb&#39;]}]-&gt;(TheGreenMile),
      (JamesC)-[:ACTED_IN {roles:[&#39;Warden Hal Moores&#39;]}]-&gt;(TheGreenMile),
      (SamR)-[:ACTED_IN {roles:[&#39;&quot;Wild Bill&quot; Wharton&#39;]}]-&gt;(TheGreenMile),
      (GaryS)-[:ACTED_IN {roles:[&#39;Burt Hammersmith&#39;]}]-&gt;(TheGreenMile),
      (PatriciaC)-[:ACTED_IN {roles:[&#39;Melinda Moores&#39;]}]-&gt;(TheGreenMile),
      (FrankD)-[:DIRECTED]-&gt;(TheGreenMile)

      CREATE (FrostNixon:Movie {title:&#39;Frost/Nixon&#39;, released:2008, tagline:&#39;400 million people were waiting for the truth.&#39;})
      CREATE (FrankL:Person {name:&#39;Frank Langella&#39;, born:1938})
      CREATE (MichaelS:Person {name:&#39;Michael Sheen&#39;, born:1969})
      CREATE (OliverP:Person {name:&#39;Oliver Platt&#39;, born:1960})
      CREATE
      (FrankL)-[:ACTED_IN {roles:[&#39;Richard Nixon&#39;]}]-&gt;(FrostNixon),
      (MichaelS)-[:ACTED_IN {roles:[&#39;David Frost&#39;]}]-&gt;(FrostNixon),
      (KevinB)-[:ACTED_IN {roles:[&#39;Jack Brennan&#39;]}]-&gt;(FrostNixon),
      (OliverP)-[:ACTED_IN {roles:[&#39;Bob Zelnick&#39;]}]-&gt;(FrostNixon),
      (SamR)-[:ACTED_IN {roles:[&#39;James Reston, Jr.&#39;]}]-&gt;(FrostNixon),
      (RonH)-[:DIRECTED]-&gt;(FrostNixon)

      CREATE (Hoffa:Movie {title:&#39;Hoffa&#39;, released:1992, tagline:&quot;He didn&#39;t want law. He wanted justice.&quot;})
      CREATE (DannyD:Person {name:&#39;Danny DeVito&#39;, born:1944})
      CREATE (JohnR:Person {name:&#39;John C. Reilly&#39;, born:1965})
      CREATE
      (JackN)-[:ACTED_IN {roles:[&#39;Hoffa&#39;]}]-&gt;(Hoffa),
      (DannyD)-[:ACTED_IN {roles:[&#39;Robert &quot;Bobby&quot; Ciaro&#39;]}]-&gt;(Hoffa),
      (JTW)-[:ACTED_IN {roles:[&#39;Frank Fitzsimmons&#39;]}]-&gt;(Hoffa),
      (JohnR)-[:ACTED_IN {roles:[&#39;Peter &quot;Pete&quot; Connelly&#39;]}]-&gt;(Hoffa),
      (DannyD)-[:DIRECTED]-&gt;(Hoffa)

      CREATE (Apollo13:Movie {title:&#39;Apollo 13&#39;, released:1995, tagline:&#39;Houston, we have a problem.&#39;})
      CREATE (EdH:Person {name:&#39;Ed Harris&#39;, born:1950})
      CREATE (BillPax:Person {name:&#39;Bill Paxton&#39;, born:1955})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Jim Lovell&#39;]}]-&gt;(Apollo13),
      (KevinB)-[:ACTED_IN {roles:[&#39;Jack Swigert&#39;]}]-&gt;(Apollo13),
      (EdH)-[:ACTED_IN {roles:[&#39;Gene Kranz&#39;]}]-&gt;(Apollo13),
      (BillPax)-[:ACTED_IN {roles:[&#39;Fred Haise&#39;]}]-&gt;(Apollo13),
      (GaryS)-[:ACTED_IN {roles:[&#39;Ken Mattingly&#39;]}]-&gt;(Apollo13),
      (RonH)-[:DIRECTED]-&gt;(Apollo13)

      CREATE (Twister:Movie {title:&#39;Twister&#39;, released:1996, tagline:&quot;Don&#39;t Breathe. Don&#39;t Look Back.&quot;})
      CREATE (PhilipH:Person {name:&#39;Philip Seymour Hoffman&#39;, born:1967})
      CREATE (JanB:Person {name:&#39;Jan de Bont&#39;, born:1943})
      CREATE
      (BillPax)-[:ACTED_IN {roles:[&#39;Bill Harding&#39;]}]-&gt;(Twister),
      (HelenH)-[:ACTED_IN {roles:[&#39;Dr. Jo Harding&#39;]}]-&gt;(Twister),
      (ZachG)-[:ACTED_IN {roles:[&#39;Eddie&#39;]}]-&gt;(Twister),
      (PhilipH)-[:ACTED_IN {roles:[&#39;Dustin &quot;Dusty&quot; Davis&#39;]}]-&gt;(Twister),
      (JanB)-[:DIRECTED]-&gt;(Twister)

      CREATE (CastAway:Movie {title:&#39;Cast Away&#39;, released:2000, tagline:&#39;At the edge of the world, his journey begins.&#39;})
      CREATE (RobertZ:Person {name:&#39;Robert Zemeckis&#39;, born:1951})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Chuck Noland&#39;]}]-&gt;(CastAway),
      (HelenH)-[:ACTED_IN {roles:[&#39;Kelly Frears&#39;]}]-&gt;(CastAway),
      (RobertZ)-[:DIRECTED]-&gt;(CastAway)

      CREATE (OneFlewOvertheCuckoosNest:Movie {title:&quot;One Flew Over the Cuckoo&#39;s Nest&quot;, released:1975, tagline:&quot;If he&#39;s crazy, what does that make you?&quot;})
      CREATE (MilosF:Person {name:&#39;Milos Forman&#39;, born:1932})
      CREATE
      (JackN)-[:ACTED_IN {roles:[&#39;Randle McMurphy&#39;]}]-&gt;(OneFlewOvertheCuckoosNest),
      (DannyD)-[:ACTED_IN {roles:[&#39;Martini&#39;]}]-&gt;(OneFlewOvertheCuckoosNest),
      (MilosF)-[:DIRECTED]-&gt;(OneFlewOvertheCuckoosNest)

      CREATE (SomethingsGottaGive:Movie {title:&quot;Something&#39;s Gotta Give&quot;, released:2003})
      CREATE (DianeK:Person {name:&#39;Diane Keaton&#39;, born:1946})
      CREATE (NancyM:Person {name:&#39;Nancy Meyers&#39;, born:1949})
      CREATE
      (JackN)-[:ACTED_IN {roles:[&#39;Harry Sanborn&#39;]}]-&gt;(SomethingsGottaGive),
      (DianeK)-[:ACTED_IN {roles:[&#39;Erica Barry&#39;]}]-&gt;(SomethingsGottaGive),
      (Keanu)-[:ACTED_IN {roles:[&#39;Julian Mercer&#39;]}]-&gt;(SomethingsGottaGive),
      (NancyM)-[:DIRECTED]-&gt;(SomethingsGottaGive),
      (NancyM)-[:PRODUCED]-&gt;(SomethingsGottaGive),
      (NancyM)-[:WROTE]-&gt;(SomethingsGottaGive)

      CREATE (BicentennialMan:Movie {title:&#39;Bicentennial Man&#39;, released:1999, tagline:&quot;One robot&#39;s 200 year journey to become an ordinary man.&quot;})
      CREATE (ChrisC:Person {name:&#39;Chris Columbus&#39;, born:1958})
      CREATE
      (Robin)-[:ACTED_IN {roles:[&#39;Andrew Marin&#39;]}]-&gt;(BicentennialMan),
      (OliverP)-[:ACTED_IN {roles:[&#39;Rupert Burns&#39;]}]-&gt;(BicentennialMan),
      (ChrisC)-[:DIRECTED]-&gt;(BicentennialMan)

      CREATE (CharlieWilsonsWar:Movie {title:&quot;Charlie Wilson&#39;s War&quot;, released:2007, tagline:&quot;A stiff drink. A little mascara. A lot of nerve. Who said they couldn&#39;t bring down the Soviet empire.&quot;})
      CREATE (JuliaR:Person {name:&#39;Julia Roberts&#39;, born:1967})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Rep. Charlie Wilson&#39;]}]-&gt;(CharlieWilsonsWar),
      (JuliaR)-[:ACTED_IN {roles:[&#39;Joanne Herring&#39;]}]-&gt;(CharlieWilsonsWar),
      (PhilipH)-[:ACTED_IN {roles:[&#39;Gust Avrakotos&#39;]}]-&gt;(CharlieWilsonsWar),
      (MikeN)-[:DIRECTED]-&gt;(CharlieWilsonsWar)

      CREATE (ThePolarExpress:Movie {title:&#39;The Polar Express&#39;, released:2004, tagline:&#39;This Holiday Season... Believe&#39;})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Hero Boy&#39;, &#39;Father&#39;, &#39;Conductor&#39;, &#39;Hobo&#39;, &#39;Scrooge&#39;, &#39;Santa Claus&#39;]}]-&gt;(ThePolarExpress),
      (RobertZ)-[:DIRECTED]-&gt;(ThePolarExpress)

      CREATE (ALeagueofTheirOwn:Movie {title:&#39;A League of Their Own&#39;, released:1992, tagline:&#39;Once in a lifetime you get a chance to do something different.&#39;})
      CREATE (Madonna:Person {name:&#39;Madonna&#39;, born:1954})
      CREATE (GeenaD:Person {name:&#39;Geena Davis&#39;, born:1956})
      CREATE (LoriP:Person {name:&#39;Lori Petty&#39;, born:1963})
      CREATE (PennyM:Person {name:&#39;Penny Marshall&#39;, born:1943})
      CREATE
      (TomH)-[:ACTED_IN {roles:[&#39;Jimmy Dugan&#39;]}]-&gt;(ALeagueofTheirOwn),
      (GeenaD)-[:ACTED_IN {roles:[&#39;Dottie Hinson&#39;]}]-&gt;(ALeagueofTheirOwn),
      (LoriP)-[:ACTED_IN {roles:[&#39;Kit Keller&#39;]}]-&gt;(ALeagueofTheirOwn),
      (RosieO)-[:ACTED_IN {roles:[&#39;Doris Murphy&#39;]}]-&gt;(ALeagueofTheirOwn),
      (Madonna)-[:ACTED_IN {roles:[&#39;&quot;All the Way&quot; Mae Mordabito&#39;]}]-&gt;(ALeagueofTheirOwn),
      (BillPax)-[:ACTED_IN {roles:[&#39;Bob Hinson&#39;]}]-&gt;(ALeagueofTheirOwn),
      (PennyM)-[:DIRECTED]-&gt;(ALeagueofTheirOwn)

      CREATE (PaulBlythe:Person {name:&#39;Paul Blythe&#39;})
      CREATE (AngelaScope:Person {name:&#39;Angela Scope&#39;})
      CREATE (JessicaThompson:Person {name:&#39;Jessica Thompson&#39;})
      CREATE (JamesThompson:Person {name:&#39;James Thompson&#39;})

      CREATE
      (JamesThompson)-[:FOLLOWS]-&gt;(JessicaThompson),
      (AngelaScope)-[:FOLLOWS]-&gt;(JessicaThompson),
      (PaulBlythe)-[:FOLLOWS]-&gt;(AngelaScope)

      CREATE
      (JessicaThompson)-[:REVIEWED {summary:&#39;An amazing journey&#39;, rating:95}]-&gt;(CloudAtlas),
      (JessicaThompson)-[:REVIEWED {summary:&#39;Silly, but fun&#39;, rating:65}]-&gt;(TheReplacements),
      (JamesThompson)-[:REVIEWED {summary:&#39;The coolest football movie ever&#39;, rating:100}]-&gt;(TheReplacements),
      (AngelaScope)-[:REVIEWED {summary:&#39;Pretty funny at times&#39;, rating:62}]-&gt;(TheReplacements),
      (JessicaThompson)-[:REVIEWED {summary:&#39;Dark, but compelling&#39;, rating:85}]-&gt;(Unforgiven),
      (JessicaThompson)-[:REVIEWED {summary:&quot;Slapstick redeemed only by the Robin Williams and Gene Hackman&#39;s stellar performances&quot;, rating:45}]-&gt;(TheBirdcage),
      (JessicaThompson)-[:REVIEWED {summary:&#39;A solid romp&#39;, rating:68}]-&gt;(TheDaVinciCode),
      (JamesThompson)-[:REVIEWED {summary:&#39;Fun, but a little far fetched&#39;, rating:65}]-&gt;(TheDaVinciCode),
      (JessicaThompson)-[:REVIEWED {summary:&#39;You had me at Jerry&#39;, rating:92}]-&gt;(JerryMaguire)

      WITH TomH as a
      MATCH (a)-[:ACTED_IN]-&gt;(m)&lt;-[:DIRECTED]-(d) RETURN a,m,d LIMIT 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-constraints" tabindex="-1"><a class="header-anchor" href="#create-constraints" aria-hidden="true">#</a> Create constraints</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE CONSTRAINT ON (n:Movie) ASSERT (n.title) IS UNIQUE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE CONSTRAINT ON (n:Person) ASSERT (n.name) IS UNIQUE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="index-nodes" tabindex="-1"><a class="header-anchor" href="#index-nodes" aria-hidden="true">#</a> Index nodes</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE INDEX FOR (m:Movie) ON (m.released)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> Find</h2><p>Find the actor named &quot;Tom Hanks&quot;:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MATCH (tom:Person {name: &quot;Tom Hanks&quot;}) RETURN tom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Find the movie with title &quot;Cloud Atlas&quot;:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MATCH (cloudAtlas:Movie {title: &quot;Cloud Atlas&quot;}) RETURN cloudAtlas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Find 10 people and return their names:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MATCH (people:Person) RETURN people.name LIMIT 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>result</p><table><thead><tr><th>people.name</th><th></th></tr></thead><tbody><tr><td>1</td><td>&quot;Keanu Reeves&quot;</td></tr><tr><td>2</td><td>&quot;Carrie-Anne Moss&quot;</td></tr><tr><td>3</td><td>&quot;Laurence Fishburne&quot;</td></tr><tr><td>4</td><td>&quot;Hugo Weaving&quot;</td></tr><tr><td>5</td><td>&quot;Lilly Wachowski&quot;</td></tr><tr><td>6</td><td>&quot;Lana Wachowski&quot;</td></tr><tr><td>7</td><td>&quot;Joel Silver&quot;</td></tr><tr><td>8</td><td>&quot;Emil Eifrem&quot;</td></tr><tr><td>9</td><td>&quot;Charlize Theron&quot;</td></tr><tr><td>10</td><td>&quot;Al Pacino&quot;</td></tr></tbody></table><p>Find movies released in the 1990s and return their titles.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MATCH (nineties:Movie) WHERE nineties.released &gt;= 1990 AND nineties.released &lt; 2000 RETURN nineties.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>result</p><table><thead><tr><th>nineties.title</th><th></th></tr></thead><tbody><tr><td>1</td><td>&quot;Joe Versus the Volcano&quot;</td></tr><tr><td>2</td><td>&quot;A Few Good Men&quot;</td></tr><tr><td>3</td><td>&quot;Unforgiven&quot;</td></tr><tr><td>4</td><td>&quot;Hoffa&quot;</td></tr><tr><td>5</td><td>&quot;A League of Their Own&quot;</td></tr><tr><td>6</td><td>&quot;Sleepless in Seattle&quot;</td></tr><tr><td>7</td><td>&quot;Johnny Mnemonic&quot;</td></tr><tr><td>8</td><td>&quot;Apollo 13&quot;</td></tr><tr><td>9</td><td>&quot;That Thing You Do&quot;</td></tr><tr><td>10</td><td>&quot;The Birdcage&quot;</td></tr><tr><td>11</td><td>&quot;Twister&quot;</td></tr><tr><td>12</td><td>&quot;The Devil&#39;s Advocate&quot;</td></tr><tr><td>13</td><td>&quot;As Good as It Gets&quot;</td></tr><tr><td>14</td><td>&quot;What Dreams May Come&quot;</td></tr><tr><td>15</td><td>&quot;You&#39;ve Got Mail&quot;</td></tr><tr><td>16</td><td>&quot;When Harry Met Sally&quot;</td></tr><tr><td>17</td><td>&quot;The Matrix&quot;</td></tr><tr><td>18</td><td>&quot;Snow Falling on Cedars&quot;</td></tr><tr><td>19</td><td>&quot;The Green Mile&quot;</td></tr><tr><td>20</td><td>&quot;Bicentennial Man&quot;</td></tr></tbody></table>`,23),r=[a];function d(o,t){return n(),i("div",null,r)}const u=e(l,[["render",d],["__file","Neo4j.html.vue"]]);export{u as default};
