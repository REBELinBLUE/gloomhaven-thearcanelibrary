import { BOSSES, MONSTERS } from '../Monsters';

export const CAPITAL_INTRIGUE_SCENARIOS = [
  {
    symbol: 'CI1',
    title: 'Blood and Glory',
    monsters: [
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.INOX_GUARD },
      { name: MONSTERS.INOX_SHAMAN },
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.SPITTING_DRAKE },
    ],
  },
  {
    symbol: 'CI2',
    title: 'Jailbreak',
    monsters: [
      { name: MONSTERS.HARROWER_INFESTER },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.GIANT_VIPER },
    ],
  },
  {
    symbol: 'CI3',
    title: 'Slippery Slope',
    monsters: [
      { name: MONSTERS.OOZE },
      { name: MONSTERS.LIVING_CORPSE },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    symbol: 'CI4',
    title: 'Emergent Evidence',
    monsters: [
      { name: MONSTERS.GIANT_VIPER },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.CULTIST },
    ],
  },
  {
    symbol: 'CI5',
    title: 'They Just Keep Coming',
    monsters: [
      { name: MONSTERS.SAVVAS_LAVAFLOW },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.EARTH_DEMON },
    ],
  },
  {
    symbol: 'CI6',
    title: 'Peer Pressure',
    monsters: [
      { name: MONSTERS.HOUND },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
    ],
  },
  {
    symbol: 'CI7',
    title: 'The Chase',
    monsters: [
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.CULTIST },
    ],
  },
  {
    symbol: 'CI8',
    title: 'Breaking and Entering',
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.CULTIST },
    ],
  },
  {
    symbol: 'CI9',
    title: 'Legal Entanglements',
    monsters: [
      { name: BOSSES.CAPTAIN },
      { name: MONSTERS.CITY_GUARD },
    ],
  },
  {
    symbol: 'CI10',
    title: 'Beasts of Order and Chaos',
    monsters: [
      { name: BOSSES.CAPTAIN },
      { name: BOSSES.WINGED_HORROR },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.CULTIST },
      { name: MONSTERS.NIGHT_DEMON },
    ],
  },
];
