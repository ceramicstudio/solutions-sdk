// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types'
export const definition: RuntimeCompositeDefinition = {
  models: {
    PointsAggregationInterface: {
      interface: true,
      implements: ['kjzl6hvfrbw6c6lxvcf8bc07wjyn29ocoxqn877uia1y86qph79axtdrcuijpeo'],
      id: 'kjzl6hvfrbw6c5m5bxe6jl7cocyxpg9b8em5w9mo3l8ws4zl5c0tu5vgapitpvk',
      accountRelation: { type: 'none' },
    },
    PointsAllocationInterface: {
      interface: true,
      implements: ['kjzl6hvfrbw6c6lxvcf8bc07wjyn29ocoxqn877uia1y86qph79axtdrcuijpeo'],
      id: 'kjzl6hvfrbw6cakj74rf7d3qjnm3xoydcgx7orzw4bwdmc6kljd04uojuhpef2j',
      accountRelation: { type: 'none' },
    },
    PointsInterface: {
      interface: true,
      implements: [],
      id: 'kjzl6hvfrbw6c6lxvcf8bc07wjyn29ocoxqn877uia1y86qph79axtdrcuijpeo',
      accountRelation: { type: 'none' },
    },
    SimplePointsAggregation: {
      interface: false,
      implements: [
        'kjzl6hvfrbw6c5m5bxe6jl7cocyxpg9b8em5w9mo3l8ws4zl5c0tu5vgapitpvk',
        'kjzl6hvfrbw6c6lxvcf8bc07wjyn29ocoxqn877uia1y86qph79axtdrcuijpeo',
      ],
      id: 'kjzl6hvfrbw6capj3or1esf65c1jbluhky3t2wupxefeuocqt5lz5u4gum07o24',
      accountRelation: { type: 'set', fields: ['recipient'] },
    },
    SimplePointsAllocation: {
      interface: false,
      implements: [
        'kjzl6hvfrbw6cakj74rf7d3qjnm3xoydcgx7orzw4bwdmc6kljd04uojuhpef2j',
        'kjzl6hvfrbw6c6lxvcf8bc07wjyn29ocoxqn877uia1y86qph79axtdrcuijpeo',
      ],
      id: 'kjzl6hvfrbw6c9rahz7aal75i0ncxkf5wmircmtpz2s34xls8ux1p08ic655oek',
      accountRelation: { type: 'list' },
    },
  },
  objects: {
    PointsAggregationInterface: {
      date: { type: 'datetime', required: true, immutable: false },
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    PointsAllocationInterface: {
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    PointsInterface: {
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    SimplePointsAggregation: {
      date: { type: 'datetime', required: true, immutable: false },
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: true },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
    SimplePointsAllocation: {
      points: { type: 'integer', required: true, immutable: false },
      recipient: { type: 'did', required: true, immutable: false },
      issuer: { type: 'view', viewType: 'documentAccount' },
    },
  },
  enums: {},
  accountData: {
    pointsAggregationInterfaceList: { type: 'connection', name: 'PointsAggregationInterface' },
    pointsAllocationInterfaceList: { type: 'connection', name: 'PointsAllocationInterface' },
    pointsInterfaceList: { type: 'connection', name: 'PointsInterface' },
    recipientOfPointsAggregationInterfaceList: {
      type: 'account',
      name: 'PointsAggregationInterface',
      property: 'recipient',
    },
    recipientOfPointsAllocationInterfaceList: {
      type: 'account',
      name: 'PointsAllocationInterface',
      property: 'recipient',
    },
    recipientOfPointsInterfaceList: {
      type: 'account',
      name: 'PointsInterface',
      property: 'recipient',
    },
    recipientOfSimplePointsAggregation: {
      type: 'account-set',
      name: 'SimplePointsAggregation',
      property: 'recipient',
    },
    recipientOfSimplePointsAggregationList: {
      type: 'account',
      name: 'SimplePointsAggregation',
      property: 'recipient',
    },
    recipientOfSimplePointsAllocationList: {
      type: 'account',
      name: 'SimplePointsAllocation',
      property: 'recipient',
    },
    simplePointsAggregation: { type: 'set', name: 'SimplePointsAggregation' },
    simplePointsAggregationList: { type: 'connection', name: 'SimplePointsAggregation' },
    simplePointsAllocationList: { type: 'connection', name: 'SimplePointsAllocation' },
  },
}
