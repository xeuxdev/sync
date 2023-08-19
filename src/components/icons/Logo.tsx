"use client"
import { siteConfig } from "@/config/siteConfig"
import { useTheme } from "next-themes"
import Link from "next/link"

function Logo() {
  const { theme } = useTheme()

  return (
    <Link href={"/"} aria-label="Kanban" className="flex items-center gap-2">
      {theme === "dark" || theme === "system" ? (
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 33 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_10)">
            <path
              d="M4.25732 2H9.2224C9.44377 2.00001 9.66123 2.05829 9.85294 2.16897C10.0447 2.27966 10.2039 2.43886 10.3146 2.63057L16.7463 13.76C16.857 13.9517 17.0162 14.1109 17.2079 14.2216C17.3996 14.3323 17.6171 14.3905 17.8385 14.3905C18.0598 14.3905 18.2773 14.3323 18.469 14.2216C18.6607 14.1109 18.8199 13.9517 18.9306 13.76L25.3548 2.63057C25.4655 2.43886 25.6247 2.27966 25.8164 2.16897C26.0081 2.05829 26.2256 2.00001 26.447 2H31.4183C31.6397 2.00001 31.8572 2.05829 32.0489 2.16898C32.2406 2.27967 32.3998 2.43887 32.5105 2.63058C32.6212 2.8223 32.6794 3.03977 32.6794 3.26115C32.6794 3.48252 32.6212 3.69999 32.5105 3.8917L18.9331 27.4118C18.8224 27.6035 18.6632 27.7627 18.4715 27.8734C18.2798 27.984 18.0624 28.0423 17.841 28.0423C17.6196 28.0423 17.4022 27.984 17.2105 27.8734C17.0188 27.7627 16.8596 27.6035 16.7489 27.4118L3.16896 3.8917C3.05844 3.70027 3.00017 3.48314 3 3.26209C2.99983 3.04104 3.05777 2.82382 3.16801 2.63222C3.27824 2.44062 3.43691 2.28135 3.62809 2.17039C3.81928 2.05943 4.03627 2.00067 4.25732 2Z"
              fill="#1E1E1E"
            />
            <path
              d="M20.9247 10.5342L18.439 14.8372C18.3283 15.0289 18.1691 15.188 17.9774 15.2987C17.7857 15.4094 17.5682 15.4677 17.3468 15.4677C17.1255 15.4677 16.908 15.4094 16.7163 15.2987C16.5246 15.188 16.3654 15.0289 16.2547 14.8372L15.9344 14.2823C15.8237 14.0906 15.6645 13.9314 15.4728 13.8207C15.2811 13.71 15.0636 13.6517 14.8422 13.6517C14.6209 13.6517 14.4034 13.71 14.2117 13.8207C14.02 13.9314 13.8608 14.0906 13.7501 14.2823L7.32462 25.4117C7.21393 25.6035 7.05474 25.7627 6.86303 25.8733C6.67132 25.984 6.45385 26.0423 6.23248 26.0423H1.2611C1.03973 26.0423 0.822257 25.984 0.630545 25.8733C0.438833 25.7626 0.279635 25.6034 0.168952 25.4117C0.058268 25.22 -1.40592e-06 25.0025 0 24.7812C1.40603e-06 24.5598 0.0582735 24.3423 0.16896 24.1506L13.7463 0.63051C13.857 0.438809 14.0162 0.279621 14.2079 0.168944C14.3996 0.0582665 14.6171 0 14.8384 0C15.0598 0 15.2773 0.0582665 15.469 0.168944C15.6607 0.279621 15.8199 0.438809 15.9306 0.63051L20.9209 9.27304C21.0321 9.46443 21.0911 9.68173 21.0917 9.9031C21.0924 10.1245 21.0348 10.3421 20.9247 10.5342Z"
              fill="#00ADB5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_10">
              <rect width="33" height="29" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 33 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path
            d="M4.25735 1.99998H9.22243C9.4438 1.99999 9.66126 2.05827 9.85297 2.16895C10.0447 2.27964 10.2039 2.43884 10.3146 2.63055L16.7463 13.76C16.857 13.9517 17.0162 14.1109 17.2079 14.2216C17.3996 14.3323 17.6171 14.3905 17.8385 14.3905C18.0598 14.3905 18.2773 14.3323 18.469 14.2216C18.6607 14.1109 18.8199 13.9517 18.9306 13.76L25.3548 2.63055C25.4655 2.43884 25.6247 2.27964 25.8164 2.16895C26.0081 2.05827 26.2256 1.99999 26.447 1.99998H31.4183C31.6397 1.99999 31.8572 2.05827 32.0489 2.16896C32.2406 2.27965 32.3998 2.43885 32.5105 2.63056C32.6212 2.82228 32.6794 3.03975 32.6794 3.26113C32.6794 3.4825 32.6212 3.69997 32.5105 3.89168L18.9331 27.4118C18.8224 27.6035 18.6632 27.7627 18.4715 27.8734C18.2798 27.984 18.0624 28.0423 17.841 28.0423C17.6196 28.0423 17.4022 27.984 17.2105 27.8734C17.0188 27.7627 16.8596 27.6035 16.7489 27.4118L3.16899 3.89168C3.05847 3.70025 3.0002 3.48312 3.00003 3.26207C2.99986 3.04102 3.0578 2.8238 3.16804 2.6322C3.27827 2.4406 3.43694 2.28133 3.62812 2.17037C3.81931 2.05941 4.0363 2.00065 4.25735 1.99998Z"
            fill="#EEEEEE"
          />
          <path
            d="M20.9247 10.5342L18.439 14.8372C18.3283 15.0289 18.1691 15.188 17.9774 15.2987C17.7857 15.4094 17.5682 15.4677 17.3468 15.4677C17.1255 15.4677 16.908 15.4094 16.7163 15.2987C16.5246 15.188 16.3654 15.0289 16.2547 14.8372L15.9344 14.2823C15.8237 14.0906 15.6645 13.9314 15.4728 13.8207C15.2811 13.71 15.0636 13.6517 14.8422 13.6517C14.6209 13.6517 14.4034 13.71 14.2117 13.8207C14.02 13.9314 13.8608 14.0906 13.7501 14.2823L7.32462 25.4117C7.21393 25.6035 7.05474 25.7627 6.86303 25.8733C6.67132 25.984 6.45385 26.0423 6.23248 26.0423H1.2611C1.03973 26.0423 0.822257 25.984 0.630545 25.8733C0.438833 25.7626 0.279635 25.6034 0.168952 25.4117C0.058268 25.22 -1.40595e-06 25.0025 0 24.7812C1.406e-06 24.5598 0.0582735 24.3423 0.16896 24.1506L13.7463 0.63051C13.857 0.438809 14.0162 0.279621 14.2079 0.168944C14.3996 0.0582665 14.6171 0 14.8384 0C15.0598 0 15.2773 0.0582665 15.469 0.168944C15.6607 0.279621 15.8199 0.438809 15.9306 0.63051L20.9209 9.27304C21.0321 9.46443 21.0911 9.68173 21.0917 9.9031C21.0924 10.1245 21.0348 10.3421 20.9247 10.5342Z"
            fill="#00ADB5"
          />
        </svg>
      )}

      <span className="font-bold text-secondary">{siteConfig.name}</span>
    </Link>
  )
}

export default Logo
