## Amplify configuration

Due to latest storybook versions, `next` is used for static pages generation (SSG). The problem is that Amplify detects `next` automatically configures it in SSR mode, which is different than SSG.

The solution is to manually change the Amplify App settings through CLI:

```sh
aws amplify update-app --app-id <APP_ID> --platform WEB --region <REGION>
aws amplify update-branch --app-id <APP_ID> --branch-name <BRANCH_NAME> --framework 'Next.js - SSG' --region <REGION>
```

## References:

- [https://github.com/aws-amplify/amplify-hosting/blob/main/FAQ.md#convert-an-ssr-app-to-ssg](https://github.com/aws-amplify/amplify-hosting/blob/main/FAQ.md#convert-an-ssr-app-to-ssg)
