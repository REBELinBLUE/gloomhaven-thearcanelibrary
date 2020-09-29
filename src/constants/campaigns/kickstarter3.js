import { BOSSES, MONSTERS } from '../Monsters';

export const INFINITE_BEYOND_SCENARIOS = [
  {
    symbol: 'IB1',
    title: 'Planar Prison',
    monsters: [
      { name: MONSTERS.HARROWER_INFESTER },
      { name: MONSTERS.CAVE_BEAR },
      { name: MONSTERS.CITY_ARCHER },
      { name: MONSTERS.LIVING_CORPSE },
    ],
  },
  {
    symbol: 'IB2',
    title: 'Gas Giants',
    monsters: [
      { name: MONSTERS.ANCIENT_ARTILLERY },
      { name: MONSTERS.CITY_GUARD },
      { name: MONSTERS.RENDING_DRAKE },
      { name: MONSTERS.VERMLING_SCOUT },
    ],
  },
  {
    symbol: 'IB3',
    title: 'A Beast in the Clouds',
    monsters: [
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    symbol: 'IB4',
    title: 'Exposed',
    monsters: [
      { name: MONSTERS.FLAME_DEMON },
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.BANDIT_ARCHER },
    ],
  },
  {
    symbol: 'IB5',
    title: "The Horn of G'threbrax",
    monsters: [
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.STONE_GOLEM },
      { name: MONSTERS.BLACK_IMP },
    ],
  },
  {
    symbol: 'IB6',
    title: 'A House of Doors',
    monsters: [
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.SUN_DEMON },
      { name: MONSTERS.WIND_DEMON },
    ],
  },
  {
    symbol: 'IB7',
    title: 'Ascendance',
    monsters: [
      { name: MONSTERS.EARTH_DEMON },
      { name: MONSTERS.FOREST_IMP },
      { name: MONSTERS.GIANT_VIPER },
    ],
  },
  {
    symbol: 'IB8',
    title: 'The Other Side of Infinity',
    monsters: [],
  },
  {
    symbol: 'IB9',
    title: 'Blood in the Streets',
    monsters: [
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.BANDIT_GUARD },
      { name: MONSTERS.HOUND },
    ],
  },
  {
    symbol: 'IB10',
    title: 'The Many Paths Before Us',
    monsters: [
      { name: MONSTERS.NIGHT_DEMON },
      { name: MONSTERS.BANDIT_ARCHER },
      { name: MONSTERS.VERMLING_SCOUT },
      { name: MONSTERS.DEEP_TERROR },
      { name: MONSTERS.NIGHT_DEMON },
      { name: BOSSES.BANDIT_COMMANDER, label: BOSSES.RAIDER_KING }, // fixme: figure out how to do this
    ],
  },
];
