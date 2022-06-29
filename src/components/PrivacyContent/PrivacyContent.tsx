import cn from 'classnames';
import styles from './privacyContent.module.scss';

import Element from '../ElementAbsolute/ElementAbsolute';

const PrivacyContent = () => {
  return (
    <div className={styles.section}>
      <div className={cn('wrapper', styles.wrapper)}>
        <div className={styles.el1}>
          <Element color="yellow" />
        </div>
        <p>
          Protecting your private information is our priority. This Statement of
          Privacy applies to QuickNode.com and QuikNode Inc and governs data
          collection and usage. For the purposes of this Privacy Policy, unless
          otherwise noted, all references to QuikNode Inc include QuickNode.com
          and QuickNode. The QuickNode website is a blockchain infrastructure
          as-a-service site. By using the QuickNode website, you consent to the
          data practices described in this statement.
        </p>
        <h3>Rest API & Webhooks && GRPC methods.</h3>
        <p>
          In order to better provide you with products and services offered on
          our Site, QuickNode may collect personally identifiable information,
          such as your:
        </p>
        <ul>
          <li>First and Last</li>
          <li>E-mail Address</li>
          <li>Job Title</li>
        </ul>
        <p>
          If you purchase QuickNode’s products and services, we collect billing
          and credit card information. This information is used to complete the
          purchase transaction.
        </p>
        <p>
          QuickNode may also collect anonymous demographic information, which is
          not unique to you, such as your:
        </p>
        <ul>
          <li>Age</li>
          <li>Gender</li>
          <li>Location</li>
        </ul>
        <p>
          Please keep in mind that if you directly disclose personally
          identifiable information or personally sensitive data through
          QuickNode’s public message boards, this information may be collected
          and used by others.
        </p>
        <p>
          We do not collect any personal information about you unless you
          voluntarily provide it to us. However, you may be required to provide
          certain personal information to us when you elect to use certain
          products or services available on the Site. These may include: (a)
          registering for an account on our Site; (b) entering a event or
          contest sponsored by us or one of our partners; (c) signing up for
          special offers from selected third parties; (d) sending us an email
          message; (e) submitting your credit card or other payment information
          when ordering and purchasing products and services on our Site. To
          wit, we will use your information for, but not limited to,
          communicating with you in relation to services and/or products you
          have requested from us. We also may gather additional personal or
          non-personal information in the future.
        </p>
        <h3>2. Use of your Personal Information</h3>
        <p>
          QuickNode collects and uses your personal information to operate its
          website(s) and deliver the services you have requested. QuickNode may
          also use your personally identifiable information to inform you of
          other products or services available from QuickNode and its
          affiliates.
        </p>
        <h3>3. Sharing Information with Third Parties</h3>
        <p>
          QuickNode does not sell, rent or lease its customer lists to third
          parties. QuickNode may, from time to time, contact you on behalf of
          external business partners about a particular offering that may be of
          interest to you. In those cases, your unique personally identifiable
          information (e-mail, name, address, telephone number) is not
          transferred to the third party. QuickNode may share data with trusted
          partners to help perform statistical analysis, send you email or
          postal mail, provide customer support, or arrange for deliveries. All
          such third parties are prohibited from using your personal information
          except to provide these services to QuickNode, and they are required
          to maintain the confidentiality of your information.
        </p>
        <p>
          QuickNode may disclose your personal information, without notice, if
          required to do so by law or in the good faith belief that such action
          is necessary to: (a) conform to the edicts of the law or comply with
          legal process served on QuickNode or the site; (b) protect and defend
          the rights or property of QuickNode; and/or (c) act under exigent
          circumstances to protect the personal safety of users of QuickNode, or
          the public.
        </p>
        <h3>4. Tracking User Behavior</h3>
        <p>
          QuickNode may keep track of the websites and pages our users visit
          within QuickNode, in order to determine what QuickNode services are
          the most popular. This data is used to deliver customized content and
          advertising within QuickNode to customers whose behavior indicates
          that they are interested in a particular subject area.
        </p>
        <h3>5. Automatically Collected Information</h3>
        <p>
          Information about your computer hardware and software may be
          automatically collected by QuickNode. This information can include:
          your IP address, browser type, domain names, access times and
          referring website addresses. This information is used for the
          operation of the service, to maintain quality of the service, and to
          provide general statistics regarding use of the QuickNode website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyContent;
