import { PARTY_ACHIEVEMENTS } from '../Party';
import { GLOBAL_ACHIEVEMENTS } from '../Achievements';
import { BOSSES, MONSTERS } from '../Monsters';

export const BASE_SCENARIOS = [
  {}, // dummy scenario 0, just to make indexing by scenario number easier - eg. scenarios[1] refers to scenario 1
  // 1-95 Base campaign
  {
    title: 'Black Barrow',
    treasures: [7],
    monsters: [
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.LIVING_BONES },
    ],
  },
  {
    title: 'Barrow Lair',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.FIRST_STEPS],
    treasures: [67],
    monsters: [

      { name: MONSTERS.BANDIT_ARCHER },
      { name: BOSSES.BANDIT_COMMANDER },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
    ],
  },
  {
    title: 'Inox Encampment',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    treasures: [65],
    monsters: [

      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_ARCHER },
      { name: MONSTERS.INOX_SHAMAN },
    ],
  },
  {
    title: 'Crypt of the Damned',
    treasures: [38, 46],
    monsters: [

      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    // 5
    title: 'Ruinous Crypt',
    treasures: [4, 28],
    monsters: [

      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.FROST_DEMON },
    ],
  },
  {
    title: 'Decaying Crypt',
    treasures: [50],
    monsters: [

      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Vibrant Grotto',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    monsters: [

      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.INOX_SHAMAN },
      { name: MONSTERS.EARTH_DEMON },
    ],
  },
  {
    title: 'Gloomhaven Warehouse',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS],
    treasures: [51],
    monsters: [

      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.INOX_BODYGUARD },
    ],
  },
  {
    title: 'Diamond Mine',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.VERMLING_SCOUT },
      { name: BOSSES.OVERSEER },
    ],
  },
  {
    // 10
    title: 'Plane of Elemental Power',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    treasures: [11],
    monsters: [
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.SUN_DEMON },
    ],
  },
  {
    title: 'Gloomhaven Square A',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    treasures: [5],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: BOSSES.CAPTAIN },
    ],
  },
  {
    title: 'Gloomhaven Square B',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    treasures: [34],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: BOSSES.JEKSERAH },
    ],
  },
  {
    title: 'Temple of the Seer',
    treasures: [10],
    monsters: [
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.SPITTING_DRAKE },
    ],
  },
  {
    title: 'Frozen Hollow',
    treasures: [26],
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.FROST_DEMON },
    ],
  },
  {
    // 15
    title: 'Shrine of Strength',
    monsters: [
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.SAVVAS_ICESTORM },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.HARROWER_INFESTER },
    ],
  },
  {
    title: 'Mountain Pass',
    treasures: [1],
    monsters: [
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_ARCHER },
    ],
  },
  {
    title: 'Lost Island',
    treasures: [71],
    monsters: [
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.VERMLING_SHAMAN },
      { name: MONSTERS.CAVE_BEAR },
    ],
  },
  {
    title: 'Abandoned Sewers',
    treasures: [63],
    monsters: [
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.VERMLING_SCOUT },
    ],
  },
  {
    title: 'Forgotten Crypt',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    treasures: [17],
    monsters: [
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.LIVING_CORPSE },
    ],
  },
  {
    // 20
    title: "Necromancer's Sanctum",
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    treasures: [60],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.LIVING_CORPSE },
      { name: BOSSES.JEKSERAH },
    ],
  },
  {
    title: 'Infernal Throne',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    treasures: [15],
    monsters: [
      { name: MONSTERS.SUN_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: BOSSES.PRIME_DEMON },
    ],
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Temple of the Elements',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND, PARTY_ACHIEVEMENTS.FOLLOWING_CLUES],
    onlyOneAchievementRequired: true,
    treasures: [21],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    title: 'Deep Ruins',
    treasures: [39, 72],
    monsters: [
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Echo Chamber',
    treasures: [70],
    monsters: [
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    // 25
    title: 'Icecrag Ascent',
    treasures: [58],
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.SPITTING_DRAKE },
    ],
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Ancient Cistern',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THROUGH_THE_RUINS],
    onlyOneAchievementRequired: true,
    treasures: [66],
    monsters: [
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    title: 'Ruinous Rift',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.STONEBREAKERS_CENSER],
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.SUN_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FLAME_DEMON },
    ],
  },
  {
    title: 'Outer Ritual Chamber',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.DARK_BOUNTY],
    treasures: [32],
    monsters: [
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.SUN_DEMON },
    ],
  },
  {
    title: 'Sanctuary of Gloom',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.AN_INVITATION],
    treasures: [41],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    // 30
    title: 'Shrine of the Depths',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND],
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.LURKER },
      { name: MONSTERS.DEEP_TERROR },
    ],
  },
  {
    title: 'Plane of Night',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED],
    treasures: [69],
    monsters: [
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    title: 'Decrepit Wood',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND],
    monsters: [
      { name: MONSTERS.HARROWER_INFESTER },
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Savvas Armory',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    onlyOneAchievementRequired: true,
    monsters: [
      { name: MONSTERS.SAVVAS_ICESTORM },
      { name: MONSTERS.SAVVAS_LAVAFLOW },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.EARTH_DEMON },
    ],
  },
  {
    title: 'Scorched Summit',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_DRAKE_AIDED],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    treasures: [23],
    monsters: [
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.SPITTING_DRAKE },
      { name: BOSSES.DRAKE },
    ],
  },
  {
    // 35
    title: 'Gloomhaven Battlements A',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND],
    treasures: [61],
    monsters: [
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    title: 'Gloomhaven Battlements B',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND],
    treasures: [2],
    monsters: [
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.CITY_ARCHER },
      { name: BOSSES.PRIME_DEMON },
    ],
  },
  {
    title: 'Doom Trench',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    treasures: [49],
    monsters: [
      { name: MONSTERS.LURKER },
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.HARROWER_INFESTER },
    ],
  },
  {
    title: 'Slave Pens',
    treasures: [29],
    monsters: [
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_ARCHER },
      { name: MONSTERS.INOX_SHAMAN },
      { name: MONSTERS.STONE_GOLEM },
    ],
  },
  {
    title: 'Treacherous Divide',
    treasures: [73],
    monsters: [
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.SPITTING_DRAKE },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
    ],
  },
  {
    // 40
    title: 'Ancient Defense Network',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY_ACHIEVEMENTS.THE_VOICES_TREASURE],
    treasures: [47],
    monsters: [
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.FOREST_IMP },
    ],
  },
  {
    title: 'Timeworn Tomb',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND],
    treasures: [24],
    monsters: [
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.STONE_GOLEM },
    ],
  },
  {
    title: 'Realm of the Voice',
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_VOICE_FREED],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_SCEPTER_AND_THE_VOICE],
    treasures: [30, 55],
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Drake Nest',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    treasures: [35],
    monsters: [
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.SPITTING_DRAKE },
    ],
  },
  {
    title: 'Tribal Assault',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.REDTHORNS_AID],
    monsters: [
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_ARCHER },
      { name: MONSTERS.HOUND },
      { name: MONSTERS.INOX_SHAMAN },
    ],
  },
  {
    // 45
    title: 'Rebel Swamp',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    treasures: [74],
    monsters: [
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.HOUND },
    ],
  },
  {
    title: 'Nightmare Peak',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.ACROSS_THE_DIVIDE],
    treasures: [48],
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.SAVVAS_ICESTORM },
      { name: BOSSES.WINGED_HORROR },
    ],
  },
  {
    title: 'Lair of the Unseeing Eye',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THROUGH_THE_TRENCH],
    treasures: [57, 18],
    monsters: [
      { name: MONSTERS.LURKER },
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.HARROWER_INFESTER },
      { name: BOSSES.SIGHTLESS_EYE },
    ],
  },
  {
    title: 'Shadow Weald',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.REDTHORNS_AID],
    treasures: [64],
    monsters: [
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.HARROWER_INFESTER },
      { name: BOSSES.DARK_RIDER },
    ],
  },
  {
    title: "Rebel's Stand",
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    treasures: [44],
    monsters: [
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.ANCIENT_ARTILLERY },
    ],
  },
  {
    // 50
    title: 'Ghost Fortress',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.ANNIHILATION_OF_THE_ORDER],
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.SUN_DEMON },
      { name: MONSTERS.EARTH_DEMON },
    ],
  },
  {
    title: 'The Void',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_1, GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_2, GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_3],
    treasures: [56],
    monsters: [
      { name: BOSSES.GLOOM },
    ],
  },
  {
    title: 'Noxious Cellar',
    monsters: [
      { name: MONSTERS.SPITTING_DRAKE },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.VERMLING_SHAMAN },
    ],
  },
  {
    title: 'Crypt Basement',
    treasures: [31],
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.GIANT_VIPER },
    ],
  },
  {
    title: 'Palace of Ice',
    treasures: [25],
    monsters: [
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.HARROWER_INFESTER },
    ],
  },
  {
    // 55
    title: 'Foggy Thicket',
    monsters: [

      // TODO Show message that this is random, use deck tab instead
    ],
  },
  {
    title: "Bandit's Wood",
    treasures: [45],
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.BANDIT_GUARD },
    ],
  },
  {
    title: 'Investigation',
    treasures: [3, 22],
    monsters: [
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.HOUND },
    ],
  },
  {
    title: 'Bloody Shack',
    monsters: [
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.HARROWER_INFESTER },
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.CITY_GUARD },
    ],
  },
  {
    title: 'Forgotten Grove',
    monsters: [
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.HOUND },
      { name: MONSTERS.FOREST_IMP },
    ],
  },
  {
    // 60
    title: 'Alchemy Lab',
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.HOUND },
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.SPITTING_DRAKE },
    ],
  },
  {
    title: 'Fading Lighthouse',
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.FLAME_DEMON },
    ],
  },
  {
    title: 'Pit of Souls',
    treasures: [59],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Magma Pit',
    treasures: [12],
    monsters: [
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_ARCHER },
      { name: MONSTERS.FLAME_DEMON },
    ],
  },
  {
    title: 'Underwater Lagoon',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    treasures: [9],
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.RENDING_DRAKE },
    ],
  },
  {
    // 65
    title: 'Sulfur Mine',
    monsters: [
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.HOUND },
      { name: MONSTERS.INOX_SHAMAN },
    ],
  },
  {
    title: 'Clockwork Cove',
    treasures: [16, 36],
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.STONE_GOLEM },
    ],
  },
  {
    title: 'Arcane Library',
    treasures: [14],
    monsters: [
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.STONE_GOLEM },
    ],
  },
  {
    title: 'Toxic Moor',
    treasures: [33],
    monsters: [
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.LIVING_CORPSE },
    ],
  },
  {
    title: 'Well of the Unfortunate',
    monsters: [
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.VERMLING_SHAMAN },
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    // 70
    title: 'Chained Isle',
    treasures: [6],
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Windswept Highlands',
    monsters: [
      { name: MONSTERS.SPITTING_DRAKE },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.SUN_DEMON },
    ],
  },
  {
    title: 'Oozing Grove',
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.GIANT_VIPER },
    ],
  },
  {
    title: 'Rockslide Ridge',
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.INOX_ARCHER },
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_SHAMAN },
    ],
  },
  {
    title: 'Merchant Ship',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.HIGH_SEA_ESCORT],
    treasures: [20],
    monsters: [
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.LURKER },
      { name: MONSTERS.DEEP_TERROR },
    ],
  },
  {
    // 75
    title: 'Overgrown Graveyard',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.GRAVE_JOB],
    treasures: [53],
    monsters: [
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Harrower Mine',
    treasures: [75],
    monsters: [
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.HARROWER_INFESTER },
    ],
  },
  {
    title: 'Vault of Secrets',
    monsters: [
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.HOUND },
    ],
  },
  {
    title: 'Sacrifice Pit',
    monsters: [
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    title: 'Lost Temple',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.FISHS_AID],
    treasures: [52],
    monsters: [
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.GIANT_VIPER },
      { name: BOSSES.BETRAYER },
    ],
  },
  {
    // 80
    title: 'Vigil Keep',
    monsters: [
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.HOUND },
    ],
  },
  {
    title: 'Temple of the Eclipse',
    treasures: [68],
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.SUN_DEMON },
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: BOSSES.COLORLESS },
    ],
  },
  {
    title: 'Burning Mountain',
    treasures: [62],
    monsters: [
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.STONE_GOLEM },
    ],
  },
  {
    title: 'Shadows Within',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.BAD_BUSINESS],
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.FLAME_DEMON },
    ],
  },
  {
    title: 'Crystalline Cave',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.TREMORS],
    treasures: [42],
    monsters: [
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.EARTH_DEMON },
    ],
  },
  {
    // 85
    title: 'Sun Temple',
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.SUN_DEMON },
    ],
  },
  {
    title: 'Harried Village',
    monsters: [
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.VERMLING_SHAMAN },
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.LURKER },
    ],
  },
  {
    title: 'Corrupted Cove',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_POISONS_SOURCE],
    treasures: [40],
    monsters: [
      { name: MONSTERS.LURKER },
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    title: 'Plane of Water',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.WATER_STAFF],
    treasures: [8, 37],
    monsters: [
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.LURKER },
    ],
  },
  {
    title: 'Syndicate Hideout',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.SIN_RA],
    treasures: [13, 27, 43],
    monsters: [
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.GIANT_VIPER },
    ],
  },
  {
    // 90
    title: 'Demonic Rift',
    treasures: [19],
    monsters: [
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Wild Melee',
    monsters: [
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.HOUND },
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Back Alley Brawl',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.DEBT_COLLECTION],
    monsters: [
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.SAVVAS_ICESTORM },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    title: 'Sunken Vessel',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_MAP_TO_TREASURE],
    treasures: [54],
    monsters: [
      { name: MONSTERS.LURKER },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Vermling Nest',
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.VERMLING_SHAMAN },
      { name: MONSTERS.CAVE_BEAR },
    ],
  },
  {
    // 95
    title: 'Payment Due',
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THROUGH_THE_NEST],
    monsters: [
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.SAVVAS_LAVAFLOW },
    ],
  },
  // 96 - 115 Forgotten Circles
  {
    title: 'Unexpected Visitors',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.END_OF_GLOOM],
    treasures: [91],
    monsters: [
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.FROST_DEMON },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    title: 'Lore Untold',
    treasures: [97],
    monsters: [
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.AESTHER_SCOUT },
      { name: MONSTERS.DEEP_TERROR },
    ],
  },
  {
    title: 'Past in Flames',
    treasures: [79],
    monsters: [
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.SPITTING_DRAKE },
    ],
  },
  {
    title: 'Aftershocks',
    treasures: [95],
    monsters: [
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.VALRATH_SAVAGE },
    ],
  },
  {
    // 100
    title: 'Shifting Gears',
    treasures: [76, 85],
    monsters: [
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.ANCIENT_ARTILLERY },
    ],
  },
  {
    title: 'Shrouded Crypt',
    treasures: [93],
    monsters: [
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.SPITTING_DRAKE },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
      { name: MONSTERS.NIGHT_DEMON },
    ],
  },
  {
    title: 'Bazaar of Knowledge',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    treasures: [77, 86],
    monsters: [

      // No monsters in the senario!
    ],
  },
  {
    title: 'Where It Is Needed',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    treasures: [81],
    monsters: [

      // TODO Show message that this is random, use deck tab instead
    ],
  },
  {
    title: 'A Gaping Wound',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    treasures: [87],
    monsters: [
      { name: MONSTERS.LURKER },
      { name: MONSTERS.SUN_DEMON },
      { name: MONSTERS.SPITTING_DRAKE },
      { name: MONSTERS.HARROWER_INFESTER },
    ],
  },
  {
    // 105
    title: 'Monstrosities of a Cult',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    partyAchievementsRequiredIncomplete: [PARTY_ACHIEVEMENTS.HUNTING_THE_HUNTER],
    treasures: [83, 88],
    monsters: [
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.VALRATH_TRACKER },
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.HOUND },
    ],
  },
  {
    title: 'Intricate Work',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    monsters: [
      { name: MONSTERS.AESTHER_ASHBLADE },
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.SAVVAS_ICESTORM },
      { name: MONSTERS.SAVVAS_LAVAFLOW },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.WIND_DEMON },
      { name: MONSTERS.FROST_DEMON },
    ],
  },
  {
    title: 'Mechanical Genius',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    treasures: [78, 90],
    monsters: [
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.VERMLING_SHAMAN },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Prologue to the End',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    monsters: [
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.VALRATH_SAVAGE },
      { name: MONSTERS.VALRATH_TRACKER },
      { name: BOSSES.HUMAN_COMMANDER },
      { name: BOSSES.VALRATH_COMMANDER },
    ],
  },
  {
    title: 'Epilogue of a War',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_1, GLOBAL_ACHIEVEMENTS.KNOWLEDGE_IS_POWER_2],
    treasures: [80, 94],
    monsters: [
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.VALRATH_SAVAGE },
      { name: MONSTERS.VALRATH_TRACKER },
    ],
  },
  {
    // 110
    title: 'A Circular Solution',
    treasures: [84],
    monsters: [
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.SAVVAS_LAVAFLOW },
      { name: MONSTERS.VALRATH_TRACKER },
      { name: MONSTERS.VERMLING_SHAMAN },
      { name: MONSTERS.OOZE },
      { name: MONSTERS.LURKER },
    ],
  },
  {
    title: 'The Shackles Loosen',
    treasures: [82, 92],
    monsters: [
      { name: MONSTERS.AESTHER_ASHBLADE },
      { name: MONSTERS.AESTHER_SCOUT },
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.HARROWER_INFESTER },
      { name: MONSTERS.VERMLING_SHAMAN },
    ],
  },
  {
    title: 'The Bottom of It',
    monsters: [
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.LIVING_BONES },
    ],
  },
  {
    title: 'The Lost Thread',
    monsters: [
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.LIVING_BONES },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.LIVING_SPIRIT },
    ],
  },
  {
    title: 'Ink Not Yet Dry',
    monsters: [
      { name: MONSTERS.AESTHER_ASHBLADE },
      { name: MONSTERS.AESTHER_SCOUT },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    // 115
    title: 'Future Uncertain',
    treasures: [96],
    monsters: [
      { name: MONSTERS.AESTHER_ASHBLADE },
      { name: MONSTERS.AESTHER_SCOUT },
      { name: MONSTERS.BLACK_IMP },
      { name: MONSTERS.VALRATH_SAVAGE },
      { name: MONSTERS.VALRATH_TRACKER },
      { name: BOSSES.MANIFESTATION },
    ],
  },
];
