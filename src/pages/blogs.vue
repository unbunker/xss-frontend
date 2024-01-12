
<script setup>
import { fetchBlogs, createBlog} from '../api/blogs'; 
import { ref, onMounted } from 'vue';

const myList = ref(null);
const userMessages = ref([]);
const userMessageInput = ref('');
const imageUrl = ref('');

const renderMessages = () => {
  let messageItems = '';

  if (!userMessages.value) {
    return;
  }

  for (const message of userMessages.value) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
          <b>${message.text}</b>
          <br/>
          <img src="${message.imageUrl}" alt="${message.text}">
        </div>
        <br/>
      </li>
    `;
  }

  myList.value.innerHTML = messageItems;
};

onMounted(async () => {
  await getBlogs();
  renderMessages();
});

const getBlogs = async() => {
    try {
      let blogs = await fetchBlogs();
      for(const blog of blogs) {
        userMessages.value.push({
          text: blog.userText,
          imageUrl: blog.url
        });
      }

    } catch (error) {
      console.error('Error in fetchBlogs:', error);
    }
  }

const formSubmitHandler = () => {
  if (
    !userMessageInput.value ||
    !imageUrl.value ||
    userMessageInput.value.trim().length === 0 ||
    imageUrl.value.trim().length === 0
  ) {
    alert('Please insert a valid message and image.');
    return;
  }

  let body = {
    text: userMessageInput.value,
    imageUrl: imageUrl.value,
  }

  userMessages.value.push(body);

  createBlog(body)

  userMessageInput.value = '';
  imageUrl.value = '';


  renderMessages()
};


</script>

<template>
  <v-row class="match-height">
    <v-col cols="12" md="12">
      <v-card elevation="4" class="withbg">
        <v-card-item>

          <form @submit.prevent="formSubmitHandler">
            
            <v-col cols="12">
              <v-text-field variant="underlined" v-model="userMessageInput" label="Enter your message" type="text"/>
            </v-col>
            <v-col cols="12">
              <v-text-field variant="underlined" v-model="imageUrl" label="Enter image URL" type="text"/>
            </v-col>

            <v-btn type="submit"  variant="outlined"> 
              Submit 
            </v-btn>
          </form>

        </v-card-item>
      </v-card>

      <v-card elevation="4" class="withbg">
        <v-card-item>
          <ul ref="myList">
            
          </ul>
        </v-card-item>
      </v-card>
          
    </v-col>
  </v-row>
</template>

