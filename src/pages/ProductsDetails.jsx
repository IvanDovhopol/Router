import { useParams, useLocation } from 'react-router-dom';
import { getProductById } from 'path/to/fakeApi';
import { BackToLink } from 'components/BackToLink';

const ProductsDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return (
    <main>
      <BackToLink to={backLinkHref}>Back to products</BackToLink>
      <img
        src="https://cdn.pixabay.com/photo/2022/12/26/19/57/champagne-7679665_960_720.jpg"
        alt=""
      />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, harum molestias. Vitae eaque libero debitis qui fuga
          sed commodi quos enim officiis expedita sunt beatae ad harum,
          consectetur accusantium fugit repellendus, neque tenetur a ducimus
          quia nihil odio saepe quod. Soluta id distinctio ab est accusantium
          perspiciatis cum placeat qui molestias dignissimos vel, reprehenderit
          fuga ut, corrupti perferendis architecto obcaecati incidunt quis
          inventore modi sunt nisi iure. Neque molestias sequi temporibus omnis
          placeat beatae, error recusandae magni, quo eaque laudantium pariatur,
          consectetur expedita. Vero debitis ea explicabo ratione architecto
          quaerat cupiditate suscipit molestias asperiores culpa, assumenda
          ipsam saepe quos harum consequuntur sed recusandae. Necessitatibus
          repudiandae qui temporibus, obcaecati optio earum vero quaerat
          asperiores voluptates explicabo consequuntur ullam eligendi eum
          deleniti aliquid molestiae esse! Est ab, ad natus, a eius
          reprehenderit sint quam, alias vitae deserunt laudantium repudiandae
          ducimus. Vel magni incidunt laboriosam ex inventore odit molestiae,
          quis tenetur quia expedita, nesciunt amet cum quam repellendus!
          Beatae, ipsam et sequi minima cupiditate tenetur eveniet tempore
          exercitationem, enim aspernatur nulla sit delectus magnam atque nemo
          accusantium molestias minus qui totam iure harum? Consequuntur odio
          facere, incidunt ullam sequi natus eum architecto accusamus expedita
          ratione delectus, quidem dolor ex animi vitae perspiciatis numquam in
          voluptatem iure dolores! Cupiditate ducimus autem explicabo eligendi
          blanditiis veniam libero optio accusantium quasi magni eos repudiandae
          dicta, unde amet quam nostrum suscipit distinctio doloremque aperiam
          mollitia. Unde non quidem distinctio commodi eligendi quis nisi
          maxime, ullam alias nesciunt, ab hic labore quod porro modi
          consectetur maiores reiciendis perspiciatis cumque repellendus quaerat
          aspernatur. Maxime cumque atque debitis quo, dolorum quia, commodi
          mollitia laboriosam, officiis temporibus ad? Molestiae repellat
          voluptatum commodi nemo enim? Distinctio laudantium est, fuga
          veritatis quia voluptas explicabo placeat hic blanditiis. Perspiciatis
          dolore fugiat modi inventore est, amet labore sunt dicta. Ratione,
          error. Aliquam, libero nostrum. Ad.
        </p>
      </div>
    </main>
  );
};

export default ProductsDetails;
