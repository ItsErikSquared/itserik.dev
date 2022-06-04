<script lang="ts">
import { ref } from "vue";
import { useLanyard, type LanyardData } from "@leonardssh/use-lanyard";

var presence = ref({});
var spotify = ref({
  track_id: "",
  song: "Loading...",
  artist: "",
  album_art_url: "/spotify.svg",
});
var activity = ref({
  name: "Loading...",
});
var activityActive = ref(false);

export default {
  data() {
    return {
      presence,
      spotify,
      activity,
      activityActive,
    };
  },
  async mounted() {
    await useLanyard({
      userId: "161253450997301248",
      socket: true,
      onPresenceUpdate(received: LanyardData) {
        presence.value = received;
        spotify.value = received.spotify ? received.spotify : spotify.value;

        let activities = received.activities.filter((act) => act.type == 0);
        if (activities.length > 0) {
          activity.value = activities[0];
          activityActive.value = true;
        } else activityActive.value = false;

        //stfu lint
        var discordEl = document.getElementById("discord");
        if (discordEl) discordEl.className = received.discord_status;

        if (sessionStorage.getItem("ied.debug")) {
          console.log(received);
        }
      },
    });
  },
};
</script>

<template>
  <div
    v-if="activity"
    class="activity"
    :style="activityActive ? '' : 'opacity: 0%'"
  >
    <h5>Doing...</h5>
    <div class="info">
      <img
        v-if="activity.assets && activity.assets.large_image"
        :src="
          activity.assets.large_image.startsWith('mp:')
            ? activity.assets.large_image.replace(
                'mp:',
                'https://media.discordapp.net/'
              )
            : `https://media.discordapp.net/app-assets/${activity.application_id}/${activity.assets.large_image}`
        "
      />
      <img
        v-if="activity.assets && activity.assets.small_image"
        class="small"
        :src="
          activity.assets.small_image.startsWith('mp:')
            ? activity.assets.small_image.replace(
                'mp:',
                'https://media.discordapp.net/'
              )
            : `https://media.discordapp.net/app-assets/${activity.application_id}/${activity.assets.small_image}`
        "
      />
      <div class="text">
        <a
          :href="`https://duckduckgo.com/?q=${activity.name}`"
          target="_blank"
          >{{ activity.name }}</a
        >
        <p v-if="activity.state">{{ activity.state }}</p>
        <p v-if="activity.details">{{ activity.details }}</p>
      </div>
    </div>
  </div>
  <div
    v-if="spotify"
    class="spotify"
    :style="presence.listening_to_spotify ? '' : 'opacity: 0%'"
  >
    <h5>Jamming...</h5>
    <div class="info">
      <div class="text">
        <a
          :href="'https://open.spotify.com/track/' + spotify.track_id"
          target="_blank"
        >
          {{
            spotify.song.split(" - ")[0].length > 33
              ? spotify.song.split(" - ")[0].substring(0, 30) + "..."
              : spotify.song.split(" - ")[0]
          }}
        </a>
        <p>on {{ spotify.album }}</p>
        <p>by {{ spotify.artist.split(";")[0] }}</p>
      </div>
      <img :src="spotify.album_art_url" />
    </div>
  </div>
</template>

<style>
.spotify,
.activity {
  display: none;
}

@media only screen and (min-width: 750px) {
  h5,
  a,
  p,
  a:link,
  a:visited {
    margin: 0px;
    padding: 5px;
    color: rgba(0, 0, 0, 0.3);
    transition: 0.5s;
  }

  p.title,
  a.title {
    padding: 5px;
  }

  a:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  .info {
    display: flex;
  }

  .info .text {
    display: block;
    position: relative;
  }

  .activity,
  .spotify {
    transition: 0.5s;
    bottom: 0px;
    position: fixed;
    padding: 5px;
    display: inherit;
  }

  .activity img,
  .spotify img {
    height: 50px;
    border-radius: 15px;
  }

  .activity {
    left: 0px;
    text-align: left;
  }

  .activity .small {
    height: 20px;
    bottom: 3px;
    left: 40px;
    position: absolute;
  }

  .info .text p {
    padding: 0px 7px;
    font-size: 12px;
  }

  .spotify {
    right: 0px;
    text-align: right;
  }
}
</style>
