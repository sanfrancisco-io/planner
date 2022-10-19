import {
  AndroidFilled,
  AppleFilled,
  WindowsFilled,
  ChromeFilled,
  GithubFilled,
  AliwangwangFilled,
  YoutubeFilled,
} from '@ant-design/icons';
export const newBoard = Array.from({ length: 64 }, (_, index) => {
  return { id: index, items: [] };
});

export const iconConfigs = [
  {
    id: 100,
    x: 0,
    y: 0,
    icon: AndroidFilled,
    title: 'Диван',
  },
  {
    id: 101,
    x: 0,
    y: 0,
    icon: AppleFilled,
    title: 'стул',
  },
  {
    id: 102,
    x: 0,
    y: 0,
    icon: WindowsFilled,
    title: 'стол',
  },
  {
    id: 103,
    x: 0,
    y: 0,
    icon: ChromeFilled,
    title: 'кресло',
  },
  {
    id: 104,
    x: 0,
    y: 0,
    icon: GithubFilled,
    title: 'арбуз',
  },
  {
    id: 105,
    x: 0,
    y: 0,
    icon: AliwangwangFilled,
    title: 'банан',
  },
  {
    id: 106,
    x: 0,
    y: 0,
    icon: YoutubeFilled,
    title: 'кошка',
  },
];
