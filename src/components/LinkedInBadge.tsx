import Script from "next/script";

export default function LinkedInBadge() {
  return (
    <div>
      {/* LinkedIn script */}
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />

      {/* Your LinkedIn badge */}
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="charles-njoroge-063b0626a"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://ke.linkedin.com/in/charles-njoroge-063b0626a?trk=profile-badge"
        >
          Charles Njoroge
        </a>
      </div>
    </div>
  );
}
