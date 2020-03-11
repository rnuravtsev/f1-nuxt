<template>
  <div class="parentx">

    <vs-sidebar
      class="v-nav-menu items-no-padding"
      v-model="isVerticalNavMenuActive"
      ref="verticalNavMenu"
      default-index="-1"
      :click-not-close="clickNotClose"
      :reduce-not-rebound="reduceNotRebound"
      :parent="parent"
      :hiddenBackground="clickNotClose"
      :reduce="reduce"
      v-hammer:swipe="onMenuSwipe">

      <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">

        <!-- Header -->
        <div class="header-sidebar flex items-end justify-between" slot="header">

          <!-- Logo -->
          <router-link tag="div" class="vx-logo cursor-pointer flex items-center" to="/">
            <logo class="w-10 mr-4 fill-current text-primary" />
            <span class="vx-logo-text text-primary" v-show="isMouseEnter || !reduce" v-if="title">{{ title }}</span>
          </router-link>
          <!-- /Logo -->

          <!-- Menu Buttons -->
          <div>
            <!-- Close Button -->
            <template v-if="showCloseButton">
              <feather-icon icon="XIcon" class="m-0 cursor-pointer" @click="$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)" />
            </template>

            <!-- Toggle Buttons -->
            <template v-else-if="!showCloseButton && !verticalNavMenuItemsMin">
              <feather-icon
                id="btnVNavMenuMinToggler"
                class="mr-0 cursor-pointer"
                :icon="reduce ? 'CircleIcon' : 'DiscIcon'"
                svg-classes="stroke-current text-primary"
                @click="toggleReduce(!reduce)" />
            </template>
          </div>
          <!-- /Menu Toggle Buttons -->
        </div>
        <!-- /Header -->

        <!-- Header Shadow -->
        <div class="shadow-bottom" v-show="showShadowBottom" />

        <!-- Menu Items -->
        <component :is="scrollbarTag" ref="verticalNavMenuPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psSectionScroll" @scroll="psSectionScroll" :key="$vs.rtl">
          <template v-for="(item, index) in menuItemsUpdated">

            <!-- Group Header -->
            <span v-if="item.header && !verticalNavMenuItemsMin" class="navigation-header truncate" :key="`header-${index}`">
              {{ item.header }}
            </span>
            <!-- /Group Header -->

            <template v-else-if="!item.header">

              <!-- Nav-Item -->
              <v-nav-menu-item
                v-if="!item.submenu"
                :key="`item-${index}`"
                :index="index"
                :to="item.slug !== 'external' ? item.url : null"
                :href="item.slug === 'external' ? item.url : null"
                :icon="item.icon" :target="item.target"
                :isDisabled="item.isDisabled"
                :slug="item.slug">
                  <span v-show="!verticalNavMenuItemsMin" class="truncate">{{ item.name }}</span>
                  <vs-chip class="ml-auto" :color="item.tagColor" v-if="item.tag && (isMouseEnter || !reduce)">{{ item.tag }}</vs-chip>
              </v-nav-menu-item>

              <!-- Nav-Group -->
              <template v-else>
                <v-nav-menu-group
                  :key="`group-${index}`"
                  :openHover="openGroupHover"
                  :group="item"
                  :groupIndex="index"
                  :open="isGroupActive(item)" />
              </template>
              <!-- /Nav-Group -->
            </template>
          </template>
        </component>
        <!-- /Menu Items -->
      </div>
    </vs-sidebar>

    <!-- Swipe Gesture -->
    <div
      v-if="!isVerticalNavMenuActive"
      class="v-nav-menu-swipe-area"
      v-hammer:swipe="onSwipeAreaSwipe" />
    <!-- /Swipe Gesture -->
  </div>
</template>