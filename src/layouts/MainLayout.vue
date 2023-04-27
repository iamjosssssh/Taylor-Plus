<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <img
            alt="Taylor +"
            src="~assets/logox200.png"
            style="width: 170px; height: 60px"
          />
        </q-toolbar-title>

        <q-space />
        <q-btn @click="toggleDarkMode" side="right">Toggle dark mode</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated>
      <q-list>
        <q-item-label header>Frequently Used Items</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <!-- <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Mary</q-item-label>
        <q-item-label caption>2 new messages</q-item-label>
      </q-item-section>
      <q-item-section side> 3 min ago </q-item-section>
    </q-item>

    <q-banner rounded class="bg-primary text-white">
      <template v-slot:avatar>
        <q-avatar icon="signal_wifi_off" color="white" text-color="warning"></q-avatar>
      </template>

      You have lost connection to the internet. This app is offline.

      <template v-slot:action>
        <q-btn flat color="white" label="Turn ON Wifi"></q-btn>

    </q-banner>-->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";

const linksList = [
  {
    title: "Taylor 2",
    caption: "Faith's JiT Tracker",
    icon: "table_view",
    link: "https://quasar.dev",
  },
  {
    title: "Talos",
    caption: "Perform Build Tasks",
    icon: "dashboard",
    link: "go/talos",
  },
  {
    title: "Open Team Chat",
    caption: "Communicate with Crew",
    icon: "question_answer",
    link: "https://mail.google.com/chat/u/0/#chat/space/AAAAM98QlyQ",
  },
  {
    title: "View PRY Projections",
    caption: "View upcoming deployments",
    icon: "visibility",
    link: "go/pryjitfuture",
  },
  {
    title: "Report a Build Issue",
    caption: "Report an issue for the client",
    icon: "report_problem",
    link: "go/fixjitbuild",
  },
  {
    title: "Submit Trash Ticket",
    caption: "Notify GXO for trash pickup",
    icon: "recycling",
    link: "go/prytrash",
  },
  /*{
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },*/
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    // get status
    console.log($q.dark.isActive); // true, false
    // get configured status
    console.log($q.dark.mode); // "auto", true, false
    // set status
    $q.dark.set("auto"); // or false or "auto"

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDarkMode() {
        $q.dark.toggle();
      },
    };
  },
});
</script>
<style>
.q-item-label--header {
  font-size: 16px;
  text-align: center;
}
</style>
```
