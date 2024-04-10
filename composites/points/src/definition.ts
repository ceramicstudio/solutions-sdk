// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types'
export const definition: RuntimeCompositeDefinition = {
  models: {
    GenericPointAllocation: {
      interface: true,
      implements: [],
      id: 'kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4',
      accountRelation: { type: 'none' },
    },
    MultiplePoints: {
      interface: false,
      implements: [
        'kjzl6hvfrbw6ca7buvthejhv7vqr85vmpsepzj0mc6665y2zarvjbuvtm3v4kah',
        'kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4',
      ],
      id: 'kjzl6hvfrbw6c9fmjjdsbuxnewf0yhvco3dn5mihiogeso6i1csdbw2fq8oeijy',
      accountRelation: { type: 'list' },
    },
    MultiplePointsAllocation: {
      interface: true,
      implements: ['kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4'],
      id: 'kjzl6hvfrbw6ca7buvthejhv7vqr85vmpsepzj0mc6665y2zarvjbuvtm3v4kah',
      accountRelation: { type: 'none' },
    },
    PointsAggregation: {
      interface: true,
      implements: [],
      id: 'kjzl6hvfrbw6cb6393dpd8blke5w8r7pvbl4449mxetuibcav3oab8fnxmys6d6',
      accountRelation: { type: 'none' },
    },
    SinglePoint: {
      interface: false,
      implements: [
        'kjzl6hvfrbw6c7ilzfpjw96drd04jadb0aybiklk70ys2imxp5mjbjmgkecgddf',
        'kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4',
      ],
      id: 'kjzl6hvfrbw6c9332q9di7qfshxczet94w2tzeubvkbkk9vtuwmya6s9f1bvx9p',
      accountRelation: { type: 'list' },
    },
    SinglePointAllocation: {
      interface: true,
      implements: ['kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4'],
      id: 'kjzl6hvfrbw6c7ilzfpjw96drd04jadb0aybiklk70ys2imxp5mjbjmgkecgddf',
      accountRelation: { type: 'none' },
    },
    TotalPoints: {
      interface: false,
      implements: ['kjzl6hvfrbw6cb6393dpd8blke5w8r7pvbl4449mxetuibcav3oab8fnxmys6d6'],
      id: 'kjzl6hvfrbw6c5be4exsm7nkkksnqatki8bceyvbgtmcu2bu5vign23b7x4emlb',
      accountRelation: { type: 'set', fields: ['recipient'] },
    },
  },
  objects: {
    GenericPointAllocation: {
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    MultiplePoints: {
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    MultiplePointsAllocation: {
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    PointsAggregation: {
      date: { type: 'datetime', required: true, immutable: false },
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    SinglePoint: {
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    SinglePointAllocation: {
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    TotalPoints: {
      date: { type: 'datetime', required: true, immutable: false },
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: true },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
  },
  enums: {},
  accountData: {
    genericPointAllocationList: { type: 'connection', name: 'GenericPointAllocation' },
    multiplePointsAllocationList: { type: 'connection', name: 'MultiplePointsAllocation' },
    multiplePointsList: { type: 'connection', name: 'MultiplePoints' },
    pointsAggregationList: { type: 'connection', name: 'PointsAggregation' },
    recipientOfGenericPointAllocationList: {
      type: 'account',
      name: 'GenericPointAllocation',
      property: 'recipient',
    },
    recipientOfMultiplePointsAllocationList: {
      type: 'account',
      name: 'MultiplePointsAllocation',
      property: 'recipient',
    },
    recipientOfMultiplePointsList: {
      type: 'account',
      name: 'MultiplePoints',
      property: 'recipient',
    },
    recipientOfPointsAggregationList: {
      type: 'account',
      name: 'PointsAggregation',
      property: 'recipient',
    },
    recipientOfSinglePointAllocationList: {
      type: 'account',
      name: 'SinglePointAllocation',
      property: 'recipient',
    },
    recipientOfSinglePointList: { type: 'account', name: 'SinglePoint', property: 'recipient' },
    recipientOfTotalPoints: { type: 'account-set', name: 'TotalPoints', property: 'recipient' },
    recipientOfTotalPointsList: { type: 'account', name: 'TotalPoints', property: 'recipient' },
    singlePointAllocationList: { type: 'connection', name: 'SinglePointAllocation' },
    singlePointList: { type: 'connection', name: 'SinglePoint' },
    totalPoints: { type: 'set', name: 'TotalPoints' },
    totalPointsList: { type: 'connection', name: 'TotalPoints' },
  },
}
