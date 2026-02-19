# Weazel News Network

Official Los Santos News Portal.

## Reporter Workflow (Sanity CMS)

1.  **Access the Studio**: Navigate to `/studio` on the deployed site.
2.  **Create Dispatch**: Click on the "Article" type and click the Create icon (+).
3.  **Drafting**: Fill in the title, slug (auto-generate), category, and compose your report using the rich text editor.
4.  **Media & Tags**: Upload a high-resolution hero image and add relevant tags (e.g., #LSPD, #Vinewood).
5.  **Broadcast**: Click the green "Publish" button. The article will appear on the site according to the "Published at" time (Immediate or scheduled).

## Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Get this from Sanity.io Manage dashboard.
- `NEXT_PUBLIC_SANITY_DATASET`: Usually "production".
- `NEXT_PUBLIC_SANITY_API_VERSION`: "2024-02-19" (or latest).

## Inviting Reporters

1.  Go to [sanity.io/manage](https://www.sanity.io/manage)
2.  Select your project.
3.  Go to the "Users" tab.
4.  Invite new members and assign them the "Editor" or "Administrator" role.
