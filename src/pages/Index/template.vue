<template>
  <div id="index">

    <section class="blog-posts">
      <router-link class="item" v-for="blog in this.blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>{{ blog.title }}<span> {{ friendlyDate( blog.createdAt )}}</span></h3>
        <p>{{ blog.description }}</p>
<!--        <p>-->
<!--          这是内容这里都是我在胡扯的  我出生在一个富贵的家庭每个月有500万的零花钱  出门开宾利 手表是理查德米勒 嗐 想想真是牛逼，有钱真好!-->
<!--        </p>-->
      </router-link>

    </section>

    <section class="pagination">
    <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="20"
        @current-change="onPageChange">
    </el-pagination>
    </section>


  </div>

</template>

<script src="./template.js"></script>

<style src="./template.less" scoped lang="less"></style>

