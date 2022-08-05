<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Guide</template>

    Xiaomi Router unlocking/flashing guides and tutorials. Magic Surf related
    contentsa are included.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    Including a
    <a href="ssh">SSH password calculator</a>
    , which calculates the default root password according to the SN number you
    provide.

    <br />

    More tools are comming soon.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question or find your answer on
    <a target="_blank" href="https://right.com.cn/forum/">right.com</a>, the
    best forum about wireless routers.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support This Project</template>

    Please give us your precious suggestions about this project. PRs also
    welcomed.
  </WelcomeItem>
</template>
