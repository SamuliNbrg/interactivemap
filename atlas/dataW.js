var imageW = 3560
  , imageH = 7256;
var image = "waterdeep-3560-7256.jpg"
  , imageMob = "waterdeep-1780-3628.jpg"
  , mini = "smallW.jpg";
var lineFocus = 12;
var dotWidth = 12
  , dotTrait = 3
  , zoomMax = 1
  , zoomCelMax = 1;
var carte = "W"
  , factorDist = 310;
var bilang = 1;
var auteur = "<a href='https://www.inprnt.com/gallery/j_a_e/waterdeep/'>Jason Engle</a>";
/* 310 px = 1000 ft */

var zones = [{
    name1: "Field Ward",
    txt1: "<p>Newly built and though not an official ward of the city - the Watch doesn't patrol this area -, Field Ward is home to folk of all walks of life who lacked coin enough to hire lodgings or own buildings in old Waterdeep. It is a slum in some places, and a struggling middle-class area in others. The Ward is a noisy, lively area that's home to poor elves, half-bloods of all sorts, and dwarves who are determined to get the respect they are sure they deserve.</p>",
    name0: "Quartier du Champ",
    txt0: "<p>Récemment construit, et bien qu'il ne s'agisse pas d'un quartier officiel de la ville - la Garde ne patrouille pas dans cette zone -, le quartier du Champ abrite des gens de tous horizons qui n'oont pas assez d'argent pour louer ou posséder un logement dans le vieux Waterdeep. C'est un bidonville à certains endroits et un quartier pauvre de classe moyenne dans d'autres. Le quartier, bruyant et animé, abrite des elfes pauvres, des sang-mêlés de toutes sortes et des nains déterminés à obtenir le respect qu'ils sont sûrs de mériter.</p>",
    couleur: "#b3ffcc",
    path: "M 738,246 790,176 861,185 948,194 1085,219 1243,263 1404,315 1548,369 1700,407 1830,446 1974,476 2122,539 2193,567 2350,631 2456,687 2587,780 2687,861 2781,961 2950,1126 2985,1173 2974,1254 2969,1271 2985,1319 2991,1352 2970,1380 2980,1400 2957,1452 2952,1497 2961,1539 2956,1621 2972,1678 2967,1689 2978,1732 2970,1784 2954,1825 2957,1858 2965,1875 2950,1913 2941,1993 2930,1723 2893,1532 2854,1358 2769,1200 2722,1163 2559,1080 2389,1021 2220,935 2109,907 2048,909 1931,881 1754,811 1583,756 1404,693 1243,596 1131,491 1046,370 C 1046,370 972,374 964,374 957,374 933,385 933,385 L 813,465 731,259 Z"
}, {
    name1: "Castle Ward",
    txt1: "<p>Castle Ward lies in the heart of Waterdeep, wrapping around the eastern slopes of Mount Waterdeep. This ward is home to Castle Waterdeep, Piergeiron's Palace and many city's administrative buildings. Ward of wealthy or influential people who can't count themselves among the nobility.</p><p><strong>Ward's colors</strong>: blue and purple</p><p><strong>Mascot</strong>: griffon</p>",
    name0: "Quartier du Château",
    txt0: "<p>Le quartier du Château se trouve au cœur de Waterdeep, entourant les pentes orientales du mont Waterdeep. Ce quartier abrite Château Waterdeep, le palais de Piergeiron et de nombreux bâtiments administratifs de la ville. C'est le quartier des riches et des influents qui ne font pas partie de la noblesse.</p><p><strong>Couleurs du quartier</strong> : bleu et pourpre</p><p><strong>Mascotte</strong> : griffon</p>",
    couleur: "#EE8080",
    path: "M 2097,2825 2126,3157 2163,3555 2179,4048 2162,4074 2149,4111 2137,4145 2142,4161 2168,4180 2214,4186 2238,4193 2238,4212 2239,4272 2222,4415 2201,4482 2201,4550 2203,4677 2080,4677 2077,4621 2084,4593 C 2084,4593 2084,4580 2074,4578 2064,4577 2034,4593 2034,4593 L 2019,4570 1983,4553 1935,4549 1836,4553 1781,4560 1760,4553 1678,4559 1602,4569 1490,4570 1455,4576 1373,4576 1344,4590 1306,4638 1289,4660 1279,4690 1284,4727 1306,4830 1317,4867 1328,4907 C 1328,4907 1326,4933 1322,4932 1318,4931 1296,4927 1296,4927 L 1295,5056 1264,5057 1268,4982 C 1260,4980 1193,4994 1193,4994 L 1180,4985 1177,4963 1186,4956 1261,4943 1255,4897 1119,4925 1106,5018 1102,5023 C 1102,5023 1088,5028 1086,5024 1084,5020 1078,5013 1078,5013 1078,5013 1091,4933 1086,4934 1081,4935 999,4960 999,4960 L 974,4963 901,4970 907,5030 885,5029 881,4973 833,4961 C 833,4961 838,5047 832,5046 826,5044 810,5043 810,5043 L 811,4961 C 811,4961 782,4956 778,4955 774,4954 767,4956 767,4956 L 750,4948 734,4955 718,4949 710,5077 689,5077 696,4946 686,4919 691,4914 707,4896 717,4871 C 717,4871 738,4841 745,4838 751,4835 766,4808 766,4808 L 764,4784 C 764,4784 784,4762 793,4758 802,4754 818,4724 818,4724 L 818,4704 809,4676 789,4654 804,4633 816,4633 826,4617 827,4609 842,4600 867,4599 C 867,4599 883,4576 888,4573 893,4569 914,4561 914,4561 L 943,4559 972,4567 C 972,4567 969,4573 968,4578 967,4583 980,4586 980,4586 L 1003,4569 1020,4565 1046,4552 1091,4548 1113,4545 1134,4527 1183,4517 1188,4498 1209,4484 1233,4486 1262,4462 C 1262,4462 1268,4467 1273,4469 1279,4470 1288,4454 1288,4454 L 1306,4453 C 1306,4453 1325,4465 1330,4467 1335,4470 1363,4471 1363,4471 L 1392,4442 1394,4415 1376,4383 1367,4358 1371,4329 1388,4299 1414,4276 1434,4272 1456,4283 1477,4283 1499,4279 1510,4289 C 1510,4289 1536,4295 1547,4295 1557,4295 1556,4312 1556,4312 L 1564,4354 C 1564,4354 1576,4356 1590,4356 1605,4356 1599,4337 1599,4337 1599,4337 1619,4333 1626,4332 1632,4331 1647,4343 1647,4343 L 1656,4361 1681,4361 1690,4373 1686,4387 1703,4402 1725,4399 1737,4381 1770,4364 1775,4385 1779,4400 1800,4406 1817,4396 1837,4415 1846,4403 1844,4395 1878,4369 1892,4366 1887,4324 1900,4298 1886,4279 1887,4248 1894,4232 1886,4219 1867,4218 C 1867,4218 1845,4202 1842,4197 1840,4191 1842,4181 1842,4181 1842,4181 1819,4173 1814,4170 1808,4168 1804,4185 1800,4191 1796,4198 1745,4215 1745,4215 L 1727,4207 1703,4218 1678,4203 1637,4174 1581,4147 1528,4143 C 1528,4143 1488,4159 1480,4159 1472,4159 1453,4152 1453,4152 L 1393,4140 1310,4122 1290,4123 1264,4119 1241,4126 1187,4126 1160,4102 1163,4093 1142,4064 1118,4048 1087,4027 1083,4011 1067,3979 1067,3972 1057,3959 1058,3938 1034,3908 1028,3887 1007,3876 993,3852 989,3834 990,3801 977,3795 972,3772 1000,3728 1001,3713 984,3679 964,3638 969,3601 C 969,3601 980,3561 981,3555 983,3550 993,3503 993,3503 L 1017,3459 1051,3428 C 1051,3428 1051,3408 1062,3386 1072,3364 1061,3348 1061,3348 L 1067,3337 1066,3308 1078,3251 1089,3191 1087,3185 1093,3139 1080,3124 1083,3090 1063,3034 1049,3001 1017,2968 981,2960 942,2943 C 942,2943 914,2922 909,2921 904,2919 889,2893 889,2893 L 881,2867 881,2830 873,2791 864,2780 854,2768 834,2722 814,2712 792,2678 787,2620 771,2599 730,2563 728,2544 724,2540 724,2521 705,2504 661,2487 638,2462 609,2444 584,2449 459,2431 400,2359 426,2335 507,2325 726,2318 1196,2325 1303,2311 1777,2321 1774,2585 1921,2582 1993,2592 2091,2659 2093,2753 Z"
}, {
    name1: "Dock Ward",
    txt1: "<p>Waterdeep's most notorious and colorful ward is also the oldest. Traveler's tales portray it as a lawless, brawling place of drunks, smugglers, and roaming monsters, which is not all that far from the truth. The bustling harbor scene and its attendant activities dominate this ward. Businesses and warehouses that depend on the city's newly restored harbor are located here.</p><p><strong>Ward's colors</strong>: burgundy and orange</p><p><strong>Mascot</strong>: swordfish</p>",
    name0: "Quartier des Docks",
    txt0: "<p>Le quartier le plus célèbre et le plus coloré de Waterdeep est également le plus ancien. Les récits des voyageurs le décrivent comme un lieu de bagarre sans loi, peuplé d'ivrognes, de contrebandiers et de monstres errants, ce qui n'est pas si loin de la vérité. La scène portuaire est animée et les activités qui en découlent dominent ce quartier. Les négoces et les entrepôts qui dépendent du port récemment restauré de la ville se trouvent ici.</p><p><strong>Couleurs du quartier</strong> : bourgogne et orange</p><p><strong>Mascotte</strong> : espadon</p>",
    couleur: "#b3d9ff",
    path: "M 2513,5891 2477,5933 2488,5948 2525,5908 2525,5932 2535,5936 2532,5944 2552,5959 2584,5948 2623,5960 2641,5991 2660,5993 2688,6023 C 2688,6023 2712,6032 2717,6032 2723,6032 2723,6044 2723,6044 L 2747,6055 2747,6068 2763,6093 2791,6124 2788,6159 2777,6195 2803,6237 2828,6235 2881,6208 2933,6179 2977,6125 3021,6021 3044,5997 3000,5968 2929,5899 2857,5893 2792,5876 2624,5764 2609,5725 2587,5633 2579,5571 2576,5531 2563,5337 2537,5192 2519,5027 2489,4831 2477,4766 2460,4710 2440,4710 2403,4728 2376,4731 2338,4726 2335,4688 2264,4677 2203,4677 2080,4677 2077,4621 2084,4593 C 2084,4593 2084,4580 2074,4578 2064,4577 2034,4593 2034,4593 L 2019,4570 1983,4553 1935,4549 1836,4553 1781,4560 1760,4553 1678,4559 1602,4569 1490,4570 1455,4576 1373,4576 1344,4590 1306,4638 1289,4660 1279,4690 1284,4727 1306,4830 1317,4867 1328,4907 C 1328,4907 1326,4933 1322,4932 L 1381,4944 1369,5000 1396,5007 1405,4948 1457,4960 1483,5021 1443,5036 1445,5053 C 1445,5053 1441,5068 1452,5065 1463,5063 1491,5048 1491,5048 L 1501,5068 1461,5089 1461,5093 1472,5109 1515,5095 1537,5147 1444,5231 1412,5191 1392,5213 1477,5304 1495,5287 C 1495,5287 1463,5261 1467,5253 1471,5245 1556,5167 1556,5167 L 1577,5196 1579,5291 1603,5289 C 1603,5289 1595,5201 1603,5197 1611,5193 1648,5195 1648,5195 L 1649,5271 1676,5271 1676,5195 1701,5176 1772,5268 1709,5321 1724,5336 1784,5288 1792,5344 1732,5397 1741,5415 C 1760,5408 1815,5361 1815,5361 L 1836,5453 1723,5552 C 1723,5552 1735,5572 1740,5572 1745,5572 1851,5473 1851,5473 L 1868,5496 1851,5520 1859,5536 1884,5508 1951,5536 1933,5587 1952,5593 1969,5545 2017,5595 2016,5631 1947,5676 1960,5697 2029,5659 2045,5680 1957,5765 1980,5784 2064,5696 2091,5715 2055,5781 2075,5792 2109,5721 2132,5725 2140,5735 2160,5731 2236,5791 2263,5761 2280,5769 2308,5725 2323,5727 2323,5727 2351,5740 2369,5756 2386,5795 2414,5812 2392,5837 2366,5812 C 2366,5812 2369,5797 2364,5796 2358,5795 2350,5795 2350,5795 L 2350,5818 2380,5848 2359,5875 C 2359,5875 2294,5815 2299,5816 L 2319,5787 2310,5777 2268,5840 2284,5855 2293,5842 2344,5894 2326,5914 2341,5928 2364,5909 2399,5942 2414,5925 2379,5892 2404,5860 2421,5885 2435,5875 2417,5845 2436,5827 2479,5865 2463,5880 2473,5891 2491,5870 2498,5872 2501,5882 2509,5884 2515,5890"
}, {
    name1: "North Ward",
    txt1: "<p>Waterdeep's quietest ward is also one of its wealthiest. North Ward is home to most of the middle class and lesser noble families. This ward has few notable landmarks other than the Cliff watch, and it all but shuts down at dusk.</p><p><strong>Ward's colors</strong>: green and orange</p><p><strong>Mascot</strong>: white dove</p>",
    name0: "Quartier Nord",
    txt0: "<p>Le quartier le plus calme de Waterdeep est également l'un des plus riches. Le quartier Nord abrite la plupart des familles de classe moyenne et de la petite noblesse. Ce quartier a peu de points de repère particuliers autres que le guet de la Falaise, et il s'arrête pratiquement de vivre au crépuscule.</p><p><strong>Couleurs du quartier</strong> : vert et orange</p><p><strong>Mascotte</strong> : colombe blanche</p>",
    couleur: "#ffcc66",
    path: "M 1774,2585 1921,2582 1993,2592 2091,2659 2093,2753 C 2093,2753 2141,2751 2148,2754 2155,2758 2207,2770 2207,2770 L 2247,2797 2262,2834 2271,2889 2291,2932 2324,2963 2366,2965 2391,3039 C 2391,3039 2409,3106 2412,3113 2416,3120 2447,3144 2447,3144 L 2540,3203 2556,3180 2598,3076 2712,2961 2823,2952 2902,3015 2982,3080 2991,3102 3026,3093 3030,3083 3028,3057 3055,3005 3059,2962 3054,2943 3060,2908 3048,2854 3048,2833 3057,2810 3052,2793 3061,2771 C 3061,2771 3050,2766 3050,2761 3050,2756 3055,2739 3055,2739 L 3040,2721 C 3040,2721 3045,2704 3045,2697 3045,2691 3018,2634 3018,2634 3018,2634 3028,2621 3029,2616 3030,2611 3026,2586 3026,2586 L 3034,2562 3032,2494 3015,2465 3022,2454 3009,2416 3015,2396 3009,2384 3016,2368 3011,2352 3018,2308 3001,2266 3002,2227 2979,2204 2941,1993 2930,1723 2893,1532 2854,1358 2769,1200 2722,1163 2559,1080 2389,1021 2220,935 2109,907 2079,909 2068,985 2076,1469 1780,1471 1776,1959 1777,2321 Z"
}, {
    name1: "Sea Ward",
    txt1: "<p>Waterdeep's wealthiest ward is notable for the many-spired, grand homes of the nobility, the gleaming edifices of the city's leading temples, and the imposing towers of the city's premier wizards.</p><p><strong>Ward's colors</strong>: blue and gold</p><p><strong>Mascot</strong>: sea lion</p>",
    name0: "Quartier Maritime",
    txt0: "<p>Le quartier le plus riche de Waterdeep se reconnait à ses grandes demeures de nobles aux nombreuses flèches, aux édifices étincelants des principaux temples de la ville et aux imposantes tours des principaux magiciens de la ville.</p><p><strong>Couleurs du quartier</strong> : bleu et or</p><p><strong>Mascotte</strong> : lion de mer</p>",
    couleur: "#ccccff",
    path: "M 2079,909 2048,909 1931,881 1754,811 1583,756 1404,693 1243,596 1131,491 1046,370 C 1046,370 972,374 964,374 957,374 933,385 933,385 L 813,465 693,603 642,794 585,974 531,1156 538,1428 538,1564 525,1656 505,1755 414,1719 394,1783 483,1818 459,2012 345,2146 338,2195 305,2252 314,2329 400,2359 426,2335 507,2325 726,2318 1196,2325 1303,2311 1777,2321 1776,1959 1780,1471 2076,1469 2068,985 Z"
}, {
    name1: "Southern Ward",
    txt1: "<p>Southern Ward lies in the southeastern corner of Waterdeep. Caravan City, as this ward is sometimes known, is a homely, friendly, busy, and largely poor area of Waterdeep. Stables, warehouses, and shops related to overland trade dominate this ward.</p><p><strong>Ward's colors</strong>: red and white</p><p><strong>Mascot</strong>: mule</p>",
    name0: "Quartier Sud",
    txt0: "<p>Le quartier Sud se trouve au sud-est de Waterdeep. La cité des caravanes, comme ce quartier est parfois appelé, est un endroit accueillant, convivial, animé et en grande partie pauvre au sein de Waterdeep. Les écuries, les entrepôts et les magasins liés au commerce terrestre dominent ce quartier.</p><p><strong>Couleurs du quartier</strong> : rouge et blanc</p><p><strong>Mascotte</strong> : mule</p>",
    couleur: "#ffff99",
    path: "M 2477,4766 2555,4757 2662,4737 2654,4636 2715,4634 2748,4634 2787,4629 2819,4641 2881,4693 2906,4677 2926,4677 2973,4640 3001,4622 3019,4616 3035,4589 3027,4791 3007,4941 3047,5116 3073,5265 3155,5403 3149,5501 3117,5644 3120,5652 3149,5737 3101,5788 3100,5799 3117,5876 3117,5889 3044,5997 3000,5968 2929,5899 2857,5893 2792,5876 2624,5764 2609,5725 2587,5633 2579,5571 2576,5531 2563,5337 2537,5192 2519,5027 2489,4831 Z"
}, {
    name1: "Trades Ward",
    txt1: "<p>Given over almost entirely to commerce, Trades Ward lacks the feeling of community found in the more residential wards, but retains the hustle and bustle of a marketplace throughout the day and night.</p><p><strong>Ward's colors</strong>: green and purple</p><p><strong>Mascot</strong>: mimic</p>",
    name0: "Quartier Marchand",
    txt0: "<p>Consacré presque entièrement au commerce, le quartier Marchand ne possède pas ce sentiment de communauté que l'on retrouve dans les quartiers plus résidentiels, mais il conserve l'agitation d'un marché tout au long de la journée et de la nuit.</p><p><strong>Couleurs du quartier</strong> : vert et pourpre</p><p><strong>Mascotte</strong> : mimique</p>",
    couleur: "#b3ffcc",
    path: "M 2540,3203 2447,3144 C 2447,3144 2416,3120 2412,3113 2409,3106 2391,3039 2391,3039 L 2366,2965 2324,2963 2291,2932 2271,2889 2262,2834 2247,2797 2207,2770 C 2207,2770 2155,2758 2148,2754 L 2093,2753 2097,2825 2126,3157 2163,3555 2179,4048 2162,4074 2149,4111 2137,4145 2142,4161 2168,4180 2214,4186 2238,4193 2238,4212 2239,4272 2222,4415 2201,4482 2201,4550 2203,4677 2264,4677 2335,4688 2338,4726 2376,4731 2403,4728 2440,4710 2460,4710 2477,4766 2555,4757 2662,4737 2654,4636 2715,4634 2748,4634 2787,4629 2819,4641 2881,4693 2906,4677 2926,4677 2973,4640 3001,4622 3019,4616 3037,4589 2960,4425 2946,4365 2918,4198 2913,4188 2853,4058 2847,4039 2847,4035 2755,4008 2672,3966 2609,3908 2562,3892 2476,3853 2376,3811 2409,3696 2421,3580 2419,3411 2457,3315 2528,3220 Z"
}, {
    name1: "City of the Dead",
    txt1: "<p>This walled enclosure on the eastern edge of Trades Ward is the general cemetery for the City of Splendors. Many citizens visit the City of the Dead's parklike green lawns and white marble tombs during the day, for it is one of the few places dominated by greenery that the citizens of Waterdeep can share within the city walls.</p>",
    name0: "La Cité des Morts",
    txt0: "<p>Cette enceinte fortifiée située à l'extrémité est du quartier Marchand est le cimetière principal de la Cité des Splendeurs. De nombreux citoyens visitent les pelouses vertes et les tombeaux en marbre blanc de la Cité des Morts pendant la journée, car c'est l'un des rares endroits dominés par la verdure que les citoyens de Waterdeep peuvent trouver à l'intérieur des murs de la ville.</p>",
    couleur: "#EE8080",
    path: "M 2982,3080 2902,3015 2823,2952 2712,2961 2598,3076 2556,3180 2540,3203 2528,3220 2457,3315 2419,3411 2421,3580 2409,3696 2376,3811 2476,3853 2562,3892 2609,3908 2672,3966 2755,4008 2847,4035 2850,3858 2888,3680 2914,3482 2919,3299 2990,3101 Z"
}, ];

