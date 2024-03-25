// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types'
export const definition: RuntimeCompositeDefinition = {"models":{"GenericPointAllocation":{"interface":true,"implements":[],"id":"kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4","accountRelation":{"type":"none"}},"SinglePoint":{"interface":false,"implements":["kjzl6hvfrbw6c7ilzfpjw96drd04jadb0aybiklk70ys2imxp5mjbjmgkecgddf","kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4"],"id":"kjzl6hvfrbw6c9332q9di7qfshxczet94w2tzeubvkbkk9vtuwmya6s9f1bvx9p","accountRelation":{"type":"list"}},"SinglePointAllocation":{"interface":true,"implements":["kjzl6hvfrbw6c6m3n64vb2h4n8nxq9jjfb7sf7a9y893spm1pjd0enrsdlyphg4"],"id":"kjzl6hvfrbw6c7ilzfpjw96drd04jadb0aybiklk70ys2imxp5mjbjmgkecgddf","accountRelation":{"type":"none"}}},"objects":{"GenericPointAllocation":{"recipient":{"type":"did","required":true,"immutable":false},"issuer":{"type":"view","viewType":"documentAccount"}},"SinglePoint":{"recipient":{"type":"did","required":true,"immutable":false},"issuer":{"type":"view","viewType":"documentAccount"}},"SinglePointAllocation":{"recipient":{"type":"did","required":true,"immutable":false},"issuer":{"type":"view","viewType":"documentAccount"}}},"enums":{},"accountData":{"genericPointAllocationList":{"type":"connection","name":"GenericPointAllocation"},"recipientOfGenericPointAllocationList":{"type":"account","name":"GenericPointAllocation","property":"recipient"},"recipientOfSinglePointAllocationList":{"type":"account","name":"SinglePointAllocation","property":"recipient"},"recipientOfSinglePointList":{"type":"account","name":"SinglePoint","property":"recipient"},"singlePointAllocationList":{"type":"connection","name":"SinglePointAllocation"},"singlePointList":{"type":"connection","name":"SinglePoint"}}}