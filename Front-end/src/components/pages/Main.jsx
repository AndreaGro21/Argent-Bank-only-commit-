import iconMoney from "../../Assets/icon-money.webp"
import iconchat from "../../Assets/icon-chat.webp"
import iconSecurity from "../../Assets/icon-security.webp"
import FeatureIcon from "../FeatureIcon"
export default function Main() {

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        <FeatureIcon
          img={iconchat}
          titleHn="You are our #1 priority"
          desc="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
          icon="chat"
        />
        <FeatureIcon
          img={iconMoney}
          titleHn="More savings means higher rates"
          desc="  The more you save with us, the higher your interest rate will be!"
          icon="money"
        />
        <FeatureIcon
          img={iconSecurity}
          titleHn="Security you can trust"
          desc="We use top of the line encryption to make sure your data and money
          is always safe."
          icon="security"
        />
      </section>
    </main>
  )
}