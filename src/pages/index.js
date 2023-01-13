import Link from "next/link"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import PoweredByStripeIcon from "../../public/static/assets/svg/Powered by Stripe - black.svg"
import Header from "../components/Header"
import { useNewObjectId } from "../hooks"

const HomePage = () => {
  const objectId = useNewObjectId()
  return (
    <>
      <Header />
      <Container>
        <section>
          <h1>Excel Parser</h1>
          <hr></hr>
          <div>
            ExcelParser is a no-code tool that helps you build automations for
            your Excel or CSV files, instead of writing VBA scripts
          </div>
          <div>
            <Link href="/scripts">View list of scripts</Link>
          </div>
          <div>
            {objectId && (
              <Link
                href={{
                  pathname: "/scripts/[script]",
                  query: { script: objectId },
                }}
              >
                Create your own script
              </Link>
            )}
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KlmelgsEcMc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        <section>
          <h2>In Development</h2>
          <hr></hr>
          <h3>More actions</h3>
          <div>
            If-then logic. Formatting. Data cleaning. De-duping. And more.
          </div>
          <h3>Design with intention</h3>
          <div>
            An uncluttered UI. Keyboard shortcuts. Tools you actually use, not a
            long list of 100 fuctions (though we will have those too).
          </div>
          <h3>xlsx support</h3>
          <div>
            Edit your .xlsx documents without having to convert ot CSV first.
          </div>
          <h3>Excel plugin</h3>
          <div>Run your scripts directly from Excel</div>
        </section>
        <section>
          <h2>Join our Slack community</h2>
          <hr></hr>
          <div>Join our ExcelParser Slack community with a $10 deposit.</div>
          <div>
            Discuss Excel problems + tips, and share what you&apos;re looking
            for in Excel automation
          </div>
          <div>
            Fully refundable anytime. Can be used as credits towards future
            ExcelParser subscription.
          </div>
          <Link href="https://buy.stripe.com/4gw17k879drh4owcMN">
            <Button>Deposit $10 to join</Button>
          </Link>
          <div>
            <PoweredByStripeIcon height={30} />
          </div>
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  return { props: {}, revalidate: 10 }
}

export default HomePage
