import { NextPage } from 'next'
import {useEffect, useState} from 'react'

import HeadMeta from '@@/common/HeadMeta'
import Header from '@@/common/Header'
import Footer from '@@/common/Footer'
import Loading from '@@/pages/Home/Loading'

const Terms: NextPage = () => {
  const [display, setDisplay] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 2000)
  }, [])

  return (
    <>
      <Loading display={!display} />
      <div style={{ display: display ? 'block' : 'none' }}>
        <HeadMeta />
        <Header />
        <article className="web-terms">
          <h1>Terms of Service</h1>
          <p>
            Welcome to DERIFY (the "App"), an application developed by DERIVATION LAB LTD. (together with all affiliates,
            "DERIFY," "we," "us"). The App allows users to speculate price of certain digital tokens by aaccessing a
            variety of different smart contract protocols deployed on the Ethereum Blockchain and other applicable
            blockchains..
          </p>
          <p>
            This Terms of Service Agreement (the "Agreement") explains the terms and conditions that govern your access to
            and use of the App. Please read this Agreement carefully. By accessing the App, you accept and agree to be
            bound by and to comply with this Agreement, including the mandatory arbitration provision in Section 15. If
            you do not agree to the terms of this Agreement, you must not access or use the App.
          </p>
          <h2>1. ELIGIBILITY</h2>
          <p>
            To be eligible to access and use the App, you must not be barred from using the App under applicable laws. In
            addition, you must be able to form a legally binding contract online either on behalf of your company or as an
            individual.
          </p>
          <p>
            If you are agreeing this Agreement on behalf of a company or any other legal entity, you represent and
            warrants that you have the legal authority to have the company or legal entity to be bound by the terms of
            this Agreement, can form a legally binding contract online, and have the full right, power and authority to
            enter into and to comply with the obligations under this Agreement.
          </p>
          <p>
            Additionally, by accessing the App, you represent and warrant that you are not a citizen or resident of a
            state, country, territory or other jurisdiction where your use of the App would be illegal or otherwise
            violating any domestic or foreign law, rule, statute, or regulation (“Applicable Law”). Specifically, you
            represent and warrant that you are not a resident of United States, or a citizen or resident of a country that
            is embargoed by the United States.
          </p>
          <p>
            We may suspend, restrict or terminate your access to any or all of the features on the App, and/or block or
            bar any transactions of yours if: a) We are so required by a subpoena, court order, or binding order of a
            government authority, or under any applicable laws and regulations; b) You breach this Agreement, include but
            without limit to conducting any prohibited activities under this Agreement; c) We determine to do so for any
            legal or regulatory concerns at our sole discretion.
          </p>
          <h2>2. MODIFICATIONS TO THESE TERMS</h2>
          <p>
            We reserve the right, in our sole discretion, to modify this Agreement at any time. If we make changes, we
            will provide you with notice of such changes by sending an email, providing a notice through the App or
            updating the date at the top of this Agreement. Unless we specified otherwise in our notice, any modifications
            shall take effect immediately, and your will confirm your acceptance of the changes by continuing to use the
            App . If you do not agree to the amended Agreement, you must stop using the App.
          </p>
          <h2>3. PROPRIETARY RIGHTS</h2>
          <p>
            We do not claim any ownership rights in any content that users (including you) provide to be made available
            through the App (“User Content”). You agree that you own or have all rights, title, and interest, including
            all intellectual property rights, in any User Content you provide to us. You hereby grant us a worldwide,
            non-exclusive, royalty-free, sub-licensable, and transferable license to use, copy, distribute, create
            derivative works of, display, and perform any User Content that you upload, submit, store, or send on or
            through the App.
          </p>
          <p>
            Subject to the foregoing, we also own or is duly authorized to use all intellectual property and other rights
            in the App and its contents, including all text, images and trademarks displayed or provided on the App, and
            all App software. Unless expressly authorized by us, you may not copy, modify, adapt, rent, license, sell,
            publish, distribute, or otherwise permit any third party to access or use the App or any of its contents.
            Provided that you are eligible, and in consideration for your compliance with the terms of this Agreement, you
            are hereby granted a single, personal, limited license to access and use the App. This license is
            non-exclusive, non-transferable, and freely revocable by us at any time without notice or cause. Use of the
            App or its contents for any purpose that is not expressly permitted by this Agreement is strictly prohibited.
          </p>
          <p>
            Unlike the software and the App, the underlying smart contract protocols operating on the Ethereum Blockchain
            that facilitate your trades through the App are open source software.
          </p>
          <h2>4. DISCLOSURES; DISCLAIMERS</h2>
          <h3>4.1 WARRANTY DISCLAIMER</h3>
          <p>
            To the maximum extent permitted under Applicable Law, the App (and any of its content or functionality) is
            provided on an “AS IS” and “AS AVAILABLE” basis, and we expressly disclaim, and you hereby waive, any
            representations, conditions or warranties of any kind, whether express or implied, legal, statutory or
            otherwise, or arising from statute, otherwise in law, course of dealing, or usage of trade, including, without
            limitation, the implied or legal warranties and conditions of merchantability, merchantable quality, quality
            or fitness for a particular purpose, title, security, availability, reliability, accuracy, quiet enjoyment and
            non-infringement of third party rights. Without limiting the foregoing, we do not represent or warrant that
            the App (including any related data) will be uninterrupted, available at any particular time or error-free.
            Further, we do not warrant that errors in the App are correctable or will be corrected.
          </p>
          <h3>4.2 DISCLAIMER ABOUT INFORMATION ACCURACY</h3>
          <p>
            You are aware that we rely on third-party sources for information on the App and we have the right to choose,
            change and remove any third-party information source at our discretion. Some important information, including
            token price, is currently provided by third-party sources such as Oracles. We are not responsible for the
            quality, accuracy, timeliness, completeness or reliability of any of the digital token information on the App.
            You are obligated to collect sufficient information and keep yourself well informed before making any
            interactions with smart contracts on the App.
          </p>
          <h3>4.3 PAYMENTS AND FEES</h3>
          <p>
            Transactions and interactions on Ethereum or other block chains or any other decentralized infrastructure (the
            “Distributed Ledger Technology”) may require that you pay a fee, such as “gas” charges on the Ethereum
            network, for the computational resources required to perform a transaction or an interaction on the particular
            Distributed Ledger Technology (such payments and fees, “Charges”).
          </p>
          <p>
            You acknowledge and agree that DERIFY has no control over any Distributed Ledger Technology transactions, the
            method of payment of any Charges, or any actual payments of Charges, if applicable. Accordingly, you must
            ensure that you have a sufficient balance of the applicable Distributed Ledger Technology network tokens
            stored at your Distributed Ledger Technology-compatible wallet address (“Distributed Ledger Technology
            Address”) to complete any transaction on the Distributed Ledger Technology before initiating such transaction.
          </p>
          <h3>4.4 CUSTODY AND CONTROL OF DIGITAL TOKENS</h3>
          <p>
            You have full custody and control of the digital tokens in your digital wallets at all times. We do not
            custody your digital tokens and do not have access to, or retain the electronic private key of your digital
            wallet. As the owner and custodian of the digital tokens in your digital wallets, you shall bear all risk of
            loss of such digital tokens.
          </p>
          <p>
            You understand that DERIFY is not registered or licensed by the Commodity Futures Trading Commission,
            Securities and Exchange Commission, Financial Crimes Enforcement Network, or any financial regulatory
            authority, and that no financial regulatory authority has reviewed or approved the App. You further understand
            that DERIFY is not acting as an investment adviser or commodity trading adviser to any person, does not offer
            securities services in the United States or to U.S. persons, and that the contents of the App do not
            constitute advice or recommendations concerning any commodity, security or other asset.
          </p>
          <h3>4.5 RISKS ASSOCIATED WITH DIGITAL TOKENS</h3>
          <p>
            By accessing and using the App, you represent that you understand the inherent risks associated with the use
            of cryptographic and blockchain-based systems, and that you have sufficient knowledge of the usage and
            intricacies of digital tokens such as bitcoin (BTC), ether (ETH), and other digital tokens such as those
            following the Ethereum Token Standard (ERC-20). DERIFY does not control the underlying protocols of any
            digital tokens accessible on the App. You agree that we are not responsible for the operation, functionality
            or security of the underlying protocols and not liable for any loss of token value you may encounter due to
            any operating change, malfunction or failure of the underlying protocols.
          </p>
          <p>
            You further understand that the markets for these digital tokens are highly volatile, and that there are risks
            associated with digital tokens including (but not limited to) those related to adoption, speculation,
            technology, security, and regulation. You acknowledge that the cost and speed of transacting with
            cryptographic and blockchain-based systems such as Ethereum are variable and may increase dramatically at any
            time. You understand and agree to assume full responsibility for all of the risks of accessing and using the
            App and interacting with the Ethereum Blockchain and any other blockchains, and agree that DERIFY is not
            responsible for any loss you may experience as a result of these risks.
          </p>
          <p>
            You should be aware that anyone can create ERC20 tokens on Ethereum. We have no complete knowledge and make no
            representation about the nature, quality, or legal categorization of the token or associated project. You are
            solely responsible for for doing your own research as well as ensuring that you may legally interact with
            tokens in the jurisdiction where you reside.
          </p>
          <h2>5. TAXES</h2>
          <p>
            It is your sole responsibility to fulfill your tax obligations that apply to your transactions conducted on
            the App. You should withhold, collect, report and remit the correct amounts of taxes to the appropriate tax
            authorities. We make reasonable efforts to make your transaction history available through your account but we
            make no representation about the completeness or accuracy of that information.
          </p>
          <h2>6. CHANGES; SUSPENSION; TERMINATION</h2>
          <p>
            We may, at our sole discretion, at any time and with or without prior notice to you, modify, suspend or
            disable, temporarily or permanently, the App, in whole or in part, for any reason whatsoever, including, but
            not limited to, as a result of a security incident.
          </p>
          <p>
            We will not be liable for any losses suffered by you resulting from any modification to the App or from any
            suspension or termination, for any reason, of your access to all or any portion of the App.
          </p>
          <p>
            All of the terms of this Agreement will survive any termination of your access to the App regardless of the
            reasons for its expiration or termination, in addition to any other provision which by law or by its nature
            should survive.
          </p>
          <h2>7. ELECTRONIC NOTICES</h2>
          <p>
            You consent to receive all communications, agreements, documents, receipts, notices, and disclosures
            electronically (collectively, our “Communications”) that we provide in connection with this Agreement or the
            App. You agree that we may provide our Communications to you by posting them on the App. You may also contact
            our Legal team to request additional electronic copies of our Communications by sending a support request to
            contact@derify.org.
          </p>
          <h2>8. INDEMNIFICATION</h2>
          <p>
            You agree to hold harmless, release, defend, and indemnify us and our officers, directors, employees,
            contractors, agents, affiliates, and subsidiaries ("Protected Parties") from and against all claims, damages,
            obligations, losses, liabilities, costs and expenses arising from: (a) your access to and use of the App; (b)
            your violation of any term or condition of this Agreement, the right of any third party, or any other
            applicable law, rule, or regulation; and (c) any other party’s access and use of the App with your assistance
            or using any device or account that you own or control.
          </p>
          <h2>9. PROHIBITED ACTIVITIES</h2>
          <p>
            You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in
            relation to your access to or use of the App:
          </p>
          <h3>9.1 Intellectual Property Infringement</h3>
          <p>
            Activity that infringes or violates any person or entity’s copyright, trademark, service mark, patent, right
            of publicity, right of privacy, or other proprietary or intellectual property rights under the law.
          </p>
          <h3>9.2 Cyberattack</h3>
          <p>
            Activity that seeks to interfere with or compromise the integrity, security or proper functioning of any
            computer, server, network, personal device or other information technology system, including (but not limited
            to) the deployment of viruses and denial of service attacks.
          </p>
          <h3>9.3 Fraud or Misrepresentation</h3>
          <p>
            Activity that seeks to defraud us or any other person or entity, including (but not limited to) providing any
            false, inaccurate, or misleading information in order to unlawfully obtain the property of another.
          </p>
          <h3>9.4 Market Manipulation</h3>
          <p>
            Activity that violates any applicable law, rule, or regulation concerning the integrity of markets, including
            (but not limited to) the manipulative tactics commonly known as spoofing and wash trading.
          </p>
          <h3>9.5 Gambling</h3>
          <p>
            Activity that stakes or risks something of value upon the outcome of a contest of others, an event, or a game
            of chance, including without limitation to lotteries, bidding fee auctions, political betting, sports
            forecasting and sweepstakes.
          </p>
          <h3>9.6 Any Other Unlawful Conduct</h3>
          <p>
            Activity that violates any applicable law, rule, or regulation of the United States or another relevant
            jurisdiction, including (but not limited to) the restrictions and regulatory requirements imposed by U.S. law.
          </p>
          <h2>10. EXCLUSION OF CONSEQUENTIAL AND RELATED DAMAGES</h2>
          <p>
            In no event will DERIFY be liable for any incidental, indirect, special, punitive, exemplary, consequential or
            similar damages or liabilities whatsoever (including, without limitation, damages for loss of data,
            information, revenue, goodwill, profits or other business or financial benefit) arising out of or in
            connection with your use of the App, whether under contract, tort (including negligence), civil liability,
            statute, strict liability, breach of warranties, or under any other theory of liability, and whether or not
            DERIFY has been advised of, knew of or should have known of the possibility of such damages.
          </p>
          <h2>11. LIMITATION OF LIABILITY</h2>
          <p>
            In no event will DERIFY's aggregate liability arising out of or in connection with the App (and any of its
            content and functionality), any performance or non-performance of DERIFY, Distributed Ledger Technology
            tokens, other digital tokens, or any other product, service or other item provided in connection with the App,
            whether under contract, tort (including negligence), civil liability, statute, strict liability or other
            theory of liability exceed the amount of fees paid by you to us in the twelve (12) month period immediately
            preceding the event giving rise to the claim for liability.
          </p>
          <h2>12. RELEASE</h2>
          <p>
            To the extent permitted by applicable law, in consideration for being allowed to use the App, you hereby
            release and forever discharge DERIFY from, and hereby waive and relinquish, each and every past, present and
            future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every
            kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly
            or indirectly out of, or that relates directly or indirectly, to the App.
          </p>
          <h2>13. ASSIGNMENT</h2>
          <p>
            You may not assign any rights or licenses granted under this Agreement. We reserve the right to assign any
            rights and/or licenses under this Agreement without restriction, including but not limited to any DERIFY
            affiliates or subsidiaries or any successors of DERIFY’s business interests.
          </p>
          <h2>14. FORCE MAJEURE</h2>
          <p>
            We shall not be responsible for any delay or failure in performance of the App resulted directly or indirectly
            from any events or circumstances beyond our reasonable control, including but not limited to, natural
            disaster, civil unrest, terrorism, significant market volatility and failure of Internet services, equipment
            or software.
          </p>
          <h2>15. DISPUTE RESOLUTION AND ARBITRATION</h2>
          <p>
            Please read the following section carefully because it requires you to arbitrate certain disputes and claims
            with DERIFY and limits the manner in which you can seek relief from us, unless you opt out of arbitration by
            following the instructions set forth below. In addition, arbitration precludes you from suing in court or
            having a jury trial.
          </p>
          <p>
            You and DERIFY agree that any dispute arising out of or related to this Agreement is personal to you and
            DERIFY and that any dispute will be resolved solely through individual action, and will not be brought as a
            class arbitration, class action or any other type of representative proceeding.
          </p>
          <p>
            Except for small claims disputes in which you or DERIFY seeks to bring an individual action in small claims
            court located in the county or other applicable jurisdiction where you reside or disputes in which you or
            DERIFY seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, you
            and DERIFY waive your rights to a jury trial and to have any dispute arising out of or related to this
            Agreement or the App resolved in court. Instead, for any dispute or claim that you have against DERIFY or
            relating in any way to the Services, you agree to first contact DERIFY and attempt to resolve the claim
            informally by sending a written notice of your claim (“Notice”) to DERIFY by email at contact@derify.org. The
            Notice must include your name, residence address, email address, and telephone number, describe the nature and
            basis of the claim and set forth the specific relief sought. Our notice to you will be similar in form to that
            described above.
          </p>
          <p>
            Any dispute arising out of or in connection with this Agreement, including any question regarding its
            existence, validity or termination, shall be referred to and finally resolved by arbitration administered by
            the Singapore International Arbitration Centre (“SIAC”) in accordance with the Arbitration Rules of the
            Singapore International Arbitration Centre ("SIAC Rules") for the time being in force, which rules are deemed
            to be incorporated by reference in this clause. The seat of the arbitration shall be Singapore. The Tribunal
            shall consist of one arbitrator. The language of the arbitration shall be English or Chinese. To avoid any
            doubt, the federal arbitration act (the “FAA”) of the United States shall not apply.
          </p>
          <h2>16. GOVERNING LAW</h2>
          <p>
            The interpretation and enforcement of this Agreement, and any dispute related to this Agreement or the App,
            will be governed by and construed and enforced in accordance with the laws of the British Virgin Islands, as
            applicable, without regard to conflict of law rules or principles that would cause the application of the laws
            of any other jurisdiction.
          </p>
        </article>
        <Footer />
      </div>
    </>
  )
}

export default Terms
