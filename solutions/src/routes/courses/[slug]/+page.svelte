<script lang="ts">
  import { enhance } from "$app/forms";
  import { courses } from "$lib/api/data";
  import type { PageData } from "./$types";
  export let data: PageData;
  $: course = data.course!;
  // your script goes here
</script>

<h1>{course.title}</h1>


<div class="course-container">
  {#each course.modules as courseModule(courseModule.title)}
    <div class="module">
      <div class="title">
        <h3>{courseModule.title}</h3>
      </div>
      <div class="lessons">
        {#each courseModule.lessons as lesson(lesson.title)}
        <div class="lesson" class:completed={lesson.completed}>
          <h4>{lesson.title}</h4>
          <p>{lesson.description}</p>
          <form
            action="/lessons/toggle?/toggle"
            method="post"
            use:enhance={({ data }) => {
              lesson.completed = !!data.get("completed");
            }}
          >
            <input type="hidden" name="course_title" value={course.title} />
            <input type="hidden" name="module_title" value={courseModule.title} />
            <input type="hidden" name="lesson_title" value={lesson.title} />
            <input type="hidden" name="completed" value={lesson.completed ? "" : "true"} />
            <button class="toggle" aria-label="Mark Lesson as {lesson.completed ? 'not completed' : 'completed'}" />
          </form>
        </div>
        {/each}
      </div>
    </div>
  {/each}
</div>


<style>
  .course-container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .module {
    display: grid;
    grid-template-columns: 1fr;
  }
  .module .title {
    background: rgba(0, 0, 0, 0.4);
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .lesson {
    background-color: white;

    display: grid;
    grid-template-columns: 2fr 5fr 2rem;
    align-items: center;
    margin: 0 0 0.5rem 0;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
    transform: translate(-1px, -1px);
    transition: filter 0.2s, transform 0.2s;
    border-radius: 8px;
    grid-gap: 0.5rem;
    padding: 0.5rem;
  }

  .completed {
    transform: none;
    opacity: 0.4;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.1));
  }
  .lesson button {
    width: 2em;
    height: 2em;
    border: none;
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  button.toggle {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    box-sizing: border-box;
    background-size: 1em auto;
  }

  .completed .toggle {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }
  .lesson h4, p {
    margin: 1rem;
  }
</style>
