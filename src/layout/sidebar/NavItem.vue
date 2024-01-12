<script setup>

const props = defineProps({ item: Object, level: Number });
</script>

<template>
    <!---Single Item-->
    <v-list-item
        :to="item.to"
        rounded
        class="mb-1"
        color="primary"
        :disabled="item.disabled"
        :target="item.type === 'external' ? '_blank' : ''"
    >
        <!---If icon-->
        <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{item.title }}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
            {{ item.subCaption }}
        </v-list-item-subtitle>
    </v-list-item>
</template>