var groupe = [
{
    name1: "GROUP",
    name2: "",
    color: "#58ACFA",
    x: 0,
    y: 0,
    txt1: "City buildings"
}, {
    name1: "Castle Waterdeep",
    name2: "",
    color: "#58ACFA",
    x: 1781,
    y: 4238,
    txt1: "<p>Thick-walled stronghold that broods over Castle Ward from the flanks of <strong><em>Mount Waterdeep</em></strong>. Pennants and banners are often hung and flown from its battlements to signal the arrival of diplomats or the commencement of ceremonies.</p>",
    ref: "C76"
}, {
    name1: "Palace of Waterdeep",
    name2: "",
    color: "#58ACFA",
    x: 1136,
    y: 3918,
    txt1: "<p>White marble Palace and main office location for many city officials, the majority of which are dedicated to the administration of city services, such as the Watch, the Guard, city clerks, and the Loyal Order of Street Laborers. The ruler of the city - the Open Lord of Waterdeep - resides and works here.</p>",
    ref: "C75"
}, /*{
    name1: "Seaseyes Tower",
    name2: "",
    color: "#58ACFA",
    x: 338,
    y: 2172,
    txt1: "<p>City building</p>",
    ref: "$71"
}, {
    name1: "West Gate",
    name2: "",
    color: "#58ACFA",
    x: 420,
    y: 1759,
    txt1: "<p>City building</p>",
    ref: "$72"
}, {
    name1: "Seawatch Tower",
    name2: "",
    color: "#58ACFA",
    x: 538,
    y: 1429,
    txt1: "<p>City building</p>",
    ref: "$73"
}, {
    name1: "North Tower",
    name2: "",
    color: "#58ACFA",
    x: 1020,
    y: 375,
    txt1: "<p>City building (The Trolltower)</p>",
    ref: "$74"
}, {
    name1: "Trolltower",
    name2: "",
    color: "#58ACFA",
    x: 1020,
    y: 375,
    txt1: "<p>City building</p>",
    ref: "$74"
}, {
    name1: "Armory",
    name2: "",
    color: "#58ACFA",
    x: 1134,
    y: 488,
    txt1: "<p>City building</p>",
    ref: "$75"
}, {
    name1: "Trollfort",
    name2: "",
    color: "#58ACFA",
    x: 824,
    y: 221,
    txt1: "<p>City building</p>",
    ref: "$79"
}, {
    name1: "Guard Barracks #1",
    name2: "",
    color: "#58ACFA",
    x: 2125,
    y: 965,
    txt1: "<p>City building</p>",
    ref: "N1"
}, {
    name1: "Guard Barracks #2",
    name2: "",
    color: "#58ACFA",
    x: 1127,
    y: 3768,
    txt1: "<p>City building</p>",
    ref: "C19"
}, {
    name1: "Guard Barracks #3",
    name2: "",
    color: "#58ACFA",
    x: 1131,
    y: 3675,
    txt1: "<p>City building</p>",
    ref: "C19"
}, {
    name1: "Guard Barracks #4",
    name2: "",
    color: "#58ACFA",
    x: 2802,
    y: 6188,
    txt1: "<p>City building</p>",
    ref: "D56"
}, {
    name1: "North Gate",
    name2: "",
    color: "#58ACFA",
    x: 2156,
    y: 559,
    txt1: "<p>City building</p>",
    ref: "N78"
}, {
    name1: "Farwatch Tower",
    name2: "",
    color: "#58ACFA",
    x: 2743,
    y: 1177,
    txt1: "<p>City building</p>",
    ref: "N79"
}, {
    name1: "Endcliff Tower",
    name2: "",
    color: "#58ACFA",
    x: 2984,
    y: 2202,
    txt1: "<p>City building</p>",
    ref: "N80"
}, {
    name1: "Upper Towers",
    name2: "",
    color: "#58ACFA",
    x: 2079,
    y: 911,
    txt1: "<p>City building</p>",
    ref: "N82"
}, {
    name1: "Palace Paddocks",
    name2: "",
    color: "#58ACFA",
    x: 1088,
    y: 3709,
    txt1: "<p>City building</p>",
    ref: "C16"
}, {
    name1: "Palace Stables",
    name2: "",
    color: "#58ACFA",
    x: 1079,
    y: 3772,
    txt1: "<p>City building</p>",
    ref: "C17"
}, {
    name1: "Bell Tower",
    name2: "",
    color: "#58ACFA",
    x: 1985,
    y: 4317,
    txt1: "<p>City building</p>",
    ref: "C46"
}, {
    name1: "Guard Smithy",
    name2: "",
    color: "#58ACFA",
    x: 2177,
    y: 4333,
    txt1: "<p>City building</p>",
    ref: "C47"
}, {
    name1: "Guard Tower",
    name2: "",
    color: "#58ACFA",
    x: 2849,
    y: 4034,
    txt1: "<p>City building</p>",
    ref: "CD12"
}, {
    name1: "Watch Guardpost",
    name2: "",
    color: "#58ACFA",
    x: 2654,
    y: 5286,
    txt1: "<p>City building</p>",
    ref: "S36"
}, */{
    name1: "Peaktop Aerie",
    name2: "",
    color: "#58ACFA",
    x: 933,
    y: 4021,
    txt1: "<p>Home of the city's famed Griffon Cavalry</p>",
    ref: "C67"
}, /*{
    name1: "Watching Tower #1",
    name2: "",
    color: "#58ACFA",
    x: 1024,
    y: 3805,
    txt1: "<p>City building</p>",
    ref: "C68"
}, {
    name1: "Watching Tower #2",
    name2: "",
    color: "#58ACFA",
    x: 497,
    y: 4952,
    txt1: "<p>City building</p>",
    ref: "C69"
}, {
    name1: "Ahghairon's Tower",
    name2: "",
    color: "#58ACFA",
    x: 1265,
    y: 3980,
    txt1: "<p>City building</p>",
    ref: "C79"
}, {
    name1: "River Gate",
    name2: "",
    color: "#58ACFA",
    x: 2944,
    y: 4398,
    txt1: "<p>City building</p>",
    ref: "T48"
}, {
    name1: "Watchway Tower",
    name2: "",
    color: "#58ACFA",
    x: 2990,
    y: 3098,
    txt1: "<p>City building</p>",
    ref: "CD11"
}, {
    name1: "Beacon Tower",
    name2: "",
    color: "#58ACFA",
    x: 2813,
    y: 2950,
    txt1: "<p>City building</p>",
    ref: "CD13"
}, {
    name1: "Cookhouse Hall",
    name2: "",
    color: "#58ACFA",
    x: 2825,
    y: 6185,
    txt1: "<p>City building</p>",
    ref: "D57"
}, {
    name1: "South Gate",
    name2: "",
    color: "#58ACFA",
    x: 3041,
    y: 5994,
    txt1: "<p>City building</p>",
    ref: "S52"
}, {
    name1: "East Torch Tower",
    name2: "",
    color: "#58ACFA",
    x: 2884,
    y: 6210,
    txt1: "<p>City building</p>",
    ref: "S53"
}, {
    name1: "Harborwatch Tower",
    name2: "",
    color: "#58ACFA",
    x: 540,
    y: 5198,
    txt1: "<p>City building</p>",
    ref: "H1"
}, {
    name1: "Smugglers' Bane Tower",
    name2: "",
    color: "#58ACFA",
    x: 365,
    y: 5852,
    txt1: "<p>City building</p>",
    ref: "H2"
}, {
    name1: "Outer Fort",
    name2: "",
    color: "#58ACFA",
    x: 796,
    y: 6348,
    txt1: "<p>City building</p>",
    ref: "H3"
}, {
    name1: "Inner Fort",
    name2: "",
    color: "#58ACFA",
    x: 2382,
    y: 6636,
    txt1: "<p>City building</p>",
    ref: "H4"
}, {
    name1: "Deepwater Beacon",
    name2: "",
    color: "#58ACFA",
    x: 3078,
    y: 6644,
    txt1: "<p>Underwater lighthouse, lit by a magical light which guides the merfolk patrols.</p>",
    ref: "H7"
}, {
    name1: "Troll Gate",
    name2: "",
    color: "#58ACFA",
    x: 825,
    y: 177,
    txt1: "<p>City building</p>"
}, */{
    name1: "The God Catcher",
    name2: "",
    color: "#58ACFA",
    x: 1576,
    y: 2402,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This is perhaps the most famous walking statue in the city, thanks to its dramatic pose : a well-muscled but impassive male human with a sphere of stone floating above its right hand raised skyward.</p>"
}, {
    name1: "The Griffon",
    name2: "",
    color: "#58ACFA",
    x: 987,
    y: 4106,
    txt1: "<p>The walking statue called the Griffon is shaped like the beast for which it is named. Though it stands on all four legs, its back is fully twenty feet off the ground, making it a mount fit for a storm giant. Although it has shown itself to be capable of flight, with the granite feathers of its wings spreading like a bird's, the Griffon now merely stands in a regal pose near Peaktop Aerie atop Mount Waterdeep, looking to the southeast over the Dock Ward. Newcomers sometimes assume it to be a monument to Waterdeep's Griffon Cavalry, but Waterdavians know better.</p>"
}, {
    name1: "The Sahuagin Humbled",
    name2: "",
    color: "#58ACFA",
    x: 586,
    y: 2451,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. For years, the only visible walking statue of Waterdeep.</p>"
}, {
    name1: "The Great Drunkard",
    name2: "",
    color: "#58ACFA",
    x: 1850,
    y: 2954,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. The unconscious pose of the statue and the tavern in its lap made the name of the Great Drunkard a natural fit.</p>"
}, {
    name1: "The Lady Dreaming",
    name2: "",
    color: "#58ACFA",
    x: 950,
    y: 3086,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This statue has the appearance of a titanic sculpture of a noble lady asleep in her garden.</p>"
}, {
    name1: "The Honorable Knight",
    name2: "",
    color: "#58ACFA",
    x: 2349,
    y: 4694,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. The Honorable Knight is a statue of a male warrior in plate armor with a shield and a longsword.</p>"
}, {
    name1: "The Hawk Man",
    name2: "",
    color: "#58ACFA",
    x: 1774,
    y: 3795,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This statue looks like a winged, hawk-headed being, and thus locals call it the Hawk Man.</p>"
}, {
    name1: "The Swordmaiden",
    name2: "",
    color: "#58ACFA",
    x: 2626,
    y: 2176,
    txt1: "<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This statue appears virtually identical to the Honorable Knight, except for its female form and open-faced helm.</p>"
},
{
    name1: "GROUP",
    name2: "",
    color: "#FF0000",
    x: 0,
    y: 0,
    txt1: "Inns, Taverns, Festhalls"
}, /* {
    name1: "Sated Satyr",
    name2: "",
    color: "#FF0000",
    x: 1040,
    y: 466,
    txt1: "<p>Tavern</p>",
    ref: "$1"
}, {
    name1: "Wyvern's Rest",
    name2: "",
    color: "#FF0000",
    x: 844,
    y: 733,
    txt1: "<p>Inn. Mercenaries.</p>",
    ref: "$2"
}, {
    name1: "Golden Harp Inn",
    name2: "",
    color: "#FF0000",
    x: 1980,
    y: 1013,
    txt1: "<p>Inn</p>",
    ref: "$4"
}, {
    name1: "The Fiery Flagon",
    name2: "",
    color: "#FF0000",
    x: 636,
    y: 1600,
    txt1: "<p>Tavern. Famous among sailors up and down the Sword Coast, who throng to visit it when they make land at the city. The proprietor is named Ulscaleer Anbersyr, a retired sea captain.</p>",
    ref: "$37"
}, {
    name1: "Dacer's Inn",
    name2: "",
    color: "#FF0000",
    x: 690,
    y: 1654,
    txt1: "<p>Inn. This fine old inn caters to rich sailors who want to stagger to bed from the Fiery Flagon as late as possible and to the constant trade of pilgrims and others visiting the temple. Dacer's is a quiet, luxurious place to stay. Proprietress: Amasanna Vumendir.</p>",
    ref: "$39"
}, {
    name1: "The Ship's Wheel",
    name2: "",
    color: "#FF0000",
    x: 554,
    y: 1777,
    txt1: "<p>Tavern. Probably the safest tavern you'll ever see. This is the place for those with too much money or too many years to want to go to Gounar's Tavern. Proprietor: Olhin Shalut.</p>",
    ref: "$41"
}, {
    name1: "The Pilgrim's Rest",
    name2: "",
    color: "#FF0000",
    x: 614,
    y: 1770,
    txt1: "<p>Inn. It's usually crammed with faithful worshippers who have come to the city to visit one of the temples. Proprietor: Balaghast Brightlingar is an exwarrior.</p>",
    ref: "$42"
}, {
    name1: "The Wandering Wemic",
    name2: "",
    color: "#FF0000",
    x: 661,
    y: 1760,
    txt1: "<p>Inn. It provides a good place for wealthy merchants who want no trouble over a place to stay, but no food. Proprietor: Cheth Thanion</p>",
    ref: "$43"
}, {
    name1: "Maerghoun's Inn",
    name2: "",
    color: "#FF0000",
    x: 781,
    y: 1713,
    txt1: "<p>This old, opulent inn is much favored by young couples and by Waterdeep's paid escorts. No food or drink is available. Utmost discretion is observed. The inn is used by many to conduct sensitive business deals.</p>",
    ref: "$45"
}, {
    name1: "Gounar's Tavern",
    name2: "",
    color: "#FF0000",
    x: 716,
    y: 1817,
    txt1: "<p>One of the most brightly lit taverns. It's bright because citizens go here to be seen. If you want to be noticed in Waterdhavian high society, this is the place. Doblin Gounar is the proprietor.</p>",
    ref: "$55"
}, {
    name1: "The Broken Lance",
    name2: "",
    color: "#FF0000",
    x: 1103,
    y: 2040,
    txt1: "<p>Tavern. Mercenaries.</p>",
    ref: "$59"
}, {
    name1: "The Silken Slyph",
    name2: "",
    color: "#FF0000",
    x: 722,
    y: 1388,
    txt1: "<p>Tavern/inn</p>",
    ref: "$61"
}, {
    name1: "The Raging Lion",
    name2: "",
    color: "#FF0000",
    x: 2886,
    y: 1700,
    txt1: "<p>Inn. This little-known, fine old inn is highly recommended. It is a quiet refuge from the bustle of the city being as close to the east wall as one can get. Dwarves and at least three bands of lady adventurers have adopted this place. Some live here permanently, helping the proprietor Lhaerhlin Masram keep order, and others use it as a base between expeditions.</p>",
    ref: "N21"
}, {
    name1: "A Maiden's Tears",
    name2: "",
    color: "#FF0000",
    x: 2856,
    y: 1780,
    txt1: "<p>Tavern. Soft lighting, deftly quiet service, and curtained booths make this a perfect and popular place for meetings, both for private intrigue, and encounters with ladies of the evening. The Tears is rated highly for its privacy and quiet. Zobia Shrinsha is the proprietress.</p>",
    ref: "N25"
}, {
    name1: "Twilight Hunters",
    name2: "",
    color: "#FF0000",
    x: 2803,
    y: 1893,
    txt1: "<p>Tavern</p>",
    ref: "N26"
}, {
    name1: "The Misty Beard",
    name2: "",
    color: "#FF0000",
    x: 2925,
    y: 2022,
    txt1: "<p>Tavern. This clean, well-mannered tavern rises four floors above the street. The half-elven mages who own the place are two wand-wielding sisters, Allet and Vindara Tzuntzin, who once ran the Black Gryphon inn in Elturel. The bartender at the Beard is Munzrim Marlpar, a dignified, fearless lizard man of unusual height and intellect.</p>",
    ref: "N32"
}, {
    name1: "The Galloping Minotaur",
    name2: "",
    color: "#FF0000",
    x: 1968,
    y: 2469,
    txt1: "<p>Inn. Widely known among travelers for its convenient location for market vendors, it's rare to find lodgings here because the keeper, Waendel Uthrund, has instituted the city's first system of advance bookings. The cheaper rooms are located in the former warehouse, above the stables and below the servants.</p>",
    ref: "N47"
}, {
    name1: "Greenglade Tower",
    name2: "",
    color: "#FF0000",
    x: 2222,
    y: 2689,
    txt1: "<p>Rooming house.</p>",
    ref: "N71"
}, {
    name1: "The Grinning Lion",
    name2: "",
    color: "#FF0000",
    x: 2493,
    y: 2646,
    txt1: "<p>Raucous tavern adorned with (faked) battle trophies from all over Faerun. The music is loud. Food consists only of platters of fried onions and eels; Folk really come here to drink. Unger Farshal runs the Grinning Lion.</p>",
    ref: "N56"
}, {
    name1: "Silent Shield",
    name2: "",
    color: "#FF0000",
    x: 2471,
    y: 1509,
    txt1: "<p>Inn/storage. The Silent Shield is named for its secrecy. It offers secure, private storage of items or folk who are trying to hide, including adventurers or their diseased, sick, wounded, or dead companions. (Corpses are kept on ice. The others are tended carefully by the proprietors.)</p>",
    ref: "N65"
}, {
    name1: "The Singing Sword",
    name2: "",
    color: "#FF0000",
    x: 1919,
    y: 2790,
    txt1: "<p>Tavern. Three floors of busy diners enjoy one of the largest menus in Waterdeep. They are entertained by the high-voiced ballads of the wondrous magical blade for which the tavern is named. Gothmorgan Ilibuld, the proprietor, is a polite host.</p>",
    ref: "C9"
}, {
    name1: "The Pampered Traveler",
    name2: "",
    color: "#FF0000",
    x: 2012,
    y: 3301,
    txt1: "<p>Inn</p><p>This inn stands like an exotic castle. There is inside a library filled with books and a reading table with a glass top, under which can be seen a map of the known Realms as far west as the Moonshaes, as far east as Thay, and as far south as the Shaar. All in all, a quietly luxurious place to stay. This is undoubtedly the wealthy scholar's choice of hostel. The inn is run by Brathan Zilmer, guildmaster of the Fellowship of Innkeepers.</p>",
    ref: "C11"
}, {
    name1: "Mighty Manticore Tavern",
    name2: "",
    color: "#FF0000",
    x: 1439,
    y: 3418,
    txt1: "<p>Tavern</p>",
    ref: "C12"
}, {
    name1: "The Crawling Spider",
    name2: "",
    color: "#FF0000",
    x: 1808,
    y: 3725,
    txt1: "<p>Tavern. This strange place with underground decor - glowing mosses and lichens on the walls and ceiling, dim light, spiders affixed to the ceiling, waitresses with black bodysuits and masks to make them look like drow - never seems to close. Dwarves, half-orcs, and other subterranean dwellers who miss home come here to drink. The tavern's proprietress is Welvreene Thalmit.</p>",
    ref: "C20"
}, { 
    name1: "The Dragon's Head Tavern",
    name2: "",
    color: "#FF0000",
    x: 1330,
    y: 3943,
    txt1: "<p>Tavern. This modest place is aimed at those who like to sit quietly and chat over their drinks. The proprietor is Vorn Laskadarr.</p>",
    ref: "C24"
}, {
    name1: "The Asp's Strike",
    name2: "",
    color: "#FF0000",
    x: 1254,
    y: 4068,
    txt1: "<p>Tavern</p>",
    ref: "C30"
}, {
    name1: "The Elfstone Tavern",
    name2: "",
    color: "#FF0000",
    x: 1907,
    y: 3948,
    txt1: "<p>Tavern. This old, dimly lit tavern caters to elves. By night, dancing lights spells bathe the place in soft, floating, blue motes of light. Gentle harp, pipe, flute, and choral music is performed and service is fast and graceful. Dwarves and half-orcs will be driven away; humans and halflings are tolerated in small parties; half-elves are just accepted. Yaereene Ilbaereth is the tavern's proprietress.</p>",
    ref: "C32"
}, {
    name1: "The Blue Jack",
    name2: "",
    color: "#FF0000",
    x: 2137,
    y: 4000,
    txt1: "<p>Tavern. The tavern specializes in low prices and fast service, and it's a success. Immithar the Glove, the tavern's proprietor, is quick with a joke or to mimic the speech of other.</p>",
    ref: "C35"
}, {
    name1: "The Jade Jug",
    name2: "",
    color: "#FF0000",
    x: 2140,
    y: 4022,
    txt1: "<p>Inn</p><p>Waterdeep's plushest inn. Guests are attended by a personal servant for the duration of their stay and their every need is attended to. The charming, beautiful, one-armed hostess is Amaratha Ruendarr. She notices every detail.</p>",
    ref: "C38"
}, */ {
    name1: "The Yawning Portal",
    name2: "",
    color: "#FF0000",
    x: 2053,
    y: 4472,
    txt1: "<p>Inn. Built in 1306 DR on the ruins of Halaster Blackcloak's old tower, the Yawning Portal gained most of its renown for being the primary open route to the Undermountain. The Portal's innkeeper, Durnan, is a former adventurer of great power and renown.</p>",
    ref: "C48"
}, /* {
    name1: "The Red-Eyed Owl",
    name2: "",
    color: "#FF0000",
    x: 2151,
    y: 4504,
    txt1: "<p>This is the closest thing Waterdeep has to a comfortable, unimpressive, welcoming gathering place for the neighborhood. It is the kind of place where friends will come in and hail each other across the room. The food and drink are pleasant, if unspectacular, and you'll be allowed to sit in peace. It is a rambling old wooden building that looks as if it's about to fall into the street. Balarg 'Twofists' Dathen, a man with long, red hair, owns and runs the tavern.</p>",
    ref: "C49"
}, {
    name1: "The Sleepy Sylph",
    name2: "",
    color: "#FF0000",
    x: 2183,
    y: 4492,
    txt1: "<p>Tavern. Locals in the neighborhood come here for a single drink, to enjoy the music and to watch the waitresses (wearing diaphanous robe), and then go to the Owl, just steps away to eat and drink at about a third the price. The owner is Callanter Rollingshoulder, a tall man dressed in dark silken robes with a magnificent mustache.</p>",
    ref: "C50"
}, {
    name1: "The Quaffing Quaggoth",
    name2: "",
    color: "#FF0000",
    x: 1263,
    y: 4672,
    txt1: "<p>Tavern. A favorite among sailors, merchants, and young nobles, this dwarven owned and operated establishment is known for its own specialty brew – the Quaggoth, a thick house-brewed stout mixed with a shot of a house secret liquor.</p>",
    ref: "C53"
}, {
    name1: "The Sailors' Own",
    name2: "",
    color: "#FF0000",
    x: 1237,
    y: 4868,
    txt1: "<p>Tavern. The place is low-beamed and crowded, with weary sailors slumped on benches playing at board games, cards, or merely getting thoroughly drunk. This place is just what its name implies. It belongs to the sailors, and they don't really want anyone else here. The proprietor is Guthlakh 'Hands' Imyiir.</p>",
    ref: "C54"
}, {
    name1: "Tavern of the Flagon Dragon",
    name2: "",
    color: "#FF0000",
    x: 1071,
    y: 2856,
    txt1: "<p>Tavern. Three Stories high, stone dragons at the base of the walls are all gouting fire, two dragon helmed guards at the door. Caters more to the less-than-noble class.</p>",
    ref: "C59"
}, {
    name1: "Sapphire House",
    name2: "",
    color: "#FF0000",
    x: 1053,
    y: 2824,
    txt1: "<p>Expensive rooming house on Swords Street. The inn is a five-story building.</p>",
    ref: "C60"
}, {
    name1: "Azuth's Mug",
    name2: "",
    color: "#FF0000",
    x: 1981,
    y: 4427,
    txt1: "<p>Tavern</p>",
    ref: "C73"
}, {
    name1: "Wyrmbones Inn",
    name2: "",
    color: "#FF0000",
    x: 2121,
    y: 3559,
    txt1: "<p>Inn</p>",
    ref: "C78"
}, {
    name1: "The Underdark",
    name2: "",
    color: "#FF0000",
    x: 2625,
    y: 4690,
    txt1: "<p>Tavern</p>",
    ref: "T1"
}, {
    name1: "Inn of the Dripping Dagger",
    name2: "",
    color: "#FF0000",
    x: 2192,
    y: 3404,
    txt1: "<p>The walls of this old inn are fieldstone at street level and timber for three upper floors. The owner of the inn, a former adventurer named Tessele Swiftwater, employs an extensive staff of waitresses, kitchen staff, chambermaids, hostlers and a minotaur bouncer named Thoat. The food is tasty and plentiful.</p>",
    ref: "T3"
}, {
    name1: "Gondalim's",
    name2: "",
    color: "#FF0000",
    x: 2228,
    y: 3737,
    txt1: "<p>Inn. A worn but comfortable place, and because of its massive construction, it's also very quiet. You'll seldom hear noises from other guests at night. Shulmeira Gondalim is the proprietress.</p>",
    ref: "T8"
}, {
    name1: "Maelstrom's Notch",
    name2: "",
    color: "#FF0000",
    x: 2439,
    y: 3918,
    txt1: "<p>Inn</p>",
    ref: "T13"
}, {
    name1: "The Unicorn's Horn",
    name2: "",
    color: "#FF0000",
    x: 2218,
    y: 4018,
    txt1: "<p>Inn. The furnishings are opulent, but not very tasteful. Huge tapestries and heavily gilded, massive pieces of furniture are everywhere. The canopied beds are the only comfortable place to sit in the entire inn. All in all, it is impressive, but not relaxing, or worth the money. Quendever Ilistrym owns and runs this inn.</p>",
    ref: "T15"
}, {
    name1: "The Gentle Rest",
    name2: "",
    color: "#FF0000",
    x: 2583,
    y: 4175,
    txt1: "<p>The Gentle Rest is an old, large, comfortable inn. The inn has five floors and a stable located on an alley behind the inn. The current proprietor is Marlak Buckman, a jovial, stout, middle-aged man of average height. He greets guests warmly, saying 'Welcome to the Gentle Rest. May I fetch you a cup of wine or a tankard of ale? Or perhaps you seek lodging?' The Gentle Rest has smooth, wooden floors and walls with typical furnishings for an inn. The shortest way to the stables is the back door of the inn. If you use the front door, you must circle around a long block of buildings to reach the Gentle Rest stables. The Gentle Rest stables are sizeable and a cobblestone apron provides an area for rigging wagons and carriages. Inside are typical horse stalls and a hay loft. Towards the back is space for wagon and cart storage.</p>",
    ref: "T32"
}, {
    name1: "The Bowels of the Earth",
    name2: "",
    color: "#FF0000",
    x: 2254,
    y: 4306,
    txt1: "<p>Tavern. It is a cheap but cozy dive. If you're a mercenary or an adventurer or are looking to meet or hire one or the other, you must go to this place. The bartender is Ongamar Talthloon.</p>",
    ref: "T36"
}, */ {
    name1: "Felzoun's Folly",
    name2: "",
    color: "#FF0000",
    x: 2731,
    y: 4330,
    txt1: "<p>Tavern. A noisy crowded, casual place. Felzoun's Folly has been around for a very long time, and not everything that goes on there is believed to be legal.</p>",
    ref: "T39"
}, /* {
    name1: "The Gray Serpent",
    name2: "",
    color: "#FF0000",
    x: 2487,
    y: 4645,
    txt1: "<p>Inn. New expensive and high-class establishment. The furnishings are so clean and luxurious that this place outshines some noble villas.</p>",
    ref: "T43"
}, {
    name1: "The Singed Bolt",
    name2: "",
    color: "#FF0000",
    x: 2700,
    y: 4427,
    txt1: "<p>Tavern</p>",
    ref: "T49"
}, {
    name1: "The Gray Griffon",
    name2: "",
    color: "#FF0000",
    x: 1588,
    y: 4590,
    txt1: "<p>Tavern</p>",
    ref: "D1"
}, {
    name1: "Selune's Smile",
    name2: "",
    color: "#FF0000",
    x: 1701,
    y: 4948,
    txt1: "<p>Tavern</p>",
    ref: "D6"
}, {
    name1: "The Rearing Hippocampus",
    name2: "",
    color: "#FF0000",
    x: 1822,
    y: 4926,
    txt1: "<p>Inn. Probably the classiest inn in Dock Ward. Favored by many caravan masters and merchants who want a good, secure place to sleep, and regular visitors to the city who have business near the harbor.</p>",
    ref: "D7"
}, {
    name1: "The Splintered Stair",
    name2: "",
    color: "#FF0000",
    x: 1984,
    y: 4993,
    txt1: "<p>Inn. The entry hall of this room rises up three floors, overlooked by interior balconies linked by elegantly spiraling stairs.</p>",
    ref: "D8"
}, {
    name1: "The Blackstar Inn",
    name2: "",
    color: "#FF0000",
    x: 2113,
    y: 4869,
    txt1: "<p>This dignified, even haughty inn is like a fortress on the outside, with barred windows, stone walls, and a slate roof. Its lobby has two armed guards, and the four hostlers in the locked stables are also armed. Fees are high, but in return, guests get almost soundproof rooms. Each room has a hip-bath, a double bed, water and wine provided for drinking and various pamphlets and chapbooks provided for light reading. Each room also has its own fireplace, albeit with a miserly supply of firewood, and the patrons tend to keep to themselves. A good place to get a long soundsleep. Asiyra Boldwinter is the proprietress of this inn. Her manner is one of uppercrust, noble dignity.</p>",
    ref: "D9"
}, {
    name1: "The Ship's Prow",
    name2: "",
    color: "#FF0000",
    x: 1893,
    y: 5170,
    txt1: "<p>Inn. The Ship's Prow rises four floors above the street. This inn is well-known among sailors up and down the Sword Coast. Its best suited to folk who can stand the fishy stink of deep-sea traps and brine barrels', and the noises of dock work, drunken revelry and fighting, the night throughwafting into their rooms. The master of the house is a one-eyed, scarred and silver-bearded retired sailor, Jhambrote Harkhardest.</p>",
    ref: "D11"
}, {
    name1: "The Thirsty Sailor",
    name2: "",
    color: "#FF0000",
    x: 1965,
    y: 5181,
    txt1: "<p>This decrepit old tavern has boarded-up windows and careless repairs. The interior is smoky and the repulsive odor of tar, stale beer, sour wine, sweat, and worse fills the air. The patrons divide their time here by drinking, singing bawdy songs and brawling. No female staff or patrons grace the Thirsty Sailor, not even female sailors or dockworkers.</p>",
    ref: "D12"
}, {
    name1: "The Thirsty Throat",
    name2: "",
    color: "#FF0000",
    x: 2484,
    y: 5037,
    txt1: "<p>Tavern. This ramshackle assembly of wood amazes all by not fallen down. This place is full of quiet men drinking themselves into slumber with a handful of coppers.</p>",
    ref: "D13"
}, {
    name1: "Warm Beds",
    name2: "",
    color: "#FF0000",
    x: 2045,
    y: 5308,
    txt1: "<p>Inn. This establishment delivers just what it promises - and little more. Each bed is warmed by three heated stones placed in it before the renter retires. There is hot water available for washing, heated by the bucket beside the same giant hearth that warms the bedstones. Rooms with one to four single beds are available. This inn has no stabling (most patrons sell their mounts or stable them at a caravan stable in South Ward), and provides no food of any kind. Quiet is expected after dark, but as long as there's no noise above low-pitched voices, renters can use their rooms for whatever purpose they please, such as conferences or meetings.</p>",
    ref: "D15"
}, {
    name1: "The Bloody Fist",
    name2: "",
    color: "#FF0000",
    x: 2240,
    y: 5226,
    txt1: "<p>Tavern. Bullies and angry people come here to pick fights, and a room upstairs is retained for a succession of novice priests of Tempus who dress broken bones and perform minor healing magics in return for donations to the war god. Members of the Bull Elk Tribe can usually be found drinking here. Proprietor: Uglukh Vorl, a half-orc.</p>",
    ref: "D17"
}, {
    name1: "The Sleeping Wench",
    name2: "",
    color: "#FF0000",
    x: 2286,
    y: 5488,
    txt1: "<p>Tavern. This tavern is a quieter, cheaper alternative to the Sleeping Snake. There's still dancing on the tables and the cheaper sort of drink, but this place has a better class of clientele and background music.</p>",
    ref: "D23"
}, {
    name1: "The Blue Mermaid",
    name2: "",
    color: "#FF0000",
    x: 2156,
    y: 5572,
    txt1: "<p>The Blue Mermaid tavern is a respectable establishment with decent food at a good price whose clientele is normally sailors and dockworkers looking for a quiet place to eat. The manager is a man named Stevian.</p>",
    ref: "D27"
}, {
    name1: "The Hanged Man",
    name2: "",
    color: "#FF0000",
    x: 2324,
    y: 5565,
    txt1: "<p>Tavern. A gathering place for poets, scriveners, writers, calligraphers, and other literary folk, and a good place to hear a tale. Auldenuth Orbrymm is the proprietor.</p>",
    ref: "D32"
}, {
    name1: "The Sleeping Snake",
    name2: "",
    color: "#FF0000",
    x: 2474,
    y: 5774,
    txt1: "<p>Tavern. This rowdy place is roughly furnished in hastily mended furniture. Members of the Black Boar Tribe can usually be found drinking here.</p>",
    ref: "D41"
}, {
    name1: "Shipmasters' Hall",
    name2: "",
    color: "#FF0000",
    x: 2574,
    y: 5804,
    txt1: "<p>Inn</p>",
    ref: "D42"
}, {
    name1: "The Pickled Fisherman",
    name2: "",
    color: "#FF0000",
    x: 1490,
    y: 4862,
    txt1: "<p>Tavern</p>",
    ref: "D58"
}, {
    name1: "The Soaring Pegasus",
    name2: "",
    color: "#FF0000",
    x: 1549,
    y: 4881,
    txt1: "<p>Tavern</p>",
    ref: "D59"
}, {
    name1: "The Angry Coxswain",
    name2: "",
    color: "#FF0000",
    x: 1784,
    y: 5222,
    txt1: "<p>The tavern contains a one-way portal connecting with a prison cell in the slave market in the Mulhorandi city of Skuld.</p>",
    ref: "D67"
}, {
    name1: "Sailor's Corner",
    name2: "",
    color: "#FF0000",
    x: 1660,
    y: 5045,
    txt1: "<p>Inn</p>",
    ref: "D73"
}, {
    name1: "Darth's Dolphyntyde",
    name2: "",
    color: "#FF0000",
    x: 1860,
    y: 4773,
    txt1: "<p>Tavern</p>",
    ref: "D74"
}, {
    name1: "The Swords' Rest",
    name2: "",
    color: "#FF0000",
    x: 2694,
    y: 4717,
    txt1: "<p>Tavern. This quiet, little-known tavern is the warriors' drinking place, the chosen watering hole of those who swing swords for a living. It is a good place to hire out-ofwork fighting men. The proprietor, Beliarge 'Old Boar' Maduskar, is called Bel by his friends.</p>",
    ref: "S1"
}, {
    name1: "Midnight Sun",
    name2: "",
    color: "#FF0000",
    x: 2662,
    y: 5176,
    txt1: "<p>Tavern</p>",
    ref: "S9"
}, {
    name1: "The Full Cup",
    name2: "",
    color: "#FF0000",
    x: 2997,
    y: 5506,
    txt1: "<p>Tavern. One of the seediest drinking holes in Waterdeep, this battered place is used by bad-tempered drovers and carters. It's a small, dim place dominated by a long bar with stools and an impressive, but largely dustcovered, selection of bottles behind it. The city watch searches here regularly for stolen items and the like. Gulth Djanczo is the proprietor.</p>",
    ref: "S14"
}, {
    name1: "The Spouting Fish",
    name2: "",
    color: "#FF0000",
    x: 2646,
    y: 5729,
    txt1: "<p>Tavern. Large, noisy, and popular, this brightly lit establishment succeeds largely because of its relentless street-crying advertising and its strategic location. Proprietress: Janess Imristar.</p>",
    ref: "S18"
}, {
    name1: "The Red Gauntlet",
    name2: "",
    color: "#FF0000",
    x: 2765,
    y: 5806,
    txt1: "<p>Tavern. This old, highbrow place is dimly lit and always full of old men rememtering bering old battles and slightly shady merchants conducting slightly shady deals in low, mutering voices.</p>",
    ref: "S22"
}, {
    name1: "The Safehaven Inn",
    name2: "",
    color: "#FF0000",
    x: 2709,
    y: 5330,
    txt1: "<p>Inn</p>",
    ref: "S41"
}, {
    name1: "The Beer Golem",
    name2: "",
    color: "#FF0000",
    x: 2693,
    y: 5361,
    txt1: "<p>Tavern</p>",
    ref: "S43"
}, {
    name1: "Tymora's Blessing",
    name2: "",
    color: "#FF0000",
    x: 2597,
    y: 5358,
    txt1: "<p>Tavern. Mercenaries.</p>",
    ref: "S47"
}, {
    name1: "The Endshift Tavern",
    name2: "",
    color: "#FF0000",
    x: 2832,
    y: 1175,
    txt1: "<p>A tavern in the Field Ward at the corner of Endshift Street and the Breezeway. It's frequented by off-duty members of the city guard.</p>"
}, {
    name1: "The Friendly Flounder",
    name2: "",
    color: "#FF0000",
    x: 2334,
    y: 4940,
    txt1: "<p>The Friendly Flounder is an unspectacular fare with a modest structure that keep it unknown to most visitors of Waterdeep, but it is a real find for those that like to not be bothered while eating and drinking.</p>"
}, */ {
    name1: "Frewn's Brews",
    name2: "",
    color: "#FF0000",
    x: 2320,
    y: 1635,
    txt1: "<p>A relatively new tavern with shoddy workmanship. Owner: Emmek Frewn.</p>"
}, /* {
    name1: "The Dancing Dagger",
    name2: "",
    color: "#FF0000",
    x: 3368,
    y: 2963,
    txt1: "<p>Inn. A merry and lively Inn boasting a resident bard, Trilian Arkalyn, and known as a safe meeting place for off the books 'businesss'.</p>"
}, {
    name1: "The Empty Keg",
    name2: "",
    color: "#FF0000",
    x: 2097,
    y: 4472,
    txt1: "<p>The Empty Keg is a rowdy beer-hall. Later at night, it sees visits from workers from Mother Salinka's next door to reinvigorate business there.</p>"
}, {
    name1: "Tarth's Towers",
    name2: "",
    color: "#FF0000",
    x: 1222,
    y: 1684,
    txt1: "<p>Luxury Inn</p>"
}, {
    name1: "Oblarth's Gryphon",
    name2: "",
    color: "#FF0000",
    x: 1968,
    y: 1880,
    txt1: "<p>Luxury Inn</p>"
}, {
    name1: "Dauntlyn's Doors",
    name2: "",
    color: "#FF0000",
    x: 2022,
    y: 3184,
    txt1: "<p>Luxury Inn</p>"
}, {
    name1: "Bard inn",
    name2: "",
    color: "#FF0000",
    x: 1616,
    y: 4919,
    txt1: "<p>A cozy inn owned by a family of past adventurers, it appears to have been fixed up recently. Most of its visitors are sailors, but it has been known to house meetings between gangs in order to keep the peace. In the basement is a hidden underground fighting ring.</p>"
}, {
    name1: "The Tao Wall Street's Pub",
    name2: "",
    color: "#FF0000",
    x: 2967,
    y: 4481,
    txt1: "<p>The lendary warrior Taozrens once lived within these walls in the Wall Street, near the River Gate. He and his family, with a total of 6 children, shared stories of his greatness for years near the hearth. Now, years after his death in the Dungeon of the Mad Mage, a new pub is founded in the place. The innkeeper is Elmira, an older woman with great kitchen skills and even greater stories to tell. Every third day of each month, the stage is open to all and adventurers from Faerun come to share their's stories, just like Taozrens once did with his family.</p>"
}, {
    name1: "The Sleeping Dog",
    name2: "",
    color: "#FF0000",
    x: 1479,
    y: 4600,
    txt1: "<p>The Sleeping Dog is a quiet boarding house run by a sweet old halfling woman named Terricott Calumn, Terri to her friends and guests. Rooms are reasonably priced and clean. She gets a great deal of her business from The Yawning Portal and is quite friendly with Bonny (a doppelganger barmaid at the Portal). She does not tolerate roughhousing or shenanigans in her establishment and employs a burly dwarf named Grady (a retired adventurer with the stats of a veteran) who does the heavy lifting around the place and ejects any customers who don't comply with the rules. He is very much in love with Terricott, though he would never admit it and claims he is far too old for such nonsense. Terricott loves him in return, just not in the same way.</p>"
}, */ {
    name1: "The Careless Leaf",
    name2: "",
    color: "#FF0000",
    x: 2420,
    y: 1588,
    txt1: "<p>Tavern. An old Inn that was recently re-opened as a tavern by the Trollslayer's of Trollskull Alley. Famous for having a ghost by the name of Lif as a bartender.</p>",
    ref: "T1"
}, /* {
    name1: "Knight N' Shadow",
    name2: "",
    color: "#FF0000",
    x: 2246,
    y: 5092,
    txt1: "<p>The Knight N' Shadow is a two story tavern. The tavern is shabby and populated by criminals and others who wish to hide their business. The two burly half-orc bouncers must be either bribed or intimidated before allowing access to the lower level of the tavern. A rickety set of stairs through a sloped tunnel leads to the lower level of the tavern. From here one can enter to Downshadow via rope lift manned by a spellscarred half-orc. Tip well for smooth trip.</p>"
}, {
    name1: "The Storm's Front",
    name2: "",
    color: "#FF0000",
    x: 1100,
    y: 937,
    txt1: "<p>A popular gathering place for the young and wealthy.</p>"
}, {
    name1: "Demondraught",
    name2: "",
    color: "#FF0000",
    x: 1057,
    y: 778,
    txt1: "<p>Tavern.</p>"
}, {
    name1: "Slaked Sylph",
    name2: "",
    color: "#FF0000",
    x: 910,
    y: 2248,
    txt1: "<p>Tavern. Patron's are a wide array of Waterdhavians, who enjoy dark ale, night black loaves, and shelves with broadsheets.</p>"
}, {
    name1: "Mermaid on a Dolphin",
    name2: "",
    color: "#FF0000",
    x: 1330,
    y: 1489,
    txt1: "<p>An expensive restaurant.</p>"
}, {
    name1: "The House of Purple Silks",
    name2: "",
    color: "#FF0000",
    x: 682,
    y: 1849,
    txt1: "<p>Festhall. Lodging. Food. This is one of the most famous pleasure palaces of the Sword Coast. Not a place for the bashful. Highly recommended. The proprietress is Jathaliira Thindrel.</p>",
    ref: "$54"
}, {
    name1: "The Gentle Mermaid",
    name2: "",
    color: "#FF0000",
    x: 1992,
    y: 2030,
    txt1: "<p>Festhall. Gambling House. Tavern. Boasting the largest and richest gambling rooms in all of Waterdeep, perhaps all of Faerun, this huge, balconied and turreted, 4-story stone structure, occupies the entire interior of the city block on which it is located. The only public entrance is in a courtyard at the end of a corridor. It reeks of wealth, if not sophistication and taste. The interior is lushly decorated with carpets and tapestries on nearly every surface. In addition to being magically lit, the interior of the building is also magically heated and cooled, providing a welcome comfort no matter the season. Weapons are not permitted inside the Gentle Mermaid, so guests will be expected to check any they are carrying with the coatroom attendant, though guests are not searched for or even asked to remove any but openly worn weapons. The Mermaid is confident in their security. Any person not wearing ﬁne clothes is turned away per the establishment's dress code. Many come here to lose money at the gambling tables or to spend it to enjoy the company of the charming & beautiful escorts, of all genders, on the Mermaid Staff.</p>",
    ref: "N27"
}, {
    name1: "Silavene's",
    name2: "",
    color: "#FF0000",
    x: 621,
    y: 2526,
    txt1: "<p>Festhall</p>",
    ref: "C3"
}, {
    name1: "The Smiling Siren",
    name2: "",
    color: "#FF0000",
    x: 1340,
    y: 3004,
    txt1: "<p>Festhall. Nightclub & Theater. Home to a company of popular local actors who can perform everything from rowdy comedy to high tragedy. Nobles often hire the place for an evening for exclusive performances. The Siren is also home to traveling troupes of vaudeville jugglers, comedians, and nearly nude dancers or burlesque dancers. Before and between performances, the place is used for drinking and dancing to live music, sometimes with show dancers on the stage. The mage Perendel Wintamer runs this nightclub.</p>",
    ref: "C10"
}, {
    name1: "Mother Tathlorn's House of Pleasure",
    name2: "",
    color: "#FF0000",
    x: 1766,
    y: 4154,
    txt1: "<p>Festhall. Entertainers. The most famous house of pleasure in Waterdeep is a large, five-floored building with two additional levels of dungeons below ground. Mother Tathlorn's has on staff several priests of Sune. The most popular service performed at Mother Tathlorn's is massage and bathing, but all of this luxury and pleasure doesn't come cheaply.</p>",
    ref: "C43"
}, {
    name1: "Jhural's Dance",
    name2: "",
    color: "#FF0000",
    x: 1017,
    y: 2878,
    txt1: "<p>Festhall</p>",
    ref: "C58"
}, {
    name1: "Blushing Nymph",
    name2: "",
    color: "#FF0000",
    x: 1946,
    y: 4476,
    txt1: "<p>Festhall</p><p>The long stair links the oubliette of the Blushing Nymph festhall with Undermountain's first level.</p>",
    ref: "C81"
}, {
    name1: "Golden Horn Gambling House",
    name2: "",
    color: "#FF0000",
    x: 2158,
    y: 4144,
    txt1: "<p>Festhall. Entertainers. Drugs.</p>",
    ref: "T28"
}, {
    name1: "Three Pearls Nightclub",
    name2: "",
    color: "#FF0000",
    x: 2333,
    y: 5177,
    txt1: "<p>Festhall. Pearls, as it is called, is a popular evening destination for Waterdhavians, offering stand-up comics, trained animal acts, illusionists' recitals, bards, orators, and exotic dancing. It has a low ceiling and is usually hot and smoky. The manager, Xandos Waeverym, is known as 'the Dandy'.</p>",
    ref: "D18"
}, {
    name1: "The Hanging Lantern",
    name2: "",
    color: "#FF0000",
    x: 2214,
    y: 5461,
    txt1: "<p>Festnall. The Lantern, an escort service known for the stunning beauty of its workers, and for the skill of its matchmakers, is famous up and down the Sword Coast.</p>",
    ref: "D22"
}, {
    name1: "The Purple Palace",
    name2: "",
    color: "#FF0000",
    x: 2414,
    y: 5405,
    txt1: "<p>Festhall. This is the closest thing Waterdeep has to a Calishite silks-boudoir. Its lavender silk draperies and gauzy hangings are heavily perfumed. Everything is cushions, soft carpets, music, and purple-tinted, spiced wine. Companionship is expensive and very good.</p>",
    ref: "D25"
}, {
    name1: "The Mermaid's Arms",
    name2: "",
    color: "#FF0000",
    x: 2014,
    y: 5560,
    txt1: "<p>Festhall. Elegant dining lounges, in which one dines or just drinks with an attractive host or hostess (or alone). Increasingly, the Arms is being used by single gentlefolk for a night of love. In other words, patrons are going there to meet each other, not to hire a host or hostess for the night. The Arms is large, well-lit, always busy, and can be quite expensive.</p>",
    ref: "D26"
}, {
    name1: "The Blushing Mermaid",
    name2: "",
    color: "#FF0000",
    x: 2346,
    y: 5654,
    txt1: "<p>Festhall. One of the most luxurious establishments in Dock Ward. Everything is unhurried, luxurious, and sensual. The staff of over 20 wear facemasks. A dry well in the cellar has a passage to the Port of Shadows in Undermountain.</p>",
    ref: "D36"
}, {
    name1: "The Copper Cup",
    name2: "",
    color: "#FF0000",
    x: 2968,
    y: 6024,
    txt1: "<p>Festhall. The Copper Cup is one of the busiest and most famous places in Dock Ward, a must-see spot for many visitors. It's a tavern, inn, and festhall, all in one, and goes several cellars deep as well as four floors up. It is owned and run by six of its dancers.</p>",
    ref: "D54"
}, */ {
    name1: "The Skewered Dragon",
    name2: "",
    color: "#FF0000",
    x: 2358,
    y: 5468,
    txt1: "<p>The Skewered Dragon faces an alley that runs between Net Street and Fillet Lane in the Dock Ward, not far from the Old Xoblob Shop. The Skewered Dragon looks like a ruin. Both of its front-facing windows are smashed, and a ship's anchor is lodged in the roof.</p>"
}, /* {
    name1: "The Jade Dancer",
    name2: "",
    color: "#FF0000",
    x: 2778,
    y: 5636,
    txt1: "<p>Festhall. This clean, brightly lit, noisy place is beloved of young Waterdhavians wanting to be in the rush of new fashion and 'in' behavior. The musicians hired to play here are very good.</p>",
    ref: "S15"
}, {
    name1: "The Smiling Succubus",
    name2: "",
    color: "#FF0000",
    x: 2545,
    y: 5721,
    txt1: "<p>Festhall. Not exactly the pride of Wharf Street, but one of its most popular destinations.</p>"
}, {
    name1: "Mother Salinka's House of Pleasures",
    name2: "",
    color: "#FF0000",
    x: 2076,
    y: 4471,
    txt1: "<p>This is a dingy low-coin festhall owned by halflings and frequented by those who are there for a 'brief visit', or can't afford or are turned away from the Yawning Portal.</p>"
}, {
    name1: "Pink Flumph",
    name2: "",
    color: "#FF0000",
    x: 1707,
    y: 3136,
    txt1: "<p>Theater</p>"
}, {
    name1: "Seven Masks Theater",
    name2: "",
    color: "#FF0000",
    x: 1601,
    y: 4809,
    txt1: "<p>The theater caters to a lower-class clientele, and ship captains and sailors are admitted for free. The owner of the theater is a burly and jovial Shou man with a braided goatee named Rongquan Mystere.</p>"
}, */
{
    name1: "GROUP",
    name2: "",
    color: "#FFFF00",
    x: 0,
    y: 0,
    txt1: "Temples"
}, /*{
    name1: "Shrines of Nature",
    name2: "",
    color: "#FFFF00",
    x: 696,
    y: 1146,
    txt1: "<p>Park dedicated to Silvanus and Mielikki.</p>",
    ref: "$5"
}, {
    name1: "Temple of Beauty",
    name2: "",
    color: "#FFFF00",
    x: 1176,
    y: 1126,
    txt1: "<p>Temple of Sune.</p>",
    ref: "$10"
}, {
    name1: "Tower of Luck",
    name2: "",
    color: "#FFFF00",
    x: 922,
    y: 1344,
    txt1: "<p>Temple of Tymora.</p>",
    ref: "$19"
}, {
    name1: "House of Wonder",
    name2: "",
    color: "#FFFF00",
    x: 1150,
    y: 1394,
    txt1: "<p>Temple of Mystra. Most splendid temple dedicated to this deitie in all the world.</p>",
    ref: "$21"
}, */{
    name1: "House of Inspired Hands",
    name2: "",
    color: "#FFFF00",
    x: 696,
    y: 1600,
    txt1: "<p>Temple of Gond.</p>",
    ref: "$38"
}, /*{
    name1: "House of the Moon",
    name2: "",
    color: "#FFFF00",
    x: 766,
    y: 1842,
    txt1: "<p>Temple of Selûne. The tallest tower of any temple in the city.</p>",
    ref: "$56"
}, {
    name1: "House of Heroes",
    name2: "",
    color: "#FFFF00",
    x: 610,
    y: 2080,
    txt1: "<p>Temple of Tempus. Largest temple in the city.</p>",
    ref: "$58"
}, */{
    name1: "Holyhands House",
    name2: "",
    color: "#FFFF00",
    x: 1958,
    y: 1728,
    txt1: "<p>Temple of all deities. Also an inn.</p>",
    ref: "N16"
}, /*{
    name1: "Hospice of St. Laupsenn",
    name2: "",
    color: "#FFFF00",
    x: 2342,
    y: 2888,
    txt1: "<p>Temple of Ilmater.</p>",
    ref: "N73"
}, {
    name1: "Spires of the Morning",
    name2: "",
    color: "#FFFF00",
    x: 812,
    y: 2372,
    txt1: "<p>Temple of Lathander. Order of the Aster.</p>",
    ref: "C1"
}, {
    name1: "Font of Knowledge",
    name2: "",
    color: "#FFFF00",
    x: 1060,
    y: 2740,
    txt1: "<p>Temple of Oghma. Largest public library in the city.</p>",
    ref: "C4"
}, {
    name1: "Halls of Justice",
    name2: "",
    color: "#FFFF00",
    x: 1184,
    y: 2734,
    txt1: "<p>Temple of Tyr. Holy Order of the Knights of Samular.</p>",
    ref: "C5"
}, {
    name1: "Temple of the Seldarine",
    name2: "",
    color: "#FFFF00",
    x: 1756,
    y: 3534,
    txt1: "<p>Temple of all elven deities.</p>",
    ref: "C66"
}, {
    name1: "House of Two Hands",
    name2: "",
    color: "#FFFF00",
    x: 618,
    y: 4764,
    txt1: "<p>Monastery. Order of the Even-Handed.</p>",
    ref: "C74"
}, */{
    name1: "The Plinth",
    name2: "",
    color: "#FFFF00",
    x: 2540,
    y: 4283,
    txt1: "<p>Temple open to any faith and employed by worshipers of gods who lack sizable congregations in the City of Splendors.</p>",
    ref: "T38"
}, /*{
    name1: "Monastery of the Sun",
    name2: "",
    color: "#FFFF00",
    x: 2212,
    y: 2916,
    txt1: "<p>Temple. Order of the Sun Soul.</p>",
    ref: "T46"
}, {
    name1: "Helm's Hall",
    name2: "",
    color: "#FFFF00",
    x: 2621,
    y: 5330,
    txt1: "<p>Temple of Helm.</p>",
    ref: "S46"
}, {
    name1: "The Queenspire",
    name2: "",
    color: "#FFFF00",
    x: 3077,
    y: 6640,
    txt1: "<p>Temple of Umberlee.</p>",
    ref: "H5"
}, {
    name1: "Sailor's Last Request",
    name2: "",
    color: "#FFFF00",
    x: 1815,
    y: 5269,
    txt1: "<p>Former warehouse on the corner of Dock and Odd Streets that is now a chapel to Valkur, the god of sailors.</p>"
}, {
    name1: "Temple of Good Cheer",
    name2: "",
    color: "#FFFF00",
    x: 2647,
    y: 5237,
    txt1: "<p>'Temple' of Lliira located on the second floor of a rundown row house.</p>",
    ref: "S29"
}, /*{
    name1: "Mystra's Arms",
    name2: "",
    color: "#FFFF00",
    x: 936,
    y: 866,
    txt1: "<p>Mystra's Arms Asylum is a ruined building. It is haunted and abandoned.</p>",
    ref: "$66"
},  {
    name1: "The Dancing Haven",
    name2: "",
    color: "#FFFF00",
    x: 2492,
    y: 1110,
    txt1: "<p>The Dancing Haven is a small tree grove, planted and grown within an abandoned, roofless building in the Northern Ward of Waterdeep (formerly the Phull Villa, now absorbed by House Ulbrinter). It is used as a base of operations for the followers of Eilistraee (drow goddess of song and moonlight) in the city.</p>",
    ref: "N4"
}, {
    name1: "Chapterhouse of the Radiant Heart",
    name2: "",
    color: "#FFFF00",
    x: 2558,
    y: 1759,
    txt1: "<p>The chapter house for the Waterdhavian branch of the Order of the Radiant Heart, a fraternal organization formed of benevolent paladins and clerics that operated throughout Faerûn.</p>"
}, */
{
    name1: "GROUP",
    name2: "",
    color: "#2eb82e",
    x: 0,
    y: 0,
    txt1: "Guildhalls"
}, /*{
    name1: "The House of Crystal",
    name2: "",
    color: "#2eb82e",
    x: 1886,
    y: 2510,
    txt1: "<p>Guildhall. Guild of Glassblowers, Glaziers, & Spectacle-makers.</p>",
    ref: "N46"
}, {
    name1: "The House of Healing",
    name2: "",
    color: "#2eb82e",
    x: 2136,
    y: 2574,
    txt1: "<p>Guildhall. Drugs. Poisons. Potions. Guild of Apothecaries & Physicians.</p>",
    ref: "N51"
}, {
    name1: "The Market Hall",
    name2: "",
    color: "#2eb82e",
    x: 1810,
    y: 2627,
    txt1: "<p>Guildhall. Council of Farmer-Grocers.</p>",
    ref: "C8"
}, */{
    name1: "Tower of the Order",
    name2: "",
    color: "#2eb82e",
    x: 1957,
    y: 3460,
    txt1: "<p>Guildhall for the Watchful Order of Magists & Protectors. Also the largest arcane school in Waterdeep</p>",
    ref: "C15"
}, /*{
    name1: "House of the Fine Carvers",
    name2: "",
    color: "#2eb82e",
    x: 2116,
    y: 3666,
    txt1: "<p>Guildhall. Guild of Fine Carvers.</p>",
    ref: "C21"
}, {
    name1: "The Master Bakers' Hall",
    name2: "",
    color: "#2eb82e",
    x: 1823,
    y: 3909,
    txt1: "<p>Guildhall. Baker's Guild.</p>",
    ref: "C27"
}, {
    name1: "The Zoarstar",
    name2: "",
    color: "#2eb82e",
    x: 2626,
    y: 4103,
    txt1: "<p>Guildhall, temple. Scriveners', Scribes', & Clerks' Guild.</p>",
    ref: "T25"
}, {
    name1: "Pewterers' and Casters' Guildhall",
    name2: "",
    color: "#2eb82e",
    x: 2136,
    y: 3969,
    txt1: "<p>Guildhall. Guild of Trusted Pewterers & Casters.</p>",
    ref: "C34"
}, {
    name1: "Guildhall of the Order",
    name2: "",
    color: "#2eb82e",
    x: 2051,
    y: 4004,
    txt1: "<p>Guildhall. Solemn Order of Recognized Furriers & Woolmen.</p>",
    ref: "C36"
}, */{
    name1: "Fellowship Hall",
    name2: "",
    color: "#2eb82e",
    x: 1756,
    y: 4107,
    txt1: "<p>Guildhall for the Fellowship of Innkeepers.</p>",
    ref: "C39"
}, /*{
    name1: "The Map House",
    name2: "",
    color: "#2eb82e",
    x: 1800,
    y: 4103,
    txt1: "<p>Guildhall. Surveyors', Map & Chart-makers' Guild.</p>",
    ref: "C40"
}, {
    name1: "The House of Gems",
    name2: "",
    color: "#2eb82e",
    x: 1849,
    y: 4131,
    txt1: "<p>Guildhall</p>",
    ref: "C44"
}, {
    name1: "Citadel of the Arrow",
    name2: "",
    color: "#2eb82e",
    x: 2259,
    y: 3792,
    txt1: "<p>Guildhall. Fellowship of Bowers & Fletchers.</p>",
    ref: "T10"
}, {
    name1: "Costumers' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2209,
    y: 3875,
    txt1: "<p>Guildhall. Order of Master Tailors, Glovers, & Mercers. Clothing.</p>",
    ref: "T11"
}, {
    name1: "The League Office",
    name2: "",
    color: "#2eb82e",
    x: 2606,
    y: 3975,
    txt1: "<p>Guildhall. League of Basketmakers & Wickerworkers.</p>",
    ref: "T14"
}, */{
    name1: "The House of Song",
    name2: "",
    color: "#2eb82e",
    x: 2422,
    y: 4031,
    txt1: "<p>Guildhall for the Council of Musicians, Instrument-Makers, & Choristers.</p>",
    ref: "T19"
}, /* {
    name1: "The House of Cleanliness",
    name2: "",
    color: "#2eb82e",
    x: 2653,
    y: 3993,
    txt1: "<p>Guildhall</p>",
    ref: "T22"
}, {
    name1: "The Old Guildhall",
    name2: "",
    color: "#2eb82e",
    x: 2756,
    y: 4059,
    txt1: "<p>Guildhall. Cellarers' & Plumbers' Guild.</p>",
    ref: "T26"
}, {
    name1: "The House of Textiles",
    name2: "",
    color: "#2eb82e",
    x: 2725,
    y: 4087,
    txt1: "<p>Guildhall. Most Excellent Order of Weavers & Dyers.</p>",
    ref: "T27"
}, {
    name1: "The House of Light",
    name2: "",
    color: "#2eb82e",
    x: 2330,
    y: 4160,
    txt1: "<p>Guildhall. Guild of Chandlers & Lamplighters.</p>",
    ref: "T29"
}, {
    name1: "Stationers' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2415,
    y: 4175,
    txt1: "<p>Guildhall. Stationers' Guild.</p>",
    ref: "T31"
}, {
    name1: "The Guild Paddock",
    name2: "",
    color: "#2eb82e",
    x: 2845,
    y: 4227,
    txt1: "<p>Guildhall. Stablemasters' & Farriers' Guild. Mounts.</p>",
    ref: "T34"
}, {
    name1: "Cobblers' and Corvisers' House",
    name2: "",
    color: "#2eb82e",
    x: 2357,
    y: 4390,
    txt1: "<p>Guildhall. Order of Cobblers & Corvisers. Clothing.</p>",
    ref: "T37"
}, {
    name1: "Wheel Hall",
    name2: "",
    color: "#2eb82e",
    x: 2903,
    y: 4427,
    txt1: "<p>Guildhall</p>",
    ref: "T42"
}, {
    name1: "The Metal House of Wonders",
    name2: "",
    color: "#2eb82e",
    x: 2062,
    y: 4603,
    txt1: "<p>Guildhall. Splendid Order of Armorers, Locksmiths, & Finesmiths. Adventuring gear. Armor. Tools. </p>",
    ref: "D3"
}, {
    name1: "Shipwrights' House",
    name2: "",
    color: "#2eb82e",
    x: 1860,
    y: 5425,
    txt1: "<p>Guildhall. Order of Master Shipwrights.</p>",
    ref: "D19"
}, {
    name1: "Muleskull Tavern",
    name2: "",
    color: "#2eb82e",
    x: 2133,
    y: 5498,
    txt1: "<p>Tavern/guild. Dungsweepers' Guild.</p>",
    ref: "D21"
}, {
    name1: "Shippers' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2212,
    y: 5528,
    txt1: "<p>Guildhall. Fellowship of Salters, Packers, & Joiners.</p>",
    ref: "D28"
}, {
    name1: "Coopers' Rest",
    name2: "",
    color: "#2eb82e",
    x: 2259,
    y: 5542,
    txt1: "<p>Guildhall. Coopers' Guild.</p>",
    ref: "D31"
}, {
    name1: "Full Sails",
    name2: "",
    color: "#2eb82e",
    x: 2127,
    y: 5686,
    txt1: "<p>Tavern/guildhall. Most Diligent League of Sail-makers & Cordwainers.</p>",
    ref: "D35"
}, {
    name1: "Seaswealth Hall",
    name2: "",
    color: "#2eb82e",
    x: 2272,
    y: 5730,
    txt1: "<p>Guildhall. Fishmongers' Fellowship.</p>",
    ref: "D39"
}, {
    name1: "Watennens' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2475,
    y: 5825,
    txt1: "<p>Guildhall. Guild of Watermen.</p>",
    ref: "D43"
}, {
    name1: "Mariners' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2653,
    y: 5869,
    txt1: "<p>Guildhall. Master Mariners' Guild.</p>",
    ref: "D44"
}, {
    name1: "League Hall",
    name2: "",
    color: "#2eb82e",
    x: 2727,
    y: 5916,
    txt1: "<p>Guildhall</p>",
    ref: "D46"
}, {
    name1: "The Butchers' Guildhall",
    name2: "",
    color: "#2eb82e",
    x: 2828,
    y: 5951,
    txt1: "<p>Guildhall. Guild of Butchers.</p>",
    ref: "D47"
}, {
    name1: "Jester's Clubhouse",
    name2: "",
    color: "#2eb82e",
    x: 2215,
    y: 5398,
    txt1: "<p>Guildhall</p>",
    ref: "D61"
}, {
    name1: "The Pavilion of Paving Stones",
    name2: "",
    color: "#2eb82e",
    x: 2462,
    y: 5069,
    txt1: "<p>Guildhall. Loyal Order of Street Laborers.</p>",
    ref: "D72->D70b"
}, {
    name1: "The Stone House",
    name2: "",
    color: "#2eb82e",
    x: 2624,
    y: 4771,
    txt1: "<p>Guildhall. Carpenters', Roofers', & Plaisterers' Guild.</p>",
    ref: "S2"
}, {
    name1: "The House of Good Spirits",
    name2: "",
    color: "#2eb82e",
    x: 2831,
    y: 4816,
    txt1: "<p>Guildhall. The entire complex still looks like a collection of warehouses and factories inside and out. The inn, tavern, wine store, winery, and brewery are directly joined inside, but a narrow courtyard separates the stables from the rest. The House of Good Spirits boasts the best and cheapest selection of liqueurs and strong drink in the entire City of Splendors. The guild staff numbers 40 or so.</p>",
    ref: "S3"
}, {
    name1: "The Coach and Wagon Hall",
    name2: "",
    color: "#2eb82e",
    x: 2745,
    y: 4945,
    txt1: "<p>Guildhall. Wagonmakers' & Coach Builders' Guild.</p>",
    ref: "S5"
}, {
    name1: "Saddlers' & Harness-Makers' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2759,
    y: 4906,
    txt1: "<p>Guildhall. Saddlers' & Harness-Makers' Guild. Mounts.</p>",
    ref: "S6"
}, {
    name1: "Builders' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2992,
    y: 5460,
    txt1: "<p>Guildhall. Guild of Stonecutters, Masons, Potters, & Tile-makers.</p>",
    ref: "S11"
}, {
    name1: "The Road House",
    name2: "",
    color: "#2eb82e",
    x: 2954,
    y: 5527,
    txt1: "<p>Guild house. Fellowship of Carters & Coachmen.</p>",
    ref: "S13"
}, {
    name1: "Metalmasters' Hall",
    name2: "",
    color: "#2eb82e",
    x: 2954,
    y: 5728,
    txt1: "<p>Guildhall. Most Careful Order of Skilled Smiths & Metalforgers. Tools.</p>",
    ref: "S20"
}, */
{
    name1: "GROUP",
    name2: "",
    color: "#FF00FF",
    x: 0,
    y: 0,
    txt1: "Businesses"
}, {
    name1: "Opulent Ornaments",
    name2: "",
    color: "#FF00FF",
    x: 2184,
    y: 1630,
    txt1: "<p>Jewelry Store. Recently broken into and robbed.</p>",
    ref: "$3"
}, /*{
    name1: "Selchoun's Sundries",
    name2: "",
    color: "#FF00FF",
    x: 1248,
    y: 976,
    txt1: "<p>Business. The only place in the entire ward where you can buy string, and thongs, and kindling and flint, and clay pipes, and carrysacks, and... Proprietor: Osbrin Selchoun.</p>",
    ref: "$3"
}, {
    name1: "Aurora's Realms Shop, Singing Dolphin Catalog Counter",
    name2: "",
    color: "#FF00FF",
    x: 846,
    y: 1400,
    txt1: "<p>Business. This is the Sea Ward outlet of the famous Faerun-wide all goods retail chain.</p>",
    ref: "$18"
}, {
    name1: "Halazar's Fine Gems",
    name2: "",
    color: "#FF00FF",
    x: 1746,
    y: 2258,
    txt1: "<p>Business. Inside are truly the finest gems one can find for sale, exquisitely cut and mounted, displayed in glass cases. Stromquil Halazar, Guildmaster of the Jewellers' Guild, is the proprietor.</p>",
    ref: "$60"
}, {
    name1: "Gerin's Breads",
    name2: "",
    color: "#FF00FF",
    x: 860,
    y: 512,
    txt1: "<p>Business. Food.</p>",
    ref: "$62"
}, {
    name1: "Melvar's Chapbooks and Folios",
    name2: "",
    color: "#FF00FF",
    x: 828,
    y: 1352,
    txt1: "<p>Business</p>",
    ref: "$63"
}, {
    name1: "Velatha's Delights",
    name2: "",
    color: "#FF00FF",
    x: 578,
    y: 1406,
    txt1: "<p>Business</p>",
    ref: "$64"
}, {
    name1: "Tammerbund's Glasswares",
    name2: "",
    color: "#FF00FF",
    x: 1446,
    y: 1630,
    txt1: "<p>Business</p>",
    ref: "$65"
}, {
    name1: "High Flagon Gambling House",
    name2: "",
    color: "#FF00FF",
    x: 2032,
    y: 1134,
    txt1: "<p>Business. Drugs.</p>",
    ref: "$76"
}, {
    name1: "Ragathan Furriers",
    name2: "",
    color: "#FF00FF",
    x: 2861,
    y: 2296,
    txt1: "<p>Business. Clothing.</p>",
    ref: "N43"
}, {
    name1: "Meraedos Fine Furs",
    name2: "",
    color: "#FF00FF",
    x: 2038,
    y: 2472,
    txt1: "<p>Business. Clothing. This shop sells stylish and wellmade furs. ShalrinMaerados, the Gentleman Keeper of his guild, is the proprietor.</p>",
    ref: "N48"
}, {
    name1: "Sulmest's Splendid Shoes & Boots",
    name2: "",
    color: "#FF00FF",
    x: 2045,
    y: 2532,
    txt1: "<p>Business. Clothing.</p>",
    ref: "N49"
}, {
    name1: "Aurora's Realms Shop, High Road Catalogue Counter",
    name2: "",
    color: "#FF00FF",
    x: 2125,
    y: 2517,
    txt1: "<p>Business</p>",
    ref: "N50"
}, {
    name1: "Fallen Stars Fish",
    name2: "",
    color: "#FF00FF",
    x: 2180,
    y: 2662,
    txt1: "<p>Business. Food.</p>",
    ref: "N54"
}, {
    name1: "Downybeard Tobacconist",
    name2: "",
    color: "#FF00FF",
    x: 2406,
    y: 2856,
    txt1: "<p>Business</p>",
    ref: "N60"
}, {
    name1: "Hriiat Fine Pastries",
    name2: "",
    color: "#FF00FF",
    x: 2511,
    y: 2972,
    txt1: "<p>Business. Food. Hriiat's place is known not just for sweets, but for savory pastries.</p>",
    ref: "N61"
}, {
    name1: "Irbryth Authamaun's residence",
    name2: "",
    color: "#FF00FF",
    x: 2383,
    y: 1262,
    txt1: "<p>Business</p>",
    ref: "N62"
}, {
    name1: "Taurntyrith Adornments",
    name2: "",
    color: "#FF00FF",
    x: 1956,
    y: 1898,
    txt1: "<p>Business</p>",
    ref: "N66"
}, {
    name1: "Bhephel's Bottles/Exotic Wines and Cordials",
    name2: "",
    color: "#FF00FF",
    x: 2033,
    y: 1979,
    txt1: "<p>One of the finest spirits shops in Waterdeep, specializing in having the widest offerings from around Faerûn. Their small size belies their actual business, for many of their customers simply have them ship their purchases directly from warehouse to residences, without ever entering the shop.</p>",
    ref: "N67"
}, {
    name1: "Sarsantyr's Tapestries & Draperies",
    name2: "",
    color: "#FF00FF",
    x: 2038,
    y: 1490,
    txt1: "<p>Business</p>",
    ref: "N68"
}, {
    name1: "Tirelessly Turning Wheel/Caravan Curios From All Far Faerun",
    name2: "",
    color: "#FF00FF",
    x: 2009,
    y: 2346,
    txt1: "<p>Business</p>",
    ref: "N69"
}, {
    name1: "Millomyr Harps",
    name2: "",
    color: "#FF00FF",
    x: 2445,
    y: 2787,
    txt1: "<p>Business</p>",
    ref: "N70"
}, {
    name1: "Obelos -The Only- Braeril's residence",
    name2: "",
    color: "#FF00FF",
    x: 1814,
    y: 1790,
    txt1: "<p>Business</p>",
    ref: "N72"
}, */{
    name1: "The Bent Nail",
    name2: "",
    color: "#FF00FF",
    x: 2467,
    y: 1620,
    txt1: "<p>Business. Wooden furniture, as well as bows and crossbows. The owner is an half-elf carpenter named Talisolvanar Fellbranch.</p>",
    ref: "N77-T2"
}, {
    name1: "Steam and Steel",
    name2: "",
    color: "#FF00FF",
    x: 2457,
    y: 1650,
    txt1: "<p>Business. The forge is owned and operated by a fire genasi named Embric and his husband, a water genasi named Avi, who made metal weapons, armor, and tools.</p>",
    ref: "T3"
}, {
    name1: "Corellon's Crown",
    name2: "",
    color: "#FF00FF",
    x: 2413,
    y: 1636,
    txt1: "<p>Business. Fala Lefaliir is a wood elf druid, an herbalist, and a member of the Guild of Apothecaries and Physicians.</p>",
    ref: "T4"
}, {
    name1: "Book Wyrm's Treasure",
    name2: "",
    color: "#FF00FF",
    x: 2304,
    y: 1580,
    txt1: "<p>Business. Library managed by a dragonborn named Rishaal the Page-Turner. He also has a small collection of spellbooks and allows wizards to copy spells if they pay.</p>",
    ref: "T6"
}, /*{
    name1: "Diloontier's Apothecary",
    name2: "",
    color: "#FF00FF",
    x: 1708,
    y: 3514,
    txt1: "<p>Assassins. Drugs. Poisons. Potions. Now renamed to 'Diloontier's & Sons Apothecary'.</p><p>This upscale store catered to the elite of Waterdhavian society. Those who had the right credentials and money for it could quietly purchase poisons and more nefarious potions from the proprietor.</p>",
    ref: "C13"
}, {
    name1: "Balthorr's Rare & Wondrous Treasures",
    name2: "",
    color: "#FF00FF",
    x: 1870,
    y: 3529,
    txt1: "<p>Business. Magic items. Balthorr 'the Bold' Olaskos will fence stolen items for 40% market value.</p>",
    ref: "C14"
}, {
    name1: "Halls of Hilmer, Master Armorer",
    name2: "",
    color: "#FF00FF",
    x: 1962,
    y: 3754,
    txt1: "<p>Armor</p><p>Hilmer,  a tall, strong, and soft-spoken man, with shoulders as wide as most doors, only makes plate, but he's known as the best, or among the best, in all the Sword Coast lands. He's a master craftsman.</p>",
    ref: "C23"
}, {
    name1: "Halambar Lutes & Harps",
    name2: "",
    color: "#FF00FF",
    x: 1894,
    y: 3828,
    txt1: "<p>Business. Entertainers. This shop sells all sorts of stringed musical instruments. Kriios Halambar, guildmaster of the Council of Musicians, Instrument-Makers, and Choristers owns and runs this shop.</p>",
    ref: "C25"
}, {
    name1: "The Golden Key Locksmiths",
    name2: "",
    color: "#FF00FF",
    x: 1737,
    y: 3903,
    txt1: "<p>Business. The proprietor, Ansilver, makes custom locks to order, and guarantees that he's never sold a key that will open the lock you buy from him to anyone else.</p>",
    ref: "C26"
}, {
    name1: "Olmhazan's Jewels",
    name2: "",
    color: "#FF00FF",
    x: 2132,
    y: 3897,
    txt1: "<p>Business. All the gems one can think of, except very rare or magical sorts. Jhauntar Olmhazan, Gentleman Speaker for the Jewelers' Guild, owns and runs this shop.</p>",
    ref: "C29"
}, {
    name1: "Rebeleigh's Elegant Headwear",
    name2: "",
    color: "#FF00FF",
    x: 1829,
    y: 4011,
    txt1: "<p>Business. Clothing.</p>",
    ref: "C31"
}, {
    name1: "Phalantar's Philtres & Components",
    name2: "",
    color: "#FF00FF",
    x: 2049,
    y: 3977,
    txt1: "<p>Business. Drugs. Poisons. Potions. Here you can buy medicines, herbs, and rare substances used in the making of perfumes, scented oils, poisons, and as material components in the casting of spells. Phalantar Orivan will fence stolen goods for 40% market value. He is said to be fabulously rich.</p>",
    ref: "C33"
}, {
    name1: "Aurora's Realms Shop, Waterdeep Way Catalogue Counter",
    name2: "",
    color: "#FF00FF",
    x: 2101,
    y: 4025,
    txt1: "<p>A large building featuring a street-facing showroom with offices above it, and ample storage in the back part of the building on both floors as well as a practically cavernous cellars, these offices are the heart of the empire that is Aurora's Emporium. The back ground floor also features a printing facility for the broadsheets the Emporium prints. Many folk in the Castle Ward enjoy spending an hour or so browsing through the most fascinating wonders on display in the showroom. Aurora's Emporium frequently has need of mages to do certain work for them, and they pay well for it. The offices are also the location of Aurora's Academy, a Watchful Order-run school for wizardry.</p>",
    ref: "C37"
}, {
    name1: "Eilean's Maztican Delights",
    name2: "",
    color: "#FF00FF",
    x: 1638,
    y: 2619,
    txt1: "<p>Business</p>",
    ref: "C55"
}, */{
    name1: "Lightsinger Theater",
    name2: "",
    color: "#FF00FF",
    x: 1901,
    y: 2903,
    txt1: "<p>Business. Entertainers.</p>",
    ref: "C56"
}, /*{
    name1: "Sorynth's Silverware",
    name2: "",
    color: "#FF00FF",
    x: 1737,
    y: 3108,
    txt1: "<p>Business</p>",
    ref: "C57"
}, {
    name1: "Old Knot Shop",
    name2: "",
    color: "#FF00FF",
    x: 1859,
    y: 3433,
    txt1: "<p>Adventuring gear</p>",
    ref: "C64"
}, {
    name1: "Sharkroar - Harth Shalark's Broadsheets",
    name2: "",
    color: "#FF00FF",
    x: 1709,
    y: 2632,
    txt1: "<p>Business</p>",
    ref: "C65"
}, {
    name1: "The Curious Past",
    name2: "",
    color: "#FF00FF",
    x: 1348,
    y: 3414,
    txt1: "<p>Business is run by Bronwyn Caradoon, dealing in exotic items while also being a front for Harper Activity.</p>",
    ref: "C85"
}, {
    name1: "Paethier's Pipeweed",
    name2: "",
    color: "#FF00FF",
    x: 1522,
    y: 2545,
    txt1: "<p>Business</p>",
    ref: "C86"
}, {
    name1: "Khammeral's Coins",
    name2: "",
    color: "#FF00FF",
    x: 2174,
    y: 3248,
    txt1: "<p>Business</p>",
    ref: "T2"
}, {
    name1: "The Riven Shield Shop",
    name2: "",
    color: "#FF00FF",
    x: 2196,
    y: 3450,
    txt1: "<p>Business. This shop is famous for its large and varied assortment of secondhand arms and armor. Delborggan the Blade runs the shop.</p>",
    ref: "T4"
}, {
    name1: "Saern's Fine Swords",
    name2: "",
    color: "#FF00FF",
    x: 2206,
    y: 3779,
    txt1: "<p>Business. Large stock of swords. Most shoppers will be able to find a sword that is reasonably suitable to their reach and strength. The warrior Zygarth 'Slayer' Saern, who runs the shop, has invisible weapons stashed all over the shop in plain view, ready to defend himself with.</p>",
    ref: "T7"
}, {
    name1: "Dunblast Roofing Company",
    name2: "",
    color: "#FF00FF",
    x: 2396,
    y: 3587,
    txt1: "<p>Business</p>",
    ref: "T9"
}, {
    name1: "Thentavva's Boots",
    name2: "",
    color: "#FF00FF",
    x: 2267,
    y: 3962,
    txt1: "<p>Business. Considered by some to be the best cobbler in Waterdeep, Thentavvan work is of the best quality, known for lasting many years and surviving mud and wet well.</p>",
    ref: "T12"
}, {
    name1: "Aurora's Realms Shop, Street of Tusks Catalogue Counter",
    name2: "",
    color: "#FF00FF",
    x: 2283,
    y: 4027,
    txt1: "<p>Business</p>",
    ref: "T16"
}, {
    name1: "Orsabbas's Fine Imports",
    name2: "",
    color: "#FF00FF",
    x: 2330,
    y: 4008,
    txt1: "<p>Business. Here you can pay far too much money for things you never expected to see on sale in a shop. Ildar 'the Duke of Darkness' Orsabba will fence stolen goods for 30% market value.</p>",
    ref: "T17"
}, {
    name1: "Riautar's Weaponry",
    name2: "",
    color: "#FF00FF",
    x: 2322,
    y: 4127,
    txt1: "<p>Business. The best arrows, bowstrings, and long bows in Waterdeep, made on the premises by the owner, Zarondar 'the Nimble' Riautar.</p>",
    ref: "T18"
}, {
    name1: "Patient Fingers Finework",
    name2: "",
    color: "#FF00FF",
    x: 2500,
    y: 4017,
    txt1: "<p>Business</p>",
    ref: "T20"
}, {
    name1: "Belmonder's Meats",
    name2: "",
    color: "#FF00FF",
    x: 2440,
    y: 4127,
    txt1: "<p>Business. By far the most popular eat counter in the city. Belmonder's has two side counters: one sells skewers of sizzle-cooked meat scraps, and the other sells whole sides of meat to buyers for inns, other eateries, noble families, and wealthy folk.</p>",
    ref: "T23"
}, {
    name1: "Thond Glass and Glazing Shop",
    name2: "",
    color: "#FF00FF",
    x: 2475,
    y: 4098,
    txt1: "<p>Business</p>",
    ref: "T24"
}, {
    name1: "The Gentle Rest Stables",
    name2: "",
    color: "#FF00FF",
    x: 2622,
    y: 4174,
    txt1: "<p>Business</p>",
    ref: "T33"
}, {
    name1: "Meiroth's Fine Silks",
    name2: "",
    color: "#FF00FF",
    x: 2262,
    y: 4250,
    txt1: "<p>Business. Clothing.</p>",
    ref: "T35"
}, {
    name1: "Surtlan's Metalwares",
    name2: "",
    color: "#FF00FF",
    x: 2785,
    y: 4380,
    txt1: "<p>Business</p>",
    ref: "T40"
}, {
    name1: "Rejviik's Mortuary",
    name2: "",
    color: "#FF00FF",
    x: 2366,
    y: 3722,
    txt1: "<p>Business</p>",
    ref: "T45"
}, {
    name1: "Huulfor Manor",
    name2: "",
    color: "#FF00FF",
    x: 2725,
    y: 4025,
    txt1: "<p>Business</p>",
    ref: "T47"
}, {
    name1: "Henndever's Coffins and Coffers",
    name2: "",
    color: "#FF00FF",
    x: 2262,
    y: 3561,
    txt1: "<p>Business</p>",
    ref: "T51"
}, {
    name1: "Turnstone Plumbing and Pipefitting",
    name2: "",
    color: "#FF00FF",
    x: 1862,
    y: 4653,
    txt1: "<p>Business</p>",
    ref: "D2"
}, {
    name1: "Whistling Blades",
    name2: "",
    color: "#FF00FF",
    x: 2141,
    y: 4759,
    txt1: "<p>Business. Weapons.</p>",
    ref: "D5"
}, {
    name1: "Serpentil Books & Folios",
    name2: "",
    color: "#FF00FF",
    x: 2359,
    y: 4840,
    txt1: "<p>Business. This is one of the dustiest but most exclusive shops in Waterdeep. Some have called it the single best source of maps, charts, and books in all the Realms. But no deals with Jannaxil come cheap.</p>",
    ref: "D10"
}, {
    name1: "Lanternmaker Zorth Ulmaril",
    name2: "",
    color: "#FF00FF",
    x: 2096,
    y: 5261,
    txt1: "<p>Business</p>",
    ref: "D16"
}, {
    name1: "Aurora's Realms Shop, Zastrow Street Catalogue Counter",
    name2: "",
    color: "#FF00FF",
    x: 2408,
    y: 5338,
    txt1: "<p>Business</p>",
    ref: "D24"
}, {
    name1: "House of Pride Perfumes",
    name2: "",
    color: "#FF00FF",
    x: 2475,
    y: 5493,
    txt1: "<p>Business. The House of Pride is crammed with a forest of glass bottles of all sizes, shapes, and hues. It is protected by a special enchantment that prevents glass from breaking. The shop is run by two sisters and is guarded by trained hunting dogs.</p>",
    ref: "D33"
}, {
    name1: "Felhaur's Fine Fish",
    name2: "",
    color: "#FF00FF",
    x: 2456,
    y: 5650,
    txt1: "<p>Business. Food.</p>",
    ref: "D37"
}, {
    name1: "Khostal Hannass, Fine Nuts",
    name2: "",
    color: "#FF00FF",
    x: 2483,
    y: 5608,
    txt1: "<p>Business. Food.</p>",
    ref: "D38"
}, {
    name1: "Nestaur the Ropemaker",
    name2: "",
    color: "#FF00FF",
    x: 2509,
    y: 5853,
    txt1: "<p>Adventuring gear</p>",
    ref: "D40"
}, {
    name1: "Torpus the Tanner",
    name2: "",
    color: "#FF00FF",
    x: 2693,
    y: 5935,
    txt1: "<p>Business</p>",
    ref: "D45"
}, {
    name1: "Melgard's Fine Leathers",
    name2: "",
    color: "#FF00FF",
    x: 2929,
    y: 5945,
    txt1: "<p>Business. Clothing.</p>",
    ref: "D48"
}, {
    name1: "Telethar Leatherworks",
    name2: "",
    color: "#FF00FF",
    x: 2745,
    y: 6029,
    txt1: "<p>Adventuring gear. League of Skinners & Tanners. Clothing.</p>",
    ref: "D50"
}, {
    name1: "Smokehouse",
    name2: "",
    color: "#FF00FF",
    x: 2832,
    y: 6091,
    txt1: "<p>Business. Food.</p>",
    ref: "D52"
}, {
    name1: "Gelfuril the Trader",
    name2: "",
    color: "#FF00FF",
    x: 2893,
    y: 6116,
    txt1: "<p>Business. This large and sprawling shop is neat and tidy. Much of the wares areold or heavily used, but his prices are very reasonable. Two younger men are helping customers. Towards the back of the store is a high desk behind which sits a burly blond gentleman with a full beard, called 'Junior' by his staff.</p>",
    ref: "D55"
}, {
    name1: "The Fishscale Smithy",
    name2: "",
    color: "#FF00FF",
    x: 1946,
    y: 5056,
    txt1: "<p>Adventuring gear</p>",
    ref: "D60"
}, {
    name1: "Horizon's Sails",
    name2: "",
    color: "#FF00FF",
    x: 2030,
    y: 5217,
    txt1: "<p>Business</p>",
    ref: "D62"
}, {
    name1: "Mother Jatha's",
    name2: "",
    color: "#FF00FF",
    x: 2133,
    y: 5069,
    txt1: "<p>Business</p>",
    ref: "D63"
}, {
    name1: "Talnu's Ropeworks",
    name2: "",
    color: "#FF00FF",
    x: 1838,
    y: 4983,
    txt1: "<p>Adventuring gear</p>",
    ref: "D64"
}, {
    name1: "Merlook Nets & Knotware",
    name2: "",
    color: "#FF00FF",
    x: 2506,
    y: 5566,
    txt1: "<p>Business</p>",
    ref: "D65"
}, {
    name1: "Ralagut's Wheelhouse",
    name2: "",
    color: "#FF00FF",
    x: 2175,
    y: 4720,
    txt1: "<p>Business</p>",
    ref: "D66"
}, */{
    name1: "The Old Xoblob Shop",
    name2: "",
    color: "#FF00FF",
    x: 2412,
    y: 5429,
    txt1: "<p>This curiosity shop is filled with lots of trinkets, trophies and souvenirs. All purple. Worth a look to see the stuffed beholder for which the shop is named. The shopkeeper is a deep gnome.</p>",
    ref: "D71"
}, /*{
    name1: "The Redbridle Stables",
    name2: "",
    color: "#FF00FF",
    x: 2970,
    y: 4791,
    txt1: "<p>Business. Mounts.</p>",
    ref: "S4"
}, {
    name1: "Brian the Swordmaster's Smithy",
    name2: "",
    color: "#FF00FF",
    x: 2652,
    y: 5018,
    txt1: "<p>Armor. Weapons.</p>",
    ref: "S7"
}, {
    name1: "The Old Monster Shop",
    name2: "",
    color: "#FF00FF",
    x: 2966,
    y: 5078,
    txt1: "<p>Business. This ugly poorly built warehouse is littered with dust and rubble. It smells of animal dung and damp. A shop where one can buy live monsters. In pools, cages, and a variety of imprisoning containers in his cellars, Feldyn keeps an everchanging roster of monsters to sell, guarded by a loyal staff of guardian monsters (watchspiders, gargoyles, mimics, stone golem).</p>",
    ref: "S8"
}, {
    name1: "Nelkaush the Weaver",
    name2: "",
    color: "#FF00FF",
    x: 3035,
    y: 5464,
    txt1: "<p>Business. Clothing.</p>",
    ref: "S12"
}, {
    name1: "Tehmak's Coaches",
    name2: "",
    color: "#FF00FF",
    x: 2902,
    y: 5633,
    txt1: "<p>Business</p>",
    ref: "S16"
}, {
    name1: "Hlakken Stables",
    name2: "",
    color: "#FF00FF",
    x: 3021,
    y: 5600,
    txt1: "<p>Business. Mounts. Surrolph Hlakken is a chief information gatherer for the Red Sashes.</p>",
    ref: "S17"
}, {
    name1: "Nueth's Fine Nets",
    name2: "",
    color: "#FF00FF",
    x: 2709,
    y: 5715,
    txt1: "<p>Business. This shop sells finely made ropes, nets, hammocks, ship shrouds and lines, rope bridges, window and tarp mesh, gauze, and the like. Thumir Aingahuth is the ever-alert proprietor.</p>",
    ref: "S19"
}, {
    name1: "Aurora's Realms Shop, South High Road Catalogue Counter",
    name2: "",
    color: "#FF00FF",
    x: 2707,
    y: 5769,
    txt1: "<p>Business</p>",
    ref: "S21"
}, {
    name1: "Pelauvir's Counter",
    name2: "",
    color: "#FF00FF",
    x: 2871,
    y: 5859,
    txt1: "<p>Business. This huge, crowded former warehouse sells about everything except food and drink, from pots to lotions and carts to marbles.</p>",
    ref: "S23"
}, {
    name1: "Bellister's Hand",
    name2: "",
    color: "#FF00FF",
    x: 2946,
    y: 5805,
    txt1: "<p>Business</p>",
    ref: "S24"
}, {
    name1: "Orm's Highbench",
    name2: "",
    color: "#FF00FF",
    x: 2981,
    y: 5874,
    txt1: "<p>Business. Mercenaries.</p>",
    ref: "S26"
}, {
    name1: "Athal's Stables",
    name2: "",
    color: "#FF00FF",
    x: 3085,
    y: 5888,
    txt1: "<p>Business. Mounts.</p>",
    ref: "S27"
}, {
    name1: "Essimuth's Equipment",
    name2: "",
    color: "#FF00FF",
    x: 2633,
    y: 5232,
    txt1: "<p>Adventuring gear. Tools.</p>",
    ref: "S28"
}, {
    name1: "Amrani's Laundry",
    name2: "",
    color: "#FF00FF",
    x: 2670,
    y: 5243,
    txt1: "<p>Business</p>",
    ref: "S31"
}, {
    name1: "Piatran's Clothiers",
    name2: "",
    color: "#FF00FF",
    x: 2666,
    y: 5256,
    txt1: "<p>Business. Clothing.</p>",
    ref: "S32"
}, {
    name1: "Hemmerem's Stables",
    name2: "",
    color: "#FF00FF",
    x: 2708,
    y: 5271,
    txt1: "<p>Business. Mounts.</p>",
    ref: "S34"
}, {
    name1: "The Garrulous Grocer",
    name2: "",
    color: "#FF00FF",
    x: 2632,
    y: 5284,
    txt1: "<p>Business. Food.</p>",
    ref: "S37"
}, {
    name1: "Krabbellor Silversmiths",
    name2: "",
    color: "#FF00FF",
    x: 2690,
    y: 5314,
    txt1: "<p>Business</p>",
    ref: "S38"
}, {
    name1: "Laran' Cartographers",
    name2: "",
    color: "#FF00FF",
    x: 2663,
    y: 5318,
    txt1: "<p>Business</p>",
    ref: "S39"
}, {
    name1: "Waukeen's Wares",
    name2: "",
    color: "#FF00FF",
    x: 2638,
    y: 5318,
    txt1: "<p>Located on Grocer's Lane is a small moneylenders and pawn shop with an old copper sign of Waukeen swinging in the breeze out front. Within is a cluttered, hopelessly disorganized (to all but the owner) shop of curios, trinkets, and some valuable items pawned for quick sums of pocket money. The proprietor, a bald little human by the name of Alek Lenter, is a hyperactive, skinny fellow who can't sit still for more than 10 seconds at a time. He is more than happy to accept nearly anything of value and pay up to 70% of what it's worth; of course, the interest fees are 12% per tenday to buy back the same item, and few return to pick up their goods.<br>After four months, items are for sale at 90-100% of their value to all but the original seller. Despite Alek's apparent harmlessness, people who cheated him have never been seen after they've left his shop.</p>",
    ref: "S40"
}, {
    name1: "The Daily Trumpet",
    name2: "",
    color: "#FF00FF",
    x: 2628,
    y: 5390,
    txt1: "<p>Business</p>",
    ref: "S45"
}, {
    name1: "The Medusa's Glare",
    name2: "",
    color: "#FF00FF",
    x: 2595,
    y: 5340,
    txt1: "<p>Business</p>",
    ref: "S48"
}, {
    name1: "Flame of Hope",
    name2: "",
    color: "#FF00FF",
    x: 2815,
    y: 4961,
    txt1: "<p>Business</p>",
    ref: "S49"
}, {
    name1: "Berendarr's World of Words",
    name2: "",
    color: "#FF00FF",
    x: 2884,
    y: 5802,
    txt1: "<p>A bookshop well in excess of a century old, owned by Master Berendarr, a shield dwarf, who is now in his dotage. Its massive shelves are tall, and many are packed with books not out in the public in fifty years or more. It has no system of cataloguing, so shopping here is a little more like treasure-hunting.</p>",
    ref: "S50"
}, {
    name1: "Hlethvagi's Coins",
    name2: "",
    color: "#FF00FF",
    x: 2767,
    y: 5709,
    txt1: "<p>Business. Moneylender.</p>",
    ref: "S51->S48b"
}, {
    name1: "Sea Elf Trading Outpost",
    name2: "",
    color: "#FF00FF",
    x: 3405,
    y: 6594,
    txt1: "<p>Business. Food.</p>",
    ref: "H6"
}, {
    name1: "Zephyr Post",
    name2: "",
    color: "#FF00FF",
    x: 2367,
    y: 1637,
    txt1: "<p>Birds of all colors can be seen delivering letters through the upper windows of this sky-blue townhouse at all hours of the day. The residents of Trollskull Alley and other nearby streets use the Zephyr Post to deliver letters to friends, colleagues, and mercenaries throughout Waterdeep. The inside of the shop is filled with the sweet aroma of Calishite incense.</p><p>The Zephyr Post's hawks can deliver a message to any address in Waterdeep for 2 sp. Additionally, mercenaries and other hirelings can be contracted through the Zephyr Post. By sending a hawk and attaching their fee in advance, an NPC hireling will arrive at the characters' residence the next morning. There are only so many mercenaries in Waterdeep, and you may deny any unreasonable requests.</p>"
}, {
    name1: "Thort's Findings",
    name2: "",
    color: "#FF00FF",
    x: 2613,
    y: 2140,
    txt1: "<p>The head of the Swordmaiden sits in a stand of tall trees in the center of the block of the North Ward bounded by Hassantyr's Street, Tarsar's Street, Whaelgond Way, and Ussilbran Street. The center of its jaw and mouth have been replaced by a door, which leads into the shop known as Thort's Findings. Undevvur Thort is a wizened ex-adventurer who leans on a cane (which some locals insist is more than just a cane). He lives in the small shop, whose many levels, staircases, and landings fill the hollowed-out interior of the head, and which is crammed with oddments sold to Thort by adventurers and other travelers. These items bear little placards in Thort's beautiful, flowing handwriting that identify them (or at least provide speculation as to their origin and purpose).</p>"
}, {
    name1: "The Grand Salle",
    name2: "",
    color: "#FF00FF",
    x: 1882,
    y: 2206,
    txt1: "<p>The Grand Salle is a highly respected school of the fighting arts operated by House Agundar.</p>"
}, {
    name1: "Waterdeep Wazoo",
    name2: "",
    color: "#FF00FF",
    x: 2771,
    y: 1474,
    txt1: "<p>The Waterdeep Wazoo is one of Waterdeep's Premier tabloid.</p>"
}, {
    name1: "Bronzeleaf Bowyers",
    name2: "",
    color: "#FF00FF",
    x: 2181,
    y: 1396,
    txt1: "<p>Bronzeleaf Bowyers is a weapons shop specializing in ranged weapons, primarily longbows, shortbows, and crossbows. It is owned by Quildor and Roseani Bronzeleaf.</p>"
}, {
    name1: "Verdas' potions and poisons",
    name2: "",
    color: "#FF00FF",
    x: 2933,
    y: 5330,
    txt1: "<p>Business. Potions & poisons. Run by an old lizardfolk with more then a few screws loose, this shop sells a wide variety of potions and potent poisons at a reasonable price.</p>"
}, {
    name1: "Sword Coast Traders' Bank",
    name2: "",
    color: "#FF00FF",
    x: 2877,
    y: 5489,
    txt1: "<p>In addition to serving as a normal bank, providing loans and wealth-keeping services, this holding of House Anteos is also capable of taking in coin in one of its three locations (Waterdeep, Baldur's Gate, and Daggerford), and communicating those numbers to any of its other branches magically, almost instantaneously. Rather than risking transporting coin on caravan or shipping routes, merchants moving between one of these three sites may simply place coin in their keeping in one spot, and come by to withdraw it from another (for a modest fee).</p>"
}, {
    name1: "Telvar's Tipples",
    name2: "",
    color: "#FF00FF",
    x: 2810,
    y: 4725,
    txt1: "<p>Only all-night wine shop in South Ward.</p>"
}, {
    name1: "Dandy Mops",
    name2: "",
    color: "#FF00FF",
    x: 2313,
    y: 3885,
    txt1: "<p>Wig shop that provides access to the sewers and Lossar Miklave's lair.</p>"
}, */{
    name1: "Weirdbottle's Concoctions",
    name2: "",
    color: "#FF00FF",
    x: 2260,
    y: 3103,
    txt1: "<p> Weirdbottle's Concoctions is managed Skeemo Weirdbottle. This rock gnome sells various non-magical herbal and chemical mixtures for all sorts of everyday uses, as well as some magical potions.</p>"
}, /*{
    name1: "Ohmtalakar's Fine Gems ",
    name2: "",
    color: "#FF00FF",
    x: 1563,
    y: 1422,
    txt1: "<p>Located on the second floor.</p>"
}, {
    name1: "Chanszobur's Manywares",
    name2: "",
    color: "#FF00FF",
    x: 1565,
    y: 1447,
    txt1: "<p>Glittering and highly regarded store. Favorite of nobles. Expensive but superior merchandise.</p>"
}, {
    name1: "Kiana's Mystericum",
    name2: "",
    color: "#FF00FF",
    x: 2436,
    y: 4049,
    txt1: "<p>The shop can be reached through a flight of stone stairs leading underground behind the House of Song. On the way down there are niches covered in thick spider webs from which eminates a faint glow of green light. Once at the bottom there is a stone entrance with an old door, covered in blistering paint. One can still faintly see painted letters spelling out 'Kiana's Mystericum - Shop for books, the wonderful and the weird'.</p>"
}, {
    name1: "Blackwell's Fine Books and Good Tomes",
    name2: "",
    color: "#FF00FF",
    x: 1470,
    y: 2391,
    txt1: "<p>Blackwell's Fine Books and Good Tomes is a posh retail shop, located in the shadow of the God Catcher statue. Owned and operated by the Blackwell family, Blackwell's Fine Books and Good Tomes specializes in rare and antique manuscripts. The shop is especially known, among the noble set, for its restoration, document preservation, as well as transcription services.  Mr Blackwell's son, Aldous, has been known to keep an eye on any ancient texts which spend time in the family's shoppe.</p><p>The Bookstore occupies the bottom of a three story building. The upper two stories are the Blackwell's lavish townhome apartment.</p>"
}, */{
    name1: "Curiosity & Satisfaction",
    name2: "",
    color: "#FF00FF",
    x: 2846,
    y: 4329,
    txt1: "<p>Bookstore. An old woman named Uza Solizeph, sells books out of her home. She has an adorable little grey cat named Fillipa. The shop recently had a strange encounter with a monster that had many eyes.</p>"
},
/* {
    name1: "GROUP",
    name2: "",
    color: "#000066",
    x: 0,
    y: 0,
    txt1: "Warehouses"
}, */ /*{
    name1: "House of Crystal Storage",
    name2: "",
    color: "#000066",
    x: 1849,
    y: 2481,
    txt1: "<p>Warehouse</p>",
    ref: "N45"
}, {
    name1: "Palace Storage",
    name2: "",
    color: "#000066",
    x: 1129,
    y: 3725,
    txt1: "<p>Warehouse</p>",
    ref: "C18"
}, {
    name1: "Hilmer Storage",
    name2: "",
    color: "#000066",
    x: 1923,
    y: 3763,
    txt1: "<p>Warehouse</p>",
    ref: "C22"
}, {
    name1: "Crammer's Warehouse",
    name2: "",
    color: "#000066",
    x: 1257,
    y: 4611,
    txt1: "<p>Warehouse</p>",
    ref: "C51"
}, {
    name1: "League of Basketmakers & Wickerworkers Storage",
    name2: "",
    color: "#000066",
    x: 2605,
    y: 4001,
    txt1: "<p>Warehouse</p>",
    ref: "T21"
}, {
    name1: "House of Light Storage",
    name2: "",
    color: "#000066",
    x: 2411,
    y: 4218,
    txt1: "<p>Warehouse</p>",
    ref: "T30"
}, {
    name1: "Dhaermos Storage",
    name2: "",
    color: "#000066",
    x: 1522,
    y: 4743,
    txt1: "<p>Warehouse</p>",
    ref: "D4"
}, {
    name1: "Helmstar Warehouse",
    name2: "",
    color: "#000066",
    x: 1829,
    y: 5316,
    txt1: "<p>Warehouse</p>",
    ref: "D14"
}, {
    name1: "Red Sails",
    name2: "",
    color: "#000066",
    x: 2061,
    y: 5467,
    txt1: "<p>This warehouse offers rental space to all, no questions asked. Material to be stored can't be alive or flammable.</p>",
    ref: "D20"
}, {
    name1: "Shippers' Storage",
    name2: "",
    color: "#000066",
    x: 2187,
    y: 5554,
    txt1: "<p>Warehouse</p>",
    ref: "D29"
}, {
    name1: "The House of Tarmagus",
    name2: "",
    color: "#000066",
    x: 2249,
    y: 5583,
    txt1: "<p>A nondescript warehouse complex in the Dock Ward that rents out its space to those needing to store goods. Concealed in its cavernous cellar is the The Keelhauled Dwarf, a subterranean tavern with low ceilings, good dwarf-brewed ale, and a dark, smoky ambiance. It is favored by duergar and their ilk, as well as many of the city's half-orcs, thugs, and ruffians.</p>",
    ref: "D30"
}, {
    name1: "Thomm Storage",
    name2: "",
    color: "#000066",
    x: 2871,
    y: 5983,
    txt1: "<p>Warehouse</p>",
    ref: "D49"
}, {
    name1: "Fellowship Storage",
    name2: "",
    color: "#000066",
    x: 2785,
    y: 6073,
    txt1: "<p>Warehouse</p>",
    ref: "D51"
}, {
    name1: "Maernath Storage",
    name2: "",
    color: "#000066",
    x: 2433,
    y: 5023,
    txt1: "<p>Warehouse</p>",
    ref: "D69"
}, {
    name1: "Alex Lenter's Storage",
    name2: "",
    color: "#000066",
    x: 1512,
    y: 4639,
    txt1: "<p>Warehouse</p>",
    ref: "D70"
}, {
    name1: "Bellister's House",
    name2: "",
    color: "#000066",
    x: 2978,
    y: 5830,
    txt1: "<p>Warehouse</p>",
    ref: "S25"
}, {
    name1: "Ingerr & Ingerr Warehouses",
    name2: "",
    color: "#000066",
    x: 2714,
    y: 5354,
    txt1: "<p>Warehouse</p>",
    ref: "S42"
}, */
{
    name1: "GROUP",
    name2: "",
    color: "#F4900A",
    x: 0,
    y: 0,
    txt1: "Noble villas"
}, /*{
    name1: "Adarbrent Villa",
    name2: "",
    color: "#F4900A",
    x: 1810,
    y: 2393,
    txt1: "<p>Noble villa. House Adarbrent is one Waterdeep's leading shipping clans, with strong ties to the navy and the Master Mariners' Guild.</p>",
    ref: "N39"
}, {
    name1: "Agundar Villa",
    name2: "",
    color: "#F4900A",
    x: 1878,
    y: 2132,
    txt1: "<p>Noble villa. House Agundar operates several mercenary companies and runs the Grand Salle, a school of the fighting arts.</p>",
    ref: "N33"
}, {
    name1: "Amcathra Villa",
    name2: "",
    color: "#F4900A",
    x: 2128,
    y: 2250,
    txt1: "<p>Noble villa. House Amcathra has a long and distinguished history in the service of Waterdeep, and a wide variety of trading interests. Tethyrian family.</p>",
    ref: "N34"
}, {
    name1: "Ammakyl Villa",
    name2: "",
    color: "#F4900A",
    x: 1848,
    y: 1374,
    txt1: "<p>Noble villa. House Ammakyl was a Waterdeep noble family known for being farmers and vintners. Their manor was located between Copper Street and Shield Street.</p>",
    ref: "$27"
}, {
    name1: "Anteos Villa",
    name2: "",
    color: "#F4900A",
    x: 2439,
    y: 1089,
    txt1: "<p>Noble villa.</p>",
    ref: "N3"
}, {
    name1: "Artemel Villa",
    name2: "",
    color: "#F4900A",
    x: 1665,
    y: 1419,
    txt1: "<p>Noble villa.</p>",
    ref: "$26"
}, {
    name1: "Assumbar Villa",
    name2: "",
    color: "#F4900A",
    x: 1048,
    y: 1688,
    txt1: "<p>Noble villa. Houses the small temple to Siamorphe who is a demigod of Nobility.</p>",
    ref: "$47"
}, {
    name1: "Belabranta Villa",
    name2: "",
    color: "#F4900A",
    x: 1450,
    y: 1840,
    txt1: "<p>Noble villa.</p>",
    ref: "$52"
}, {
    name1: "Bladesemmer Villa",
    name2: "",
    color: "#F4900A",
    x: 1638,
    y: 1856,
    txt1: "<p>Noble villa.</p>",
    ref: "$53"
}, {
    name1: "Brokengulf Villa",
    name2: "",
    color: "#F4900A",
    x: 1359,
    y: 1140,
    txt1: "<p>Noble villa.</p>",
    ref: "$11"
}, {
    name1: "Brossfeather Villa",
    name2: "",
    color: "#F4900A",
    x: 2230,
    y: 1105,
    txt1: "<p>Noble villa.</p>",
    ref: "N2"
}, {
    name1: "Cassalanter Villa",
    name2: "",
    color: "#F4900A",
    x: 1139,
    y: 1657,
    txt1: "<p>Noble villa.</p>",
    ref: "$48"
}, {
    name1: "Cragsmere Villa",
    name2: "",
    color: "#F4900A",
    x: 1992,
    y: 1496,
    txt1: "<p>Noble villa.</p>",
    ref: "N13"
}, {
    name1: "Crommor Villa",
    name2: "",
    color: "#F4900A",
    x: 2152,
    y: 1275,
    txt1: "<p>Noble villa.</p>",
    ref: "N6"
}, {
    name1: "Dezlentyr Villa",
    name2: "",
    color: "#F4900A",
    x: 1272,
    y: 1685,
    txt1: "<p>Noble villa.</p>",
    ref: "$51"
}, {
    name1: "Durinbold Villa",
    name2: "",
    color: "#F4900A",
    x: 2238,
    y: 1989,
    txt1: "<p>Noble villa.</p>",
    ref: "N28"
}, {
    name1: "Eagleshield Villa",
    name2: "",
    color: "#F4900A",
    x: 1221,
    y: 1845,
    txt1: "<p>Noble villa.</p>",
    ref: "$50"
}, {
    name1: "Eirontalar Villa",
    name2: "",
    color: "#F4900A",
    x: 1283,
    y: 1481,
    txt1: "<p>Noble villa.</p>",
    ref: "$33"
}, {
    name1: "Eltorchul Villa",
    name2: "",
    color: "#F4900A",
    x: 1205,
    y: 1227,
    txt1: "<p>Noble villa. Also serves as an Academy for the arcane.</p>",
    ref: "$22"
}, {
    name1: "Emveolstone Villa",
    name2: "",
    color: "#F4900A",
    x: 794,
    y: 1204,
    txt1: "<p>Noble villa.</p>",
    ref: "$6"
}, {
    name1: "Estelmer Villa",
    name2: "",
    color: "#F4900A",
    x: 2340,
    y: 2072,
    txt1: "<p>Noble villa.</p>",
    ref: "N29"
}, {
    name1: "Firesong Villa",
    name2: "",
    color: "#F4900A",
    x: 2253,
    y: 1800,
    txt1: "<p>Villa.</p>",
    ref: "N76"
}, {
    name1: "Gauntyl Villa",
    name2: "",
    color: "#F4900A",
    x: 1147,
    y: 1172,
    txt1: "<p>Noble villa.</p>",
    ref: "$9"
}, {
    name1: "Gost Villa",
    name2: "",
    color: "#F4900A",
    x: 2546,
    y: 2657,
    txt1: "<p>Noble villa.</p>",
    ref: "N57"
}, */{
    name1: "Gralhund Villa",
    name2: "",
    color: "#F4900A",
    x: 2669,
    y: 1636,
    txt1: "<p>Noble villa.</p>",
    ref: "N20"
}, /*{
    name1: "Gundwynd Villa",
    name2: "",
    color: "#F4900A",
    x: 1467,
    y: 1409,
    txt1: "<p>Noble villa.</p>",
    ref: "$24"
}, {
    name1: "Hawkwinter Villa",
    name2: "",
    color: "#F4900A",
    x: 2553,
    y: 1394,
    txt1: "<p>Noble villa.</p>",
    ref: "N11"
}, {
    name1: "Helmfast Villa",
    name2: "",
    color: "#F4900A",
    x: 2667,
    y: 2653,
    txt1: "<p>Noble villa.</p>",
    ref: "N58"
}, {
    name1: "Hiilgauntlet Villa",
    name2: "",
    color: "#F4900A",
    x: 934,
    y: 1230,
    txt1: "<p>Noble villa.</p>",
    ref: "$7"
}, {
    name1: "Hunabar Villa",
    name2: "",
    color: "#F4900A",
    x: 2238,
    y: 2130,
    txt1: "<p>Noble villa.</p>",
    ref: "N35"
}, {
    name1: "Husteem Villa",
    name2: "",
    color: "#F4900A",
    x: 938,
    y: 1479,
    txt1: "<p>Noble villa.</p>",
    ref: "$31"
}, {
    name1: "Hothemer Villa",
    name2: "",
    color: "#F4900A",
    x: 2380,
    y: 2520,
    txt1: "<p>Noble villa. Home to House Hothemer, a wealthy merchant family ennobled in 1248 DR.</p>",
    ref: "N52"
}, {
    name1: "Ilitul Villa",
    name2: "",
    color: "#F4900A",
    x: 767,
    y: 1254,
    txt1: "<p>Noble villa.</p>",
    ref: "$17"
}, {
    name1: "Ilzimmer Villa",
    name2: "",
    color: "#F4900A",
    x: 868,
    y: 1563,
    txt1: "<p>Noble villa.</p>",
    ref: "$40"
}, {
    name1: "Irlingstar Villa",
    name2: "",
    color: "#F4900A",
    x: 1559,
    y: 1651,
    txt1: "<p>Noble villa.</p>",
    ref: "$35"
}, {
    name1: "Ilvastarr Villa",
    name2: "",
    color: "#F4900A",
    x: 2835,
    y: 2470,
    txt1: "<p>Noble villa.</p>",
    ref: "N53"
}, {
    name1: "Jardeth Villa",
    name2: "",
    color: "#F4900A",
    x: 2552,
    y: 1711,
    txt1: "<p>Noble villa. The Jardeth family headquarters was a walled compound of two-story buildings surrounding some gardens located in the North Ward of Waterdeep.</p>",
    ref: "N19"
}, {
    name1: "Jhansczil Villa",
    name2: "",
    color: "#F4900A",
    x: 1988,
    y: 1136,
    txt1: "<p>Noble villa.</p>",
    ref: "$14"
}, {
    name1: "Kormallis Villa",
    name2: "",
    color: "#F4900A",
    x: 2708,
    y: 2166,
    txt1: "<p>Noble villa.</p>",
    ref: "N38"
}, {
    name1: "Kothont Villa",
    name2: "",
    color: "#F4900A",
    x: 1884,
    y: 1721,
    txt1: "<p>Noble villa.</p>",
    ref: "N15"
}, {
    name1: "Lanngolyn Villa",
    name2: "",
    color: "#F4900A",
    x: 2123,
    y: 1694,
    txt1: "<p>Noble villa.</p>",
    ref: "N17"
}, {
    name1: "Lathkule Villa",
    name2: "",
    color: "#F4900A",
    x: 2544,
    y: 2160,
    txt1: "<p>Noble villa.</p>",
    ref: "N37"
}, {
    name1: "Maerklos Villa",
    name2: "",
    color: "#F4900A",
    x: 2361,
    y: 1873,
    txt1: "<p>Noble villa.</p>",
    ref: "N22"
}, {
    name1: "Majarra Villa",
    name2: "",
    color: "#F4900A",
    x: 2703,
    y: 2006,
    txt1: "<p>Noble villa. House Majarra is an old family descended from Delimbiyran nobility. They are in the business of harping, harp-making, and silver mining.</p>",
    ref: "N31"
}, {
    name1: "Manthar Villa",
    name2: "",
    color: "#F4900A",
    x: 1733,
    y: 1607,
    txt1: "<p>Noble villa.</p>",
    ref: "$36"
}, {
    name1: "Margaster Villa",
    name2: "",
    color: "#F4900A",
    x: 2401,
    y: 2353,
    txt1: "<p>Noble villa. Illuskan family with business in land-based shipping and bulk goods trading.</p>",
    ref: "N41"
}, {
    name1: "Massalan Villa",
    name2: "",
    color: "#F4900A",
    x: 2142,
    y: 1631,
    txt1: "<p>Noble villa.</p>",
    ref: "N14"
}, {
    name1: "Moonstar Villa",
    name2: "",
    color: "#F4900A",
    x: 942,
    y: 1831,
    txt1: "<p>Noble villa. House Moonstar is one of Waterdeep's oldest families, with strong ties to the Church of Selune, the Master Mariners' Guild, and the Surveyors', Map & Chart-makers' Guild.</p>",
    ref: "$57"
}, {
    name1: "Melshimber' Villa",
    name2: "",
    color: "#F4900A",
    x: 712,
    y: 1321,
    txt1: "<p>Noble villa.</p>",
    ref: "$16"
}, {
    name1: "Mitsunari Villa",
    name2: "",
    color: "#F4900A",
    x: 1701,
    y: 2080,
    txt1: "<p>House Mitsunari is a transplant house from Kozakura, a region in Kara-Tur. They are a merchant family that specializes in fine silks, dyes, and porcelain.</p>"
}, {
    name1: "Nandar Villa",
    name2: "",
    color: "#F4900A",
    x: 2452,
    y: 1822,
    txt1: "<p>Noble villa.</p>",
    ref: "N23"
}, {
    name1: "Nesher Villa",
    name2: "",
    color: "#F4900A",
    x: 1371,
    y: 1290,
    txt1: "<p>Noble villa.</p>",
    ref: "$23"
}, {
    name1: "Phaulkonmere",
    name2: "",
    color: "#F4900A",
    x: 2660,
    y: 5353,
    txt1: "<p>Noble villa. The walls of this noble villa, owned by descendants of two wealthy families - the Tarms and the Phaulkons - enclose fabulous gardens, and the buildings are covered with moss and ivy.</p>",
    ref: "S44"
}, {
    name1: "Phylund Villa",
    name2: "",
    color: "#F4900A",
    x: 1959,
    y: 2395,
    txt1: "<p>Noble villa. Tashlutar family that captures and sells monsters.</p>",
    ref: "N40"
}, {
    name1: "Piiradost Villa",
    name2: "",
    color: "#F4900A",
    x: 2209,
    y: 1310,
    txt1: "<p>Noble villa.</p>",
    ref: "N7"
}, {
    name1: "Raventree Villa",
    name2: "",
    color: "#F4900A",
    x: 1544,
    y: 1197,
    txt1: "<p>Noble villa.</p>",
    ref: "$12"
}, {
    name1: "Rosznar Villa",
    name2: "",
    color: "#F4900A",
    x: 1892,
    y: 1122,
    txt1: "<p>Noble villa. Tethyrian family with business in wine-making and gem trading.</p>",
    ref: "$13"
}, {
    name1: "Roaringhorn Villa",
    name2: "",
    color: "#F4900A",
    x: 2738,
    y: 2292,
    txt1: "<p>Noble villa. Roaringhorn was a noble house of Waterdeep. Both the Waterdhavian and Cormyrean branches of the family had a historical reputation for being bold, impetuous, and living with a zest for life. Their detractors characterized them as reckless, boorish, and lustful.</p>",
    ref: "N42"
}, {
    name1: "Ruldegost Villa",
    name2: "",
    color: "#F4900A",
    x: 674,
    y: 1455,
    txt1: "<p>Noble villa.</p>",
    ref: "$29"
}, {
    name1: "Silmerhelve Villa",
    name2: "",
    color: "#F4900A",
    x: 2036,
    y: 1344,
    txt1: "<p>Noble villa. Silmerhelve is one of the older noble houses; traditionally their trade and business interest include guardianship, warrior-training and pandering. The Silmerhelve's history seems almost charmed in comparison to so many of their fellows. The Wailing Years seem to have affected them almost not at all, with their businesses booming. Of course, the fact that their essential identity is centered around the idea of protecting folk just means they had more than enough work to keep them secure and prosperous. The wall surrounding Shieldwatch seems prepared for war: it is ten feet tall and of an imposing thickness. It is also dotted with arrow slit openings every ten feet.</p>",
    ref: "$28"
}, {
    name1: "Snome Villa",
    name2: "",
    color: "#F4900A",
    x: 2582,
    y: 1216,
    txt1: "<p>Noble villa.</p>",
    ref: "N5"
}, {
    name1: "Stormweather Villa",
    name2: "",
    color: "#F4900A",
    x: 2641,
    y: 1819,
    txt1: "<p>Noble villa.</p>",
    ref: "N24"
}, {
    name1: "Sultlue Villa",
    name2: "",
    color: "#F4900A",
    x: 1884,
    y: 1497,
    txt1: "<p>Noble villa.</p>",
    ref: "N12"
}, {
    name1: "Talmost Villa",
    name2: "",
    color: "#F4900A",
    x: 2116,
    y: 1411,
    txt1: "<p>Noble villa. The lavish family home to the Talmost noble family.</p>",
    ref: "N9"
}, {
    name1: "Tarm Villa",
    name2: "",
    color: "#F4900A",
    x: 2575,
    y: 2002,
    txt1: "<p>Noble villa.</p>",
    ref: "N30"
}, {
    name1: "Tchazzam Villa",
    name2: "",
    color: "#F4900A",
    x: 718,
    y: 1703,
    txt1: "<p>Noble villa.</p>",
    ref: "$44"
}, {
    name1: "Tesper Villa - Tespergates",
    name2: "",
    color: "#F4900A",
    x: 1329,
    y: 1621,
    txt1: "<p>Noble villa.</p>",
    ref: "$34"
}, {
    name1: "Thann Villa",
    name2: "",
    color: "#F4900A",
    x: 2410,
    y: 1356,
    txt1: "<p>Noble villa. House Thann is one of Waterdeep's leading vintners, with large land-holdings in the South and strong ties to Blackstaff Tower. They have strong ties with the Vintners', Distillers' & Brewers' Guild.</p>",
    ref: "N10"
}, {
    name1: "Thongolir Villa",
    name2: "",
    color: "#F4900A",
    x: 1166,
    y: 1818,
    txt1: "<p>Noble villa.</p>",
    ref: "$49"
}, {
    name1: "Thorp Villa",
    name2: "",
    color: "#F4900A",
    x: 2344,
    y: 2188,
    txt1: "<p>Noble villa.</p>",
    ref: "N36"
}, {
    name1: "Thunderstaff Villa",
    name2: "",
    color: "#F4900A",
    x: 2270,
    y: 1207,
    txt1: "<p>Noble villa.</p>",
    ref: "N8"
}, {
    name1: "Ulbrinter Villa",
    name2: "",
    color: "#F4900A",
    x: 2350,
    y: 1699,
    txt1: "<p>Noble villa. Remallia Haventree is the lady of House Ulbrinter. She became an active force for good in the city after assassins killed her husband, Arthagast Ulbrinter.</p>",
    ref: "N18"
}, {
    name1: "Urmbrusk Villa",
    name2: "",
    color: "#F4900A",
    x: 902,
    y: 1695,
    txt1: "<p>Noble villa of House Urmbrusk, who made their wealth on money lending and land-owning and rose to political power in Waterdeep.</p>",
    ref: "$46"
}, {
    name1: "Wands Villa",
    name2: "",
    color: "#F4900A",
    x: 2328,
    y: 2665,
    txt1: "<p>Noble villa. House Wands is one of Waterdeep's leading magecraft clans, with strong ties to the Watchful Order of Magists & Protectors and Blackstaff Tower.</p>",
    ref: "N55"
}, {
    name1: "Wavesilver Villa",
    name2: "",
    color: "#F4900A",
    x: 1027,
    y: 1335,
    txt1: "<p>Noble villa.</p>",
    ref: "$20"
}, {
    name1: "Zulpair Villa",
    name2: "",
    color: "#F4900A",
    x: 1133,
    y: 1543,
    txt1: "<p>Noble villa.</p>",
    ref: "$32"
}, {
    name1: "Zun Villa",
    name2: "",
    color: "#F4900A",
    x: 2946,
    y: 2270,
    txt1: "<p>Noble villa.</p>",
    ref: "N44"
}, */
{
    name1: "GROUP",
    name2: "",
    color: "#FFFFFF",
    x: 0,
    y: 0,
    txt1: "Places & Streets"
}, {
    name1: "Heroes' Garden",
    name2: "",
    color: "#FFFFFF",
    x: 1428,
    y: 828,
    txt1: "<p>Waterdeep's only public park outside the City of the Dead is a large, lush area of grass, trees, and ponds once covered by the sprawling school of wizardry known as the Tower of Yintros. A number of statues decorate the area, including large marble statues to the Open Lords Baeron and Lhestyn (in her guise as the Masked Lady). It is often the scene of adventurers retelling tales of their exploits to others and attendant local children. The watch and the local citizenry tend to the park, which means they keep the park free of debris and prevent would-be heroes from carving their names into the trees.</p>",
    ref: "$70"
}, {
    name1: "Field of Triumph",
    name2: "",
    color: "#FFFFFF",
    x: 624,
    y: 2230,
    txt1: "<p>Huge open-air stadium. Site of many spectacles staged for the populace of Waterdeep.</p>",
    ref: "$77"
}, {
    name1: "Fetlock Court",
    name2: "",
    color: "#FFFFFF",
    x: 1087,
    y: 3590,
    txt1: "<p>Large paved courtyard adjoining the Palace paddocks and stables. Staging area for any mounted contingent of the guard before they head out of the city for outlying patrols.</p>"
}, {
    name1: "The Market",
    name2: "",
    color: "#FFFFFF",
    x: 1548,
    y: 2719,
    txt1: "<p>Open marketplace. Largest open space in the city surrounded by stone buildings that enclose the maze of temporary stalls and carts that appear here day and night.</p>"
}, {
    name1: "Blackstaff Tower",
    name2: "",
    color: "#FFFFFF",
    x: 989,
    y: 2842,
    txt1: "<p>Blackstaff is the title and name given to the master of the eponymous staff and the Archmage of Waterdeep. Vajra Safahr, a young woman from Tethyr, is the current Blackstaff.</p>",
    ref: "C6"
}, /* {
    name1: "The Cynosure",
    name2: "",
    color: "#FFFFFF",
    x: 1369,
    y: 2660,
    txt1: "<p>Since 1359, the Lords of Waterdeep annexed this former temple building and put it to use as a public hall, available for rent by nobles and wealthy merchants for parties, balls, weddings, and other events.</p>",
    ref: "C7"
},  {
    name1: "New Olamn's academy of music and other arts",
    name2: "",
    color: "#FFFFFF",
    x: 712,
    y: 2701,
    txt1: "<p>Prominent center of education and bardcraft, constantly exposed to the sea winds and spray of the ocean below.</p>",
    ref: "C72"
}, */{
    name1: "Court of the White Bull",
    name2: "",
    color: "#FFFFFF",
    x: 2787,
    y: 4209,
    txt1: "<p>Packed-dirt plaza which intermittently acquires the planar trait of wild magic. As a result, no one has ever dared build on the location, making it a natural meeting place and market for caravan owners to peddle their wares from wagons.</p>"
}, {
    name1: "Virgin's Square",
    name2: "",
    color: "#FFFFFF",
    x: 2333,
    y: 4286,
    txt1: "<p>Market and traditional hiring place for warriors is named for a local legend that virgins were sacrificed to dragons on this spot, long before the founding of Waterdeep.</p>"
}, {
    name1: "Caravan Court",
    name2: "",
    color: "#FFFFFF",
    x: 2915,
    y: 4713,
    txt1: "<p>Most caravans entering or leaving through the Southern Gate muster or disband in Caravan Court, making it a scene of nonstop activity and chaos.</p>"
}, {
    name1: "Waymoot",
    name2: "",
    color: "#FFFFFF",
    x: 2930,
    y: 5895,
    txt1: "<p>High signpost mounted in the middle of the crossroads with hanging arrows pointing toward the harbor and each of the city gates. It magically directs travelers to locations spoken into a crystal on the post.</p>"
}, {
    name1: "Stormhaven Island",
    name2: "",
    color: "#FFFFFF",
    x: 281,
    y: 5874,
    txt1: "<p>Island</p>"
}, {
    name1: "Deepwater Isle",
    name2: "",
    color: "#FFFFFF",
    x: 1306,
    y: 6728,
    txt1: "<p>Island</p>"
}, {
    name1: "Asmagh's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1600,
    y: 3540,
    txt1: "<p>Asmagh was an apothecary who would poison and bury patients upright beneath the alley. Upon being discovered as many as eighty bodies were exhumed from the alleys wide flagstones. Though this happened over a century ago, children and some adults hop on one foot when crossing Asmagh's Alley singing a song: <em>Hop for the hollows, hop for the dead, hop on the flagstones, hop on their heads</em>.</p>"
}, {
    name1: "Black Dog Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2774,
    y: 1377,
    txt1: "<p>Street</p>"
}, {
    name1: "Black Wagon Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2428,
    y: 4833,
    txt1: "<p>This narrow way leads to a warren of houses of the poor, including some thieves. City watch patrols are often busy cutting away tripwires and stranglewires from its more easterly stretches.</p>"
}, {
    name1: "Black Well Court",
    name2: "",
    color: "#FFFFFF",
    x: 2281,
    y: 4734,
    txt1: "<p>This cramped courtyard is known for its long-polluted well and as the meeting place of many gangs of street ruffians, thugs, and cultists over the years. As such, it is regularly patrolled by the city guard and the watch.</p>"
}, {
    name1: "The Blue Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1025,
    y: 1227,
    txt1: "<p>Most who enter this alley don't come back.</p>",
    ref: "$8"
}, {
    name1: "Brindul Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2822,
    y: 4347,
    txt1: "<p>Infamous Alley. This is the lair of the Hand that Sings, a magical phantasm of a hand with a mouth in its palm. The hand is said to snatch valuables it fancies - especially magical ones - when it encounters them, an to occasionally attack folk in the darkness, strangling them or tripping them into fatal falls. Most often, though, it takes no notice of those who don't bother of follow it, eerily singing fragments of old Sword Coast ballads and love songs as it drifts through the night.</p>"
}, {
    name1: "Buckle Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1937,
    y: 3569,
    txt1: "<p>A busy thoroughfare used by carters, tradesmen making deliveries, and local folk on foot.</p>"
}, {
    name1: "Cat Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2081,
    y: 3929,
    txt1: "<p>Street</p>"
}, {
    name1: "The Cat's Tail",
    name2: "",
    color: "#FFFFFF",
    x: 2113,
    y: 4003,
    txt1: "<p>This passage runs behind two guildhalls, the Blue Jack tavern, and the Jade Jug, whose stables stand across it. The influence of the money and power vested here has caused this alley to be brightly lit by glowing globes by night and patrolled by private guards.</p>"
}, {
    name1: "Candle Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2424,
    y: 4962,
    txt1: "<p>Its name comes from its extreme gloominess, which made bookish sorts lit targets for thieves. It is now heavily patrolled. The Thirsty Throat tavern stands at its eastern end.</p>"
}, {
    name1: "Chelor's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2715,
    y: 4252,
    txt1: "<p>Street</p>"
}, {
    name1: "Duir's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1929,
    y: 3800,
    txt1: "<p>This busy, winding passage is often the scene of spell demonstrations and practice, as patrons or staff spill out of the rear of the Elfstone Tavern and unleash magic down the alley.</p>"
}, {
    name1: "Elsambul's Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1723,
    y: 3052,
    txt1: "<p>Street</p>"
}, {
    name1: "Fishnet Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2467,
    y: 5677,
    txt1: "<p>This narrow crowded alley gets its name from the drying nets that are hung across it at various levels from wall hooks by night or for repair by day. Down the years, these nets have broken the fall of many thieves and lovers leaping from windows, or have been dropped from above by thugs to entrap people passing along the alley. Although it looks like the web-choked lair of some giant spider, this alley is usually quite safe.</p>"
}, {
    name1: "The Forcebar",
    name2: "",
    color: "#FFFFFF",
    x: 2811,
    y: 5078,
    txt1: "<p>Street</p>"
}, {
    name1: "The Ghostwalk",
    name2: "",
    color: "#FFFFFF",
    x: 857,
    y: 912,
    txt1: "<p>Street</p>"
}, {
    name1: "Gondwatch Lane",
    name2: "",
    color: "#FFFFFF",
    x: 755,
    y: 1664,
    txt1: "<p>Infamous Alley. This alley serves as the testing ground for inventions considered too dangerous to operate inside the temple. The locals are generally unconcerned about the risks, though, and stand watching while food vendors circulate among them.</p>"
}, {
    name1: "Hillock Court",
    name2: "",
    color: "#FFFFFF",
    x: 1936,
    y: 4172,
    txt1: "<p>Court</p>"
}, {
    name1: "Howling Cat Court",
    name2: "",
    color: "#FFFFFF",
    x: 1416,
    y: 3539,
    txt1: "<p>A clandestine meeting place for ladies of the evening and their clients, street gangs, and others. Thieves lurk here, too.</p>"
}, {
    name1: "Jester's Court",
    name2: "",
    color: "#FFFFFF",
    x: 1408,
    y: 3443,
    txt1: "<p>A large courtyard used by ladies of the evening and by minstrels. Sometimes it also becomes an improvised dance court for the locals. By Waterdhavian legend, it's also the place for couples in love to meet before eloping.</p>"
}, {
    name1: "Kulzar's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1596,
    y: 866,
    txt1: "<p>Street</p>"
}, {
    name1: "Lemontree Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1406,
    y: 3828,
    txt1: "<p>Opening off Shadows Alley north of Cage Street in the first block of buildings east of the Palace of Waterdeep, this tiny threelegged passage is crowded with the lemon trees for which it is named. Brought here by a local wizard, whose spells give heat enough to keep them alive, these tropical trees are an unexpected delight. Waterdeep is much too cold for them to survive under normal conditions. Those who are tempted to take fruit from the trees, break a branch off, or just take a swing at one of them, are warned that the wizard, Narthindlar of the Nine Spells, has set a guardian monster on these trees</p><p>Narthindlar has provided benches under the trees, and can sometimes be found sitting on one of them, puffing on a pipe and contemplating life, Faerun, and magic. Diplomats who need to blow off steam or chat away from prying ears in the palace sometimes find their way here, too.</p>"
}, {
    name1: "Lhoril's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1966,
    y: 3971,
    txt1: "<p>A busy delivery area and garbagepiling place.</p>"
}, {
    name1: "Manycats Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1877,
    y: 2428,
    txt1: "<p>Infamous Alley. Unsurprisingly, home to many cats the feed on scraps from the surrounding butchers' shops, but it is also known for the many carved stone heads of people and animals that adorn the alley's buildings. Individuals who have walked the alley alone report that some of the heads whispered cryptic messages to them.</p>"
}, {
    name1: "Pharra's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1203,
    y: 1347,
    txt1: "<p>Infamous Alley. This alley is named after the first leader of the House of Wonder, but is more infamous for its Circle of Skulls. This infrequent and unpredictable haunting takes the form of seven floating skulls, which hover in a circle and argue with one another in whispered tones about events in the city. If they are interrupted, their reaction reportedly varies from being helpful to engaging in murderous spell-slinging.</p>"
}, {
    name1: "The Prowl",
    name2: "",
    color: "#FFFFFF",
    x: 1598,
    y: 3122,
    txt1: "<p>Favorite hunting ground of a pair of skeletal hands. Some folk have reported seeing two points of light close together in the air, like floating glowing eyes.</p>"
}, {
    name1: "Quill Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2663,
    y: 4086,
    txt1: "<p>Traditional neighborhood of scribes, cartographers, and clerks. You can hire many here.</p>"
}, {
    name1: "Rook Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1628,
    y: 895,
    txt1: "<p>Street</p>"
}, {
    name1: "Ruid's Stroll",
    name2: "",
    color: "#FFFFFF",
    x: 2988,
    y: 4771,
    txt1: "<p>This short avenue is haunted by the hooded ghost of a mage, whose touch causes deathly chills to those he meets on foggy nights. All attempts to banish or turn the spirit have failed. Those who brave its unearthly approach and allow the mage to pass through them learn a secret truth about someone or something in their life - if they survive.</p>"
}, {
    name1: "Satchel Alley",
    name2: "",
    color: "#FFFFFF",
    x: 623,
    y: 1742,
    txt1: "<p>A place where the coaches, carts, and mounts of the travelers staying at the inns all around it load and unload their passengers and cargo.</p>"
}, {
    name1: "Sevenlamps Cut",
    name2: "",
    color: "#FFFFFF",
    x: 1246,
    y: 3476,
    txt1: "<p>The alley is named for the seven ornate, everburning, magical lamps installed here long ago. This is the place where apprentice wizards and starving or wandering underpriests in need of money gather to offer their services at spellcasting in return for coin, so the place to hire a spellcaster if you're about to brave Undermountain's depths.</p>"
}, {
    name1: "Shadow Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1349,
    y: 3847,
    txt1: "<p>Known for the duels often fought at night here by diplomats or young nobles.</p>"
}, {
    name1: "Spendthrift Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2415,
    y: 3954,
    txt1: "<p>Ongoing bazaar of stalls and street vendors, selling everything cheap. This shoppers' gift from the gods never closes.</p>"
}, {
    name1: "Stabbed Sailor Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2445,
    y: 2253,
    txt1: "<p>The alleyway is a busy but safe delivery route.</p>"
}, {
    name1: "Three Daggers Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2110,
    y: 4948,
    txt1: "<p>Infamous Alley. This alley suffers from a magical curse that causes three daggers to appear out of thin air and attack passersby. The daggers swoop and fly about, making multiple attempts at murder before vanishing again. This magical effect, the result of a spell cast by a long-dead wizard, has resisted all attempts to dispel it. Some locals boast of how many times they've crossed the alley and lived to tell of it, but the appearance of the daggers is entirely a matter of chance, and unpredictable.</p>"
}, {
    name1: "Trollskull Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2381,
    y: 1612,
    txt1: "<p>This alley's deadend is a favorite night haunt of gambling gangs. By day it is safe and crowded with carts of garbage and delivered goods for the businesses that back onto it. By night, it is the turf of aggressive youths.</p>"
}, {
    name1: "Turnback Court",
    name2: "",
    color: "#FFFFFF",
    x: 1157,
    y: 3353,
    txt1: "<p>Court</p>"
}, {
    name1: "Wagonslide Alley",
    name2: "",
    color: "#FFFFFF",
    x: 607,
    y: 1561,
    txt1: "<p>Street</p>"
}, {
    name1: "Zeldan's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1805,
    y: 3852,
    txt1: "<p>Street</p>"
}, {
    name1: "Street of Lances",
    name2: "",
    color: "#FFFFFF",
    x: 910,
    y: 501,
    txt1: "<p>Street</p>"
}, {
    name1: "Trollkill Street",
    name2: "",
    color: "#FFFFFF",
    x: 1583,
    y: 778,
    txt1: "<p>Street</p>"
}, {
    name1: "Aurenaar Street",
    name2: "",
    color: "#FFFFFF",
    x: 1021,
    y: 751,
    txt1: "<p>Street</p>"
}, {
    name1: "Aureenar Street",
    name2: "",
    color: "#FFFFFF",
    x: 1021,
    y: 751,
    txt1: "<p>Street</p>"
}, {
    name1: "Breeze's Cut",
    name2: "",
    color: "#FFFFFF",
    x: 751,
    y: 760,
    txt1: "<p>Street</p>"
}, {
    name1: "Phastal Street",
    name2: "",
    color: "#FFFFFF",
    x: 1283,
    y: 813,
    txt1: "<p>Street</p>"
}, {
    name1: "Stormstar's Ride",
    name2: "",
    color: "#FFFFFF",
    x: 1119,
    y: 900,
    txt1: "<p>Street</p>"
}, {
    name1: "Morningstar Way",
    name2: "",
    color: "#FFFFFF",
    x: 1019,
    y: 790,
    txt1: "<p>Street</p>"
}, {
    name1: "Heroes's Walk",
    name2: "",
    color: "#FFFFFF",
    x: 1384,
    y: 789,
    txt1: "<p>Street</p>"
}, {
    name1: "Street of Glances",
    name2: "",
    color: "#FFFFFF",
    x: 1230,
    y: 937,
    txt1: "<p>Street</p>"
}, {
    name1: "The Fanebar",
    name2: "",
    color: "#FFFFFF",
    x: 1645,
    y: 954,
    txt1: "<p>Street</p>"
}, {
    name1: "Skull Street",
    name2: "",
    color: "#FFFFFF",
    x: 1557,
    y: 1004,
    txt1: "<p>Street</p>"
}, {
    name1: "Westwall Street",
    name2: "",
    color: "#FFFFFF",
    x: 554,
    y: 1334,
    txt1: "<p>Street</p>"
}, {
    name1: "Telchar Lane",
    name2: "",
    color: "#FFFFFF",
    x: 875,
    y: 1007,
    txt1: "<p>Street</p>"
}, {
    name1: "Staghunter's Way",
    name2: "",
    color: "#FFFFFF",
    x: 1089,
    y: 1057,
    txt1: "<p>Street</p>"
}, {
    name1: "Wrightstone Street",
    name2: "",
    color: "#FFFFFF",
    x: 1650,
    y: 1092,
    txt1: "<p>Street</p>"
}, {
    name1: "Bliss Street",
    name2: "",
    color: "#FFFFFF",
    x: 625,
    y: 1150,
    txt1: "<p>Street</p>"
}, {
    name1: "Gorl Street",
    name2: "",
    color: "#FFFFFF",
    x: 922,
    y: 1136,
    txt1: "<p>Street</p>"
}, {
    name1: "Lhestyn's Court",
    name2: "",
    color: "#FFFFFF",
    x: 1980,
    y: 1216,
    txt1: "<p>Court</p>"
}, {
    name1: "Ignorance Alley",
    name2: "",
    color: "#FFFFFF",
    x: 654,
    y: 1240,
    txt1: "<p>Street</p>"
}, {
    name1: "Ivory Street",
    name2: "",
    color: "#FFFFFF",
    x: 1048,
    y: 1254,
    txt1: "<p>Street</p>"
}, {
    name1: "Chasso's Trot",
    name2: "",
    color: "#FFFFFF",
    x: 1639,
    y: 1277,
    txt1: "<p>Street</p>"
}, {
    name1: "Sighing Maiden's Walk",
    name2: "",
    color: "#FFFFFF",
    x: 1009,
    y: 1102,
    txt1: "<p>Street</p>"
}, {
    name1: "Diamond Street",
    name2: "",
    color: "#FFFFFF",
    x: 1089,
    y: 1725,
    txt1: "<p>Street</p>"
}, {
    name1: "Grimwald's Way",
    name2: "",
    color: "#FFFFFF",
    x: 668,
    y: 1423,
    txt1: "<p>Street</p>"
}, {
    name1: "Vondil Street",
    name2: "",
    color: "#FFFFFF",
    x: 1639,
    y: 1475,
    txt1: "<p>Street</p>"
}, {
    name1: "Shark Street",
    name2: "",
    color: "#FFFFFF",
    x: 742,
    y: 1557,
    txt1: "<p>Street</p>"
}, {
    name1: "Street of Whispers",
    name2: "",
    color: "#FFFFFF",
    x: 810,
    y: 1689,
    txt1: "<p>Street</p>"
}, {
    name1: "Flint Street",
    name2: "",
    color: "#FFFFFF",
    x: 1113,
    y: 1359,
    txt1: "<p>Street</p>"
}, {
    name1: "Seawatch Street",
    name2: "",
    color: "#FFFFFF",
    x: 652,
    y: 1515,
    txt1: "<p>Street</p>"
}, {
    name1: "Delzorin Street",
    name2: "",
    color: "#FFFFFF",
    x: 1646,
    y: 1690,
    txt1: "<p>Street</p>"
}, {
    name1: "The Street of the Singing Dolphin",
    name2: "",
    color: "#FFFFFF",
    x: 868,
    y: 1351,
    txt1: "<p>Street</p>"
}, {
    name1: "Feather Street",
    name2: "",
    color: "#FFFFFF",
    x: 1224,
    y: 1734,
    txt1: "<p>Street</p>"
}, {
    name1: "Rough Road",
    name2: "",
    color: "#FFFFFF",
    x: 1319,
    y: 1877,
    txt1: "<p>Street</p>"
}, {
    name1: "Mendever Street",
    name2: "",
    color: "#FFFFFF",
    x: 1413,
    y: 1753,
    txt1: "<p>Street</p>"
}, {
    name1: "Sul Street",
    name2: "",
    color: "#FFFFFF",
    x: 1586,
    y: 1743,
    txt1: "<p>Street</p>"
}, {
    name1: "Zarimtar Street",
    name2: "",
    color: "#FFFFFF",
    x: 1395,
    y: 2040,
    txt1: "<p>Street</p>"
}, {
    name1: "Darselune Street",
    name2: "",
    color: "#FFFFFF",
    x: 1056,
    y: 2068,
    txt1: "<p>Street</p>"
}, {
    name1: "Courtyard of the Well",
    name2: "",
    color: "#FFFFFF",
    x: 1504,
    y: 2116,
    txt1: "<p>Court</p>"
}, {
    name1: "The Lions",
    name2: "",
    color: "#FFFFFF",
    x: 639,
    y: 2022,
    txt1: "<p>Street</p>"
}, {
    name1: "Jelzar's Stride",
    name2: "",
    color: "#FFFFFF",
    x: 637,
    y: 2131,
    txt1: "<p>Street</p>"
}, {
    name1: "Gulzindar Street",
    name2: "",
    color: "#FFFFFF",
    x: 881,
    y: 2189,
    txt1: "<p>Street</p>"
}, {
    name1: "Whim Street",
    name2: "",
    color: "#FFFFFF",
    x: 1534,
    y: 2181,
    txt1: "<p>Street</p>"
}, {
    name1: "Seaeyes March",
    name2: "",
    color: "#FFFFFF",
    x: 434,
    y: 2222,
    txt1: "<p>Street</p>"
}, {
    name1: "Haltovar Street",
    name2: "",
    color: "#FFFFFF",
    x: 1153,
    y: 2096,
    txt1: "<p>Street</p>"
}, {
    name1: "Julthoon Street",
    name2: "",
    color: "#FFFFFF",
    x: 948,
    y: 2319,
    txt1: "<p>Street</p>"
}, {
    name1: "The Sutherlane",
    name2: "",
    color: "#FFFFFF",
    x: 1278,
    y: 2240,
    txt1: "<p>Street</p>"
}, {
    name1: "Brassfeather Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2207,
    y: 1036,
    txt1: "<p>Street</p>"
}, {
    name1: "Anteos Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2436,
    y: 1142,
    txt1: "<p>Street</p>"
}, {
    name1: "Phull Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2546,
    y: 1130,
    txt1: "<p>Street</p>"
}, {
    name1: "Sashtar Street",
    name2: "",
    color: "#FFFFFF",
    x: 2263,
    y: 1377,
    txt1: "<p>Street</p>"
}, {
    name1: "Tower March",
    name2: "",
    color: "#FFFFFF",
    x: 2448,
    y: 1430,
    txt1: "<p>Street</p>"
}, {
    name1: "Immar Street",
    name2: "",
    color: "#FFFFFF",
    x: 2712,
    y: 1443,
    txt1: "<p>Street</p>"
}, {
    name1: "Windborne Way",
    name2: "",
    color: "#FFFFFF",
    x: 2245,
    y: 1518,
    txt1: "<p>Street</p>"
}, {
    name1: "Thunderstaff Way",
    name2: "",
    color: "#FFFFFF",
    x: 2168,
    y: 1174,
    txt1: "<p>Street</p>"
}, {
    name1: "Horn Street",
    name2: "",
    color: "#FFFFFF",
    x: 2636,
    y: 1546,
    txt1: "<p>Street</p>"
}, {
    name1: "The Trollmarch",
    name2: "",
    color: "#FFFFFF",
    x: 2886,
    y: 1580,
    txt1: "<p>Street</p>"
}, {
    name1: "Selrin Street",
    name2: "",
    color: "#FFFFFF",
    x: 2839,
    y: 1551,
    txt1: "<p>Street</p>"
}, {
    name1: "Saerdoun Street",
    name2: "",
    color: "#FFFFFF",
    x: 2578,
    y: 1592,
    txt1: "<p>Street</p>"
}, {
    name1: "Lion Street",
    name2: "",
    color: "#FFFFFF",
    x: 2812,
    y: 1712,
    txt1: "<p>Street</p>"
}, {
    name1: "Shield Street",
    name2: "",
    color: "#FFFFFF",
    x: 1774,
    y: 1742,
    txt1: "<p>Street</p>"
}, {
    name1: "Copper Street",
    name2: "",
    color: "#FFFFFF",
    x: 1924,
    y: 1736,
    txt1: "<p>Street</p>"
}, {
    name1: "Ilzantil Street",
    name2: "",
    color: "#FFFFFF",
    x: 2183,
    y: 1892,
    txt1: "<p>Street</p>"
}, {
    name1: "Vhezoar Street",
    name2: "",
    color: "#FFFFFF",
    x: 2316,
    y: 1922,
    txt1: "<p>Street</p>"
}, {
    name1: "Brondar's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2427,
    y: 1704,
    txt1: "<p>Street</p>"
}, {
    name1: "Sulmor Street",
    name2: "",
    color: "#FFFFFF",
    x: 2140,
    y: 1956,
    txt1: "<p>Street</p>"
}, {
    name1: "Hassantyr's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2133,
    y: 2109,
    txt1: "<p>Street</p>"
}, {
    name1: "Whaelgond Way",
    name2: "",
    color: "#FFFFFF",
    x: 2527,
    y: 1628,
    txt1: "<p>Street</p>"
}, {
    name1: "Ussilbran Street",
    name2: "",
    color: "#FFFFFF",
    x: 2675,
    y: 2024,
    txt1: "<p>Street</p>"
}, {
    name1: "Street of the Manticore",
    name2: "",
    color: "#FFFFFF",
    x: 2493,
    y: 2175,
    txt1: "<p>Street</p>"
}, {
    name1: "Endcliff Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2892,
    y: 2204,
    txt1: "<p>Street</p>"
}, {
    name1: "Tarsar's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2665,
    y: 2256,
    txt1: "<p>Street</p>"
}, {
    name1: "Shattercrock Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2474,
    y: 2318,
    txt1: "<p>Street</p>"
}, {
    name1: "Tarnath Street",
    name2: "",
    color: "#FFFFFF",
    x: 2300,
    y: 2434,
    txt1: "<p>Street</p>"
}, {
    name1: "Brahir Street",
    name2: "",
    color: "#FFFFFF",
    x: 2696,
    y: 2487,
    txt1: "<p>Street</p>"
}, {
    name1: "Gelthoon Street",
    name2: "",
    color: "#FFFFFF",
    x: 2563,
    y: 2624,
    txt1: "<p>Street</p>"
}, {
    name1: "Trader's Way",
    name2: "",
    color: "#FFFFFF",
    x: 1466,
    y: 2584,
    txt1: "<p>Street</p>"
}, {
    name1: "Suldown Street",
    name2: "",
    color: "#FFFFFF",
    x: 2465,
    y: 2400,
    txt1: "<p>Street</p>"
}, {
    name1: "Shando Street",
    name2: "",
    color: "#FFFFFF",
    x: 2434,
    y: 2681,
    txt1: "<p>Street</p>"
}, {
    name1: "Nindabar Street",
    name2: "",
    color: "#FFFFFF",
    x: 2812,
    y: 2346,
    txt1: "<p>Street</p>"
}, {
    name1: "Cliffwatch",
    name2: "",
    color: "#FFFFFF",
    x: 3006,
    y: 2474,
    txt1: "<p>Street</p>"
}, {
    name1: "Undal's Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2287,
    y: 2843,
    txt1: "<p>Street</p>"
}, {
    name1: "Zendulth Street",
    name2: "",
    color: "#FFFFFF",
    x: 2898,
    y: 2789,
    txt1: "<p>Street</p>"
}, {
    name1: "Golden Serpent Street",
    name2: "",
    color: "#FFFFFF",
    x: 2766,
    y: 2687,
    txt1: "<p>Street</p>"
}, {
    name1: "Mhalsymber's Way",
    name2: "",
    color: "#FFFFFF",
    x: 2646,
    y: 2928,
    txt1: "<p>Street</p>"
}, {
    name1: "Sammarin's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2598,
    y: 2953,
    txt1: "<p>Street</p>"
}, {
    name1: "The Beaconmarch",
    name2: "",
    color: "#FFFFFF",
    x: 2866,
    y: 2959,
    txt1: "<p>Street</p>"
}, {
    name1: "Andamaar's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2368,
    y: 2966,
    txt1: "<p>Street</p>"
}, {
    name1: "Toalar's Lane",
    name2: "",
    color: "#FFFFFF",
    x: 687,
    y: 2424,
    txt1: "<p>Street</p>"
}, {
    name1: "Gothal Street",
    name2: "",
    color: "#FFFFFF",
    x: 1010,
    y: 2359,
    txt1: "<p>Street</p>"
}, {
    name1: "Heard Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1503,
    y: 2455,
    txt1: "<p>Street</p>"
}, {
    name1: "Calamastyr Lane",
    name2: "",
    color: "#FFFFFF",
    x: 968,
    y: 2516,
    txt1: "<p>Street</p>"
}, {
    name1: "The Cliffride",
    name2: "",
    color: "#FFFFFF",
    x: 530,
    y: 2463,
    txt1: "<p>Street</p>"
}, {
    name1: "Tchozal's Race",
    name2: "",
    color: "#FFFFFF",
    x: 1168,
    y: 2575,
    txt1: "<p>Street</p>"
}, {
    name1: "Marlar's Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1215,
    y: 2828,
    txt1: "<p>Street</p>"
}, {
    name1: "Bazaar Street",
    name2: "",
    color: "#FFFFFF",
    x: 1630,
    y: 2901,
    txt1: "<p>Street</p>"
}, {
    name1: "Tharleon Street",
    name2: "",
    color: "#FFFFFF",
    x: 1400,
    y: 2918,
    txt1: "<p>Street</p>"
}, {
    name1: "Swords Street",
    name2: "",
    color: "#FFFFFF",
    x: 1193,
    y: 3198,
    txt1: "<p>Street</p>"
}, {
    name1: "Keltarn Street",
    name2: "",
    color: "#FFFFFF",
    x: 1409,
    y: 3156,
    txt1: "<p>Street</p>"
}, {
    name1: "Alnether Street",
    name2: "",
    color: "#FFFFFF",
    x: 1534,
    y: 3115,
    txt1: "<p>Street</p>"
}, {
    name1: "Cambril's Walk",
    name2: "",
    color: "#FFFFFF",
    x: 1768,
    y: 3212,
    txt1: "<p>Street</p>"
}, {
    name1: "The Street of Bells",
    name2: "",
    color: "#FFFFFF",
    x: 1995,
    y: 3640,
    txt1: "<p>Street</p>"
}, {
    name1: "Selduth Street",
    name2: "",
    color: "#FFFFFF",
    x: 1903,
    y: 3340,
    txt1: "<p>Street</p>"
}, {
    name1: "The Street of the Sword",
    name2: "",
    color: "#FFFFFF",
    x: 1819,
    y: 3287,
    txt1: "<p>Street</p>"
}, {
    name1: "The Street of Silks",
    name2: "",
    color: "#FFFFFF",
    x: 1292,
    y: 3321,
    txt1: "<p>Street</p>"
}, {
    name1: "The Street of Silver",
    name2: "",
    color: "#FFFFFF",
    x: 1474,
    y: 3436,
    txt1: "<p>Street</p>"
}, {
    name1: "Warrior's Way",
    name2: "",
    color: "#FFFFFF",
    x: 1668,
    y: 3412,
    txt1: "<p>Street</p>"
}, {
    name1: "Waterdeep Way",
    name2: "",
    color: "#FFFFFF",
    x: 1990,
    y: 4063,
    txt1: "<p>Street</p>"
}, {
    name1: "Soothsayer's Way",
    name2: "",
    color: "#FFFFFF",
    x: 2256,
    y: 4415,
    txt1: "<p>Street</p>"
}, {
    name1: "Coin Alley",
    name2: "",
    color: "#FFFFFF",
    x: 830,
    y: 4790,
    txt1: "<p>Street</p>"
}, {
    name1: "Lackpurse Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1801,
    y: 4560,
    txt1: "<p>Street</p>"
}, {
    name1: "Belnimbra's Street",
    name2: "",
    color: "#FFFFFF",
    x: 1666,
    y: 4686,
    txt1: "<p>Street</p>"
}, {
    name1: "Sail Street",
    name2: "",
    color: "#FFFFFF",
    x: 1266,
    y: 4839,
    txt1: "<p>Street</p>"
}, {
    name1: "Snail Street",
    name2: "",
    color: "#FFFFFF",
    x: 2219,
    y: 4953,
    txt1: "<p>Street</p>"
}, {
    name1: "Dock Street",
    name2: "",
    color: "#FFFFFF",
    x: 2034,
    y: 5629,
    txt1: "<p>Street</p>"
}, {
    name1: "Fish Street",
    name2: "",
    color: "#FFFFFF",
    x: 1860,
    y: 5127,
    txt1: "<p>Street</p>"
}, {
    name1: "Ship Street",
    name2: "",
    color: "#FFFFFF",
    x: 2028,
    y: 5327,
    txt1: "<p>Street</p>"
}, {
    name1: "Net Street",
    name2: "",
    color: "#FFFFFF",
    x: 2365,
    y: 5560,
    txt1: "<p>Street</p>"
}, {
    name1: "River Street",
    name2: "",
    color: "#FFFFFF",
    x: 2854,
    y: 4406,
    txt1: "<p>Street</p>"
}, {
    name1: "Lamp Street",
    name2: "",
    color: "#FFFFFF",
    x: 2256,
    y: 2959,
    txt1: "<p>Street</p>"
}, {
    name1: "Irimar's Walk",
    name2: "",
    color: "#FFFFFF",
    x: 2350,
    y: 3190,
    txt1: "<p>Street</p>"
}, {
    name1: "Spindle Street",
    name2: "",
    color: "#FFFFFF",
    x: 2289,
    y: 3507,
    txt1: "<p>Street</p>"
}, {
    name1: "The High Road",
    name2: "",
    color: "#FFFFFF",
    x: 2112,
    y: 2971,
    txt1: "<p>Street</p>"
}, {
    name1: "Fishgut Court",
    name2: "",
    color: "#FFFFFF",
    x: 1659,
    y: 4954,
    txt1: "<p>Court</p>"
}, {
    name1: "The Way of the Dragon",
    name2: "",
    color: "#FFFFFF",
    x: 2568,
    y: 5396,
    txt1: "<p>Street</p>"
}, {
    name1: "The Trollyard",
    name2: "",
    color: "#FFFFFF",
    x: 877,
    y: 277,
    txt1: "<p>Street</p>"
}, {
    name1: "Northyard",
    name2: "",
    color: "#FFFFFF",
    x: 2136,
    y: 663,
    txt1: "<p>Street</p>"
}, {
    name1: "The Fieldway",
    name2: "",
    color: "#FFFFFF",
    x: 1407,
    y: 519,
    txt1: "<p>Street</p>"
}, {
    name1: "Nanze Street",
    name2: "",
    color: "#FFFFFF",
    x: 1621,
    y: 448,
    txt1: "<p>Street</p>"
}, {
    name1: "Burnt Inn Street",
    name2: "",
    color: "#FFFFFF",
    x: 1596,
    y: 690,
    txt1: "<p>Street</p>"
}, {
    name1: "SaltporkStreet",
    name2: "",
    color: "#FFFFFF",
    x: 1945,
    y: 781,
    txt1: "<p>Street</p>"
}, {
    name1: "Gawenknife Street",
    name2: "",
    color: "#FFFFFF",
    x: 2577,
    y: 1000,
    txt1: "<p>Street</p>"
}, {
    name1: "Shanty Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2645,
    y: 942,
    txt1: "<p>Street</p>"
}, {
    name1: "Chop Street",
    name2: "",
    color: "#FFFFFF",
    x: 2380,
    y: 765,
    txt1: "<p>Street</p>"
}, {
    name1: "Book Street",
    name2: "",
    color: "#FFFFFF",
    x: 2362,
    y: 4978,
    txt1: "<p>Street</p>"
}, {
    name1: "Telshambra's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2565,
    y: 4752,
    txt1: "<p>Street</p>"
}, {
    name1: "The Street of Smiths",
    name2: "",
    color: "#FFFFFF",
    x: 2610,
    y: 4914,
    txt1: "<p>Street</p>"
}, {
    name1: "The Wagonrace",
    name2: "",
    color: "#FFFFFF",
    x: 2927,
    y: 4512,
    txt1: "<p>Street</p>"
}, {
    name1: "Sahtyra's Lane",
    name2: "",
    color: "#FFFFFF",
    x: 2805,
    y: 4631,
    txt1: "<p>Street</p>"
}, {
    name1: "Wall Street",
    name2: "",
    color: "#FFFFFF",
    x: 3004,
    y: 4643,
    txt1: "<p>Street</p>"
}, {
    name1: "Buckle Street",
    name2: "",
    color: "#FFFFFF",
    x: 2787,
    y: 4753,
    txt1: "<p>Street</p>"
}, {
    name1: "Rising Ride",
    name2: "",
    color: "#FFFFFF",
    x: 2801,
    y: 4884,
    txt1: "<p>Street</p>"
}, {
    name1: "Drover's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2760,
    y: 4531,
    txt1: "<p>Street</p>"
}, {
    name1: "Robin's Way",
    name2: "",
    color: "#FFFFFF",
    x: 2924,
    y: 4886,
    txt1: "<p>Street</p>"
}, {
    name1: "Shoor Street",
    name2: "",
    color: "#FFFFFF",
    x: 2613,
    y: 4523,
    txt1: "<p>Street</p>"
}, {
    name1: "Crook Street",
    name2: "",
    color: "#FFFFFF",
    x: 1452,
    y: 4676,
    txt1: "<p>Street</p>"
}, {
    name1: "Sakiir's Street",
    name2: "",
    color: "#FFFFFF",
    x: 1660,
    y: 4822,
    txt1: "<p>Street</p>"
}, {
    name1: "Eel Street",
    name2: "",
    color: "#FFFFFF",
    x: 1603,
    y: 4660,
    txt1: "<p>Street</p>"
}, {
    name1: "Sea Lion Street",
    name2: "",
    color: "#FFFFFF",
    x: 1075,
    y: 4835,
    txt1: "<p>Street</p>"
}, {
    name1: "Knife's Edge",
    name2: "",
    color: "#FFFFFF",
    x: 1626,
    y: 4500,
    txt1: "<p>Street</p>"
}, {
    name1: "Tarnished Silver Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1115,
    y: 4719,
    txt1: "<p>Street</p>"
}, {
    name1: "The Specterwalk",
    name2: "",
    color: "#FFFFFF",
    x: 2981,
    y: 5301,
    txt1: "<p>Street</p>"
}, {
    name1: "Carter's Way",
    name2: "",
    color: "#FFFFFF",
    x: 2966,
    y: 5431,
    txt1: "<p>Street</p>"
}, {
    name1: "Tezambril's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2868,
    y: 5178,
    txt1: "<p>Street</p>"
}, {
    name1: "Olaim's Cut",
    name2: "",
    color: "#FFFFFF",
    x: 2972,
    y: 5209,
    txt1: "<p>Street</p>"
}, {
    name1: "Coach Street",
    name2: "",
    color: "#FFFFFF",
    x: 2906,
    y: 5460,
    txt1: "<p>Street</p>"
}, {
    name1: "Elvarren's Lane",
    name2: "",
    color: "#FFFFFF",
    x: 912,
    y: 2608,
    txt1: "<p>Street</p>"
}, {
    name1: "The Rise",
    name2: "",
    color: "#FFFFFF",
    x: 876,
    y: 2938,
    txt1: "<p>Street</p>"
}, {
    name1: "Coachlamp Lane",
    name2: "",
    color: "#FFFFFF",
    x: 3063,
    y: 5654,
    txt1: "<p>Street</p>"
}, {
    name1: "Aveen Street",
    name2: "",
    color: "#FFFFFF",
    x: 2469,
    y: 2573,
    txt1: "<p>Street</p>"
}, {
    name1: "Black Cat Way",
    name2: "",
    color: "#FFFFFF",
    x: 2450,
    y: 2918,
    txt1: "<p>Street</p>"
}, {
    name1: "Spices Street",
    name2: "",
    color: "#FFFFFF",
    x: 2400,
    y: 5680,
    txt1: "<p>Street</p>"
}, {
    name1: "Fishgut Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2510,
    y: 5712,
    txt1: "<p>Street</p>"
}, {
    name1: "Cedar Street",
    name2: "",
    color: "#FFFFFF",
    x: 2604,
    y: 5852,
    txt1: "<p>Street</p>"
}, {
    name1: "Slop Street",
    name2: "",
    color: "#FFFFFF",
    x: 2674,
    y: 5664,
    txt1: "<p>Street</p>"
}, {
    name1: "Shesstra's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2273,
    y: 4673,
    txt1: "<p>Street</p>"
}, {
    name1: "Wharf Street",
    name2: "",
    color: "#FFFFFF",
    x: 2551,
    y: 5686,
    txt1: "<p>Street</p>"
}, {
    name1: "Boltspring Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1213,
    y: 513,
    txt1: "<p>Street</p>"
}, {
    name1: "Trollwall Way",
    name2: "",
    color: "#FFFFFF",
    x: 1450,
    y: 367,
    txt1: "<p>Street</p>"
}, {
    name1: "Firewine Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1358,
    y: 414,
    txt1: "<p>Street</p>"
}, {
    name1: "Flipcoin Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1477,
    y: 692,
    txt1: "<p>Street</p>"
}, {
    name1: "Soot Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1683,
    y: 513,
    txt1: "<p>Street</p>"
}, {
    name1: "Twelvedog Court",
    name2: "",
    color: "#FFFFFF",
    x: 1692,
    y: 733,
    txt1: "<p>Court</p>"
}, {
    name1: "Prestige Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1854,
    y: 697,
    txt1: "<p>Street</p>"
}, {
    name1: "Slipgate Street",
    name2: "",
    color: "#FFFFFF",
    x: 1997,
    y: 615,
    txt1: "<p>Street</p>"
}, {
    name1: "Leanwall Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2489,
    y: 759,
    txt1: "<p>Street</p>"
}, {
    name1: "Stench Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2446,
    y: 822,
    txt1: "<p>Street</p>"
}, {
    name1: "Tanner Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2377,
    y: 870,
    txt1: "<p>Street</p>"
}, {
    name1: "Logans Walk",
    name2: "",
    color: "#FFFFFF",
    x: 2440,
    y: 900,
    txt1: "<p>Street</p>"
}, {
    name1: "The Semize",
    name2: "",
    color: "#FFFFFF",
    x: 2507,
    y: 1019,
    txt1: "<p>Street</p>"
}, {
    name1: "Endshift Street",
    name2: "",
    color: "#FFFFFF",
    x: 2877,
    y: 1150,
    txt1: "<p>Street</p>"
}, {
    name1: "The Breezeway",
    name2: "",
    color: "#FFFFFF",
    x: 2898,
    y: 1277,
    txt1: "<p>Street</p>"
}, {
    name1: "The Coffinmarch",
    name2: "",
    color: "#FFFFFF",
    x: 2305,
    y: 3536,
    txt1: "<p>Street</p>"
}, {
    name1: "Winter Path",
    name2: "",
    color: "#FFFFFF",
    x: 2263,
    y: 3653,
    txt1: "<p>Street</p>"
}, {
    name1: "Ironpost Street",
    name2: "",
    color: "#FFFFFF",
    x: 2317,
    y: 3696,
    txt1: "<p>Street</p>"
}, {
    name1: "Burnt Wagon Way",
    name2: "",
    color: "#FFFFFF",
    x: 2291,
    y: 3821,
    txt1: "<p>Street</p>"
}, {
    name1: "Revon Street",
    name2: "",
    color: "#FFFFFF",
    x: 2491,
    y: 3940,
    txt1: "<p>Street</p>"
}, {
    name1: "Slipstone Street",
    name2: "",
    color: "#FFFFFF",
    x: 2553,
    y: 4070,
    txt1: "<p>Street</p>"
}, {
    name1: "The Wide Way",
    name2: "",
    color: "#FFFFFF",
    x: 2691,
    y: 4171,
    txt1: "<p>Street</p>"
}, {
    name1: "Wall Way",
    name2: "",
    color: "#FFFFFF",
    x: 2894,
    y: 4184,
    txt1: "<p>Street</p>"
}, {
    name1: "Sorn Street",
    name2: "",
    color: "#FFFFFF",
    x: 2842,
    y: 4311,
    txt1: "<p>Street</p>"
}, {
    name1: "Nethpranter's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2634,
    y: 4048,
    txt1: "<p>Street</p>"
}, {
    name1: "Salabar Street",
    name2: "",
    color: "#FFFFFF",
    x: 2780,
    y: 4495,
    txt1: "<p>Street</p>"
}, {
    name1: "Quarrel's Flight",
    name2: "",
    color: "#FFFFFF",
    x: 2915,
    y: 4603,
    txt1: "<p>Street</p>"
}, {
    name1: "Caravan Street",
    name2: "",
    color: "#FFFFFF",
    x: 2926,
    y: 4965,
    txt1: "<p>Street</p>"
}, {
    name1: "Tezambril's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2885,
    y: 4928,
    txt1: "<p>Street</p>"
}, {
    name1: "Tulmaster's Street",
    name2: "",
    color: "#FFFFFF",
    x: 2827,
    y: 4996,
    txt1: "<p>Street</p>"
}, {
    name1: "Tower Trail",
    name2: "",
    color: "#FFFFFF",
    x: 2807,
    y: 6020,
    txt1: "<p>Street</p>"
}, {
    name1: "Smuggler's Run",
    name2: "",
    color: "#FFFFFF",
    x: 2953,
    y: 6070,
    txt1: "<p>Street</p>"
}, {
    name1: "Street of Six Casks",
    name2: "",
    color: "#FFFFFF",
    x: 2183,
    y: 5325,
    txt1: "<p>Street</p>"
}, {
    name1: "Trollcrook Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2351,
    y: 5118,
    txt1: "<p>Street</p>"
}, {
    name1: "Watchrun Alley",
    name2: "",
    color: "#FFFFFF",
    x: 1960,
    y: 4704,
    txt1: "<p>Street</p>"
}, {
    name1: "Redcloak Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1916,
    y: 4814,
    txt1: "<p>Street</p>"
}, {
    name1: "Leera's Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2033,
    y: 4790,
    txt1: "<p>Street</p>"
}, {
    name1: "Gut Alley",
    name2: "",
    color: "#FFFFFF",
    x: 2078,
    y: 4711,
    txt1: "<p>Street</p>"
}, {
    name1: "Gem Street",
    name2: "",
    color: "#FFFFFF",
    x: 1890,
    y: 4128,
    txt1: "<p>Street</p>"
}, {
    name1: "Siren Lane",
    name2: "",
    color: "#FFFFFF",
    x: 1376,
    y: 3066,
    txt1: "<p>Street</p>"
}, {
    name1: "Cage Street",
    name2: "",
    color: "#FFFFFF",
    x: 1405,
    y: 3917,
    txt1: "<p>Street</p>"
}, {
    name1: "Mulgomir's Way",
    name2: "",
    color: "#FFFFFF",
    x: 1454,
    y: 3808,
    txt1: "<p>Street</p>"
}, {
    name1: "Cymbril's Way",
    name2: "",
    color: "#FFFFFF",
    x: 1517,
    y: 3205,
    txt1: "<p>Street</p>"
}, {
    name1: "Sighing Maiden's Walk",
    name2: "",
    color: "#FFFFFF",
    x: 956,
    y: 1371,
    txt1: "<p>Street</p>"
}, {
    name1: "Odd Street",
    name2: "",
    color: "#FFFFFF",
    x: 1862,
    y: 5220,
    txt1: "<p>Street</p>"
}, {
    name1: "Drakiir Street",
    name2: "",
    color: "#FFFFFF",
    x: 2407,
    y: 4723,
    txt1: "<p>Street</p>"
},
{
    name1: "GROUP",
    name2: "",
    color: "#AAAAAA",
    x: 0,
    y: 0,
    txt1: "Miscellaneous"
}, /*{
    name1: "Roads' End",
    name2: "",
    color: "#AAAAAA",
    x: 2804,
    y: 3318,
    txt1: "<p>Vault. Final resting place for travelers who die while in the city.</p>",
    ref: "CD1"
}, {
    name1: "Starry Cradles orphanage",
    name2: "",
    color: "#AAAAAA",
    x: 1434,
    y: 4600,
    txt1: "<p>The Starry Cradles orphanage is a Dock Ward orphanage run by Matron Griselda Hoppletun, a halfling care-taker, and funded by the House of the Moon and the Selûnite clergy thereof.</p>"
}, {
    name1: "The House of the Homeless",
    name2: "",
    color: "#AAAAAA",
    x: 2487,
    y: 3468,
    txt1: "<p>Tomb. Vast mausoleum with a row of low steps leading up to its high metal gates. Leads to an endless labyrinth of underground caverns where lie all the dead of Waterdeep who do not merit a place in any other tomb.</p>",
    ref: "CD2"
}, {
    name1: "Ahghairon's Statue",
    name2: "",
    color: "#AAAAAA",
    x: 2619,
    y: 3343,
    txt1: "<p>Tomb. A tall, marble sculpture of a bearded, robed wizard standing atop concentric steps and facing west toward the skyline of Waterdeep, his hands outstretched and a broad smile on his face.</p>",
    ref: "CD3"
}, {
    name1: "Merchants' Rest",
    name2: "",
    color: "#AAAAAA",
    x: 2566,
    y: 3521,
    txt1: "<p>Tomb. Reserved for those who prepay for the honor of burial here.</p>",
    ref: "CD4"
}, */{
    name1: "Warriors' Monument",
    name2: "",
    color: "#AAAAAA",
    x: 2680,
    y: 3551,
    txt1: "<p>Tomb and fountain. It depicts a circle of women and men striking down trolls, orcs, hobgoblins, bugbears, and barbarians. The wounds on these combatants gush water!</p>",
    ref: "CD5"
}, /*{
    name1: "Lords' Respite",
    name2: "",
    color: "#AAAAAA",
    x: 2751,
    y: 3739,
    txt1: "<p>Tomb. Resting place of those Lords who wish to be buried in state.</p>",
    ref: "CD6"
}, {
    name1: "The Hall of the Sages",
    name2: "",
    color: "#AAAAAA",
    x: 2633,
    y: 3807,
    txt1: "<p>Special tomb for sages.</p>",
    ref: "CD7"
}, {
    name1: "The Hall of Heroes",
    name2: "",
    color: "#AAAAAA",
    x: 2743,
    y: 3892,
    txt1: "<p>Tomb. Official warriors' tomb of Waterdeep, for fighters and all who fall in battle.</p>",
    ref: "CD8"
}, {
    name1: "Deepwinter Vault",
    name2: "",
    color: "#AAAAAA",
    x: 2668,
    y: 3053,
    txt1: "<p>Tomb of the nowvanished Deepwinter family.</p>",
    ref: "CD10"
}, {
    name1: "Sultlue Vault",
    name2: "",
    color: "#AAAAAA",
    x: 2518,
    y: 3284,
    txt1: "<p>Tomb.</p>",
    ref: "CD14"
}, {
    name1: "Mariners' Rest",
    name2: "",
    color: "#AAAAAA",
    x: 2820,
    y: 3992,
    txt1: "<p>Tomb.</p>",
    ref: "CD9"
}, {
    name1: "Brandath Mausoleum",
    name2: "",
    color: "#AAAAAA",
    x: 2761,
    y: 3169,
    txt1: "<p>Brandath family Mausoleum. Four generations of the Brandath family lie here.</p>"
}, {
    name1: "Naingate",
    name2: "",
    color: "#AAAAAA",
    x: 671,
    y: 1393,
    txt1: "<p>Wizard's domicile.</p>",
    ref: "$15"
}, {
    name1: "Tessalar's Tower",
    name2: "",
    color: "#AAAAAA",
    x: 1557,
    y: 1309,
    txt1: "<p>Wizard's domicile.</p>",
    ref: "$25"
}, {
    name1: "Furjur the Flippant's residence",
    name2: "",
    color: "#AAAAAA",
    x: 934,
    y: 1023,
    txt1: "<p>House.</p>",
    ref: "$67"
}, {
    name1: "Hlethvagi Anteos's residence",
    name2: "",
    color: "#AAAAAA",
    x: 1327,
    y: 1417,
    txt1: "<p>Villa.</p>",
    ref: "$68"
}, {
    name1: "Stagdown Manse",
    name2: "",
    color: "#AAAAAA",
    x: 1076,
    y: 1091,
    txt1: "<p>Villa.</p>",
    ref: "$69"
}, {
    name1: "Myrna Cassalanter's residence",
    name2: "",
    color: "#AAAAAA",
    x: 1131,
    y: 1257,
    txt1: "<p>House</p>",
    ref: "$78"
}, {
    name1: "Melody Mount Walk (west)",
    name2: "",
    color: "#AAAAAA",
    x: 735,
    y: 2735,
    txt1: "<p>A magically lit tunnel that runs west up to the cliffs on which the New Olamn barding college is situated. The tunnel contains a little-known portal between Waterdeep and the keep in Rassalantar. The tunnel continuously resounds with music due to an ongoing concert known as the Neverending String of Pearls that is performed by bardic students from New Olamn in a small alcove in the tunnel.</p>"
}, {
    name1: "Melody Mount Walk (east)",
    name2: "",
    color: "#AAAAAA",
    x: 883,
    y: 2745,
    txt1: "<p>A magically lit tunnel that runs west up to the cliffs on which the New Olamn barding college is situated. The tunnel contains a little-known portal between Waterdeep and the keep in Rassalantar. The tunnel continuously resounds with music due to an ongoing concert known as the Neverending String of Pearls that is performed by bardic students from New Olamn in a small alcove in the tunnel.</p>"
}, {
    name1: "Kolat's Towers",
    name2: "",
    color: "#AAAAAA",
    x: 2683,
    y: 5287,
    txt1: "<p>Wizards' domiciles</p>",
    ref: "S35"
}, */{
    name1: "Mirt's Mansion",
    name2: "",
    color: "#AAAAAA",
    x: 771,
    y: 4704,
    txt1: "<p>Villa. Mirt is a friend of Durnan (see The Yawning Portal). Both used magic to extend their lives.</p>",
    ref: "C52"
},  {
    name1: "Hlam's Cave",
    color: "#AAAAAA",
    x: 1090,
    y: 4260,
    txt1: "<p>Hlam, both a priest of Tyr, monk and the grounder and of Order of the Even-Handed, lives alone here in his Cave, on the southern slope, near the top of Mount Waterdeep</p>",
},  /*{
    name1: "Umberlee's Cache",
    name2: "",
    color: "#AAAAAA",
    x: 1588,
    y: 6106,
    txt1: "<p>Underground caverns completely flooded by sea water. All tithes and donations to Umberlee that are thrown in the bay are sucked into Umberlee's Cache. Guarded by Sea Wraiths that are trapped in Umberlee's Cache by Deepwater Beacon, an undersea lighthouse that prevents the Sea Wraiths from pouring into Waterdeep Harbor.</p>"
}, {
    name1: "Thayan Embassy",
    name2: "",
    color: "#AAAAAA",
    x: 1382,
    y: 2526,
    txt1: "<p>Waterdeep's wealth and role as Gateway to the North makes it an obvious choice for a Thayan enclave. Representatives of Thay established an embassy in Castle Ward overlooking the Market between the Sutherlane, Mendever Street, and Trader's Way in 1370 DR. As an embassy, the building is considered sovereign territory of Thay, exempt from the laws of Waterdeep. However, the Lords of Waterdeep flatly rejected the Three Laws of the Enclave, refusing to compromise Waterdeep's sovereignty or countenance the sale of slaves within the city. Because the Red Wizards are careful never to conduct business within the embassy proper, it is in no danger of losing its sovereign status.</p>",
    ref: "C70"
}, {
    name1: "The Dragon Tower",
    name2: "",
    color: "#AAAAAA",
    x: 842,
    y: 1501,
    txt1: "<p>Previous home of Aurinax the Gold Dragon, and Maaril the Archmage.</p>",
    ref: "$30"
}, */{
    name1: "Brandarthall",
    name2: "",
    color: "#AAAAAA",
    x: 1374,
    y: 2134,
    txt1: "<p>Renaer Neverember's home, and the home for a some of the remaining Neverember family business.</p>"
}, /*{
    name1: "Talebran House",
    name2: "",
    color: "#AAAAAA",
    x: 2181,
    y: 5501,
    txt1: "<p>Lord Talebran's Waterdeep House</p>"
}, {
    name1: "Fenerus Stormcastle's House",
    name2: "",
    color: "#AAAAAA",
    x: 2688,
    y: 4027,
    txt1: "<p>Fenerus Stormcastle was the founder of the Blood Hawk Posse, a gang of horse-riding brigands that, to this day, harries travelers on the road to Amphail. When he was drummed out of the gang after a botched raid, Fenerus 'retired' to Waterdeep and joined the Guild of Chandlers and Lamplighters. He supplements his income by spying for the city of Luskan and providing his contacts with information on the political climate in Waterdeep, as well as juicy bits of news overheard on his nightly rounds through the Trades Ward.</p>"
}, {
    name1: "Ordalth House",
    name2: "",
    color: "#AAAAAA",
    x: 1723,
    y: 3452,
    txt1: "<p>Marble four-story villa owned by the Neverember family.</p>"
}, {
    name1: "Madame Garah's Boarding House",
    name2: "",
    color: "#AAAAAA",
    x: 2661,
    y: 5237,
    txt1: "",
    ref: "S30"
}, {
    name1: "Fair Winds",
    name2: "",
    color: "#AAAAAA",
    x: 552,
    y: 2536,
    txt1: "<p>Villa. For rent.</p>"
}, {
    name1: "Chazlauth Yarghorn Residence",
    name2: "",
    color: "#AAAAAA",
    x: 2129,
    y: 2405,
    txt1: "<p>A tall stone house with a tower on one corner. Chazlauth Yarghorn is a so called 'dragon expert' and friend of Naxene Drathkala, the resident mage of Golden Fields. An Illuskan mage who keeps the company of a silver dragon wyrmling named Irizzorl, that he keeps hidden in the tower, along with several cats that the dragon likes to terrorize. The tower is prone to constant racket.</p>"
}, {
    name1: "Mhair's Tower",
    name2: "",
    color: "#AAAAAA",
    x: 2314,
    y: 3465,
    txt1: "<p>Domicile of the wizard Mhair Szeltune, leader of the Watchful Order of Magists and Protectors till 1372 DR.</p>",
    ref: "T6"
}, {
    name1: "Roarke House",
    name2: "",
    color: "#AAAAAA",
    x: 1580,
    y: 928,
    txt1: "<p>An imposing three-story bilding with a well-kept stone front. The interior has an atrium, and the tiles that cover the main floor are beautifully detailed in stars, moons, and pairs of eyes. Built by Volam Roarke, an exceedingly devout worshipper of Selune. Owned by Renaer Neverember and let out as a summer house, usually. It was used it as a gathering place for Renear's secret moonstars-like group, and several of Renaer's friends are intombed in a hall of doors hidden in the cellars below the property.</p>"
}, {
    name1: "Thantilvur Investments",
    name2: "",
    color: "#AAAAAA",
    x: 2173,
    y: 2462,
    txt1: "<p>A former wealthy citizens private mansion, recently renovated, secret hideout for the Masked Lord Cozandur. Was destroyed durind the Open Lord's spell duel with two mages on the payroll of Braethan Cazondur.</p>"
}, {
    name1: "Syndra Wands' Tower",
    name2: "",
    color: "#AAAAAA",
    x: 1111,
    y: 2987,
    txt1: "<p>Wizard's domicile.</p>",
    ref: "C63"
}, {
    name1: "Yellowcrest Manor",
    name2: "",
    color: "#AAAAAA",
    x: 2460,
    y: 1709,
    txt1: ""
}, {
    name1: "Brianne's Tower",
    name2: "",
    color: "#AAAAAA",
    x: 2734,
    y: 2440,
    txt1: "<p>Residence.</p>"
},
{
    name1: "Lady Monster's residence",
    name2: "",
    color: "#FF00FF",
    x: 2619,
    y: 1321,
    txt1: "<p>Maerthra Dunvelgeld, aka Lady Monster, breeds and sells monsters. She hires adventurers to bring her living or dead monsters (or monsters parts).</p><p><a href='https://youtu.be/m7t7AZ8-c0A?t=1064s' target='_blank'><i class='fa-brands fa-youtube'></i> MORE BY ED GREENWOOD</a></p>",
    ref: "EGYT"
}, {
    name1: "Orbrel Harhammath's shop",
    name2: "",
    color: "#FF00FF",
    x: 2836,
    y: 2361,
    txt1: "<p>The Mighty Manspider, more formally known as Orbrel Harhammath, has a ground-floor shop beneath his rented rooms, where he grinds lenses for monocles and magnifying glasses. He's quiet, polite, and even prim as he works. But he bottles up all anger and disgust inside, and when it builds to a seething rage, he shapechanges into a giant spider and goes hunting to causes pain.</p><p><a href='https://youtu.be/m7t7AZ8-c0A?t=1154' target='_blank'><i class='fa-brands fa-youtube'></i> MORE BY ED GREENWOOD</a></p>",
    ref: "EGYT"
}, */ {
    name1: "Tiger's Eye",
    name2: "",
    color: "#FF00FF",
    x: 2359,
    y: 1586,
    txt1: "<p>Velardar Vincent Trench is a human private detective.</p>",
    ref: "EGYT"
} ];

