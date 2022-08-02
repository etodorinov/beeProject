import { Link } from "react-router-dom";

export const Notes = () => {
  return (
    <main>
      <section className="note-catalogue">
        <h1>
          <Link to="/hives/details">
            <span>Hive 1/Blue</span>
          </Link>
        </h1>
        <div className="note-list">
          <div className="note">
            <div className="note-info">
              <h1>Date: 07.07.2022</h1>
              <span>Note:</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                dicta, unde quo natus porro nam minima, odit dolore culpa
                voluptas harum fugiat consequatur quasi, ut exercitationem.
                Repellendus repudiandae nostrum voluptates saepe maiores
                accusamus, illum autem? Blanditiis ipsa obcaecati tenetur in qui
                labore reiciendis, cum ullam nobis incidunt veniam dolores esse
                eveniet non facilis quam magni explicabo perferendis
                consequuntur natus, recusandae rem nihil vitae sapiente. Soluta
                accusamus animi dolorum nihil odio fuga. Veniam doloremque
                voluptas perferendis aut odit facilis voluptatem provident,
                maxime ratione veritatis, ea, qui rerum! Quis voluptatem maiores
                odio labore nobis perspiciatis quod non magni, aliquid, expedita
                fugit alias?
              </p>
            </div>
          </div>
        </div>

        {/* <div className="no-notes">
            <p>There are no notes found!</p>
        </div> */}
      </section>
    </main>
  );
};
