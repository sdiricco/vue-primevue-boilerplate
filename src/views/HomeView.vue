<script setup lang="ts">
import { ref } from "vue";
const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const categories = ref([
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" },
]);
const selectedCategories = ref(["Marketing"]);
</script>

<template>
  <div class="p-4 text-color">
    <div class="text-5xl font-bold mb-5">Hello from vue3 template!</div>
    <div class="text-2xl font-bold">Features:</div>
    <ul class="text-xl">
      <li>Vue3 latest</li>
      <li>Pinia</li>
      <li>Vue Router</li>
      <li>PrimeVue</li>
      <li>Prime Icons</li>
      <li>Prime Flex</li>
    </ul>
    <div class="mb-4">
      <div class="text-2xl font-bold">Here some primevue components:</div>
    </div>

    <div class="flex gap-4 mb-4">
      <Button icon="pi pi-check" aria-label="Submit" />
      <Button label="Submit" icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" iconPos="right" />
    </div>

    <div class="flex gap-4 mb-4">
      <span class="p-buttonset">
        <Button label="Save" icon="pi pi-check" />
        <Button label="Delete" icon="pi pi-trash" />
        <Button label="Cancel" icon="pi pi-times" />
      </span>
    </div>

    <div class="flex gap-4 mb-4">
      <Button icon="pi pi-check" aria-label="Filter" />
      <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
      <Button icon="pi pi-search" severity="success" aria-label="Search" />
      <Button icon="pi pi-user" severity="info" aria-label="User" />
      <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
      <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
      <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
    </div>

    <div class="mb-4">
      <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
    </div>

    <div class="flex flex-column gap-1 mb-4">
      <div v-for="category of categories" :key="category.key" class="flex align-items-center">
        <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" class="mr-2" />
        <label :for="category.key">{{ category.name }}</label>
      </div>
    </div>

    <div>
      <Knob :model-value="-20" :min="-50" :max="10" />
    </div>

    <TabView>
      <TabPanel header="Header I">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
      <TabPanel header="Header II">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </TabPanel>
      <TabPanel header="Header III">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
          fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus.
        </p>
      </TabPanel>
    </TabView>
  </div>
</template>
