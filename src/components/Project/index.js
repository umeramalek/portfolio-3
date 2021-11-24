import React from 'react'
import "./style.css"

const Project = () => {
    return (
        <section class="responsive" id="projects">

        <h2 class="titles"> My Projects </h2>
        <ul>
            <li id="prj"> 
            <img src="https://lh3.googleusercontent.com/proxy/6BbhAUodojcQyBG-8gzqRBoWlbKIxsLzsksFqD2AbSzLbVYSnxaqO1tv7691N5YHZc_06jqdDWXtSf8nsSyVKJw38a5c0jnAnHYD0QhYvqk7T9k401M9ERVqJ55XdEpFEYwCfbU"/>
                <a href="https://umeramalek.github.io/homework-one/" className = "img_1"> 
                    <div>
                        <h2> Project example</h2>

                    </div>
                </a>
                <a href="https://umeramalek.github.io/homework-one/" >
                    <i class="fab fa-github"></i>
                </a>
            </li>
          
        </ul>
    </section>
    )
}

export default Project