/* { name1:"Nurneene's Marvelous Masks", name2:"", color:"#FF00FF", x:0, y:0, txt1:"<p>Business. Clothing.</p>"},
N59{ name1:"Orlpar Husteem's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 3</p>"},
N63{ name1:"Danilo Thann's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, A, 3</p>"},
N64{ name1:"Maerik Thaelcloak's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, A, 2</p>"},
N74{ name1:"Simon Ilzimmer's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, A, 4</p>"},
C28{ name1:"Velstrode the Venturer's Row house", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>house, B, 3</p>"},
C41{ name1:"Shy~rhr's House", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 3</p>"},
C42{ name1:"Loene the Fighter's House", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, A, 3</p>"},
C45{ name1:"Lady Naneatha Lhaurilstar's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 3</p>"},
C61{ name1:"Delzimmer residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 4</p>"},
C62{ name1:"Irlingstar residence - Sablehearth", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 4</p>"},
C71{ name1:"Caladorn Cassalanter's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, A, 3</p>"},
C77{ name1:"Larissa Neathal's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, A, 2</p>"},
C80{ name1:"Tolgar Anuvien's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>villa, A, 3</p>"},
C82{ name1:"Haerun Mhammaster's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, C, 3</p>"},
C83{ name1:"Ammathair Hawkfeather's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>house</p>"},
T5 { name1:"Myrmith Splendors' residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 2</p>"},
T41{ name1:"Scirkhel Wands' residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 3</p>"},
T44{ name1:"Blackstone House", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 4</p>"},
T50{ name1:"Zeltabbar Iliphar's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 3</p>"},
D34{ name1:"Arnagu~ the Shipwright's residence", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 3</p>"},
D53{ name1:"Jemuril the Dwarf's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, C, 2</p>"},
D68{ name1:"Gathgaer Milomynt's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, D, 2</p>"},
S10{ name1:"Flurmastyr residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, C, 2</p>"},
S33{ name1:"Rokkek Ingerr's residence", name2:"", color:"#FF0001", x:0, y:0, txt1:"<p>row house, B, 2</p>"},
*/
