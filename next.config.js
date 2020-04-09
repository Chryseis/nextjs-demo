const path=require('path')
const withLess=require('@zeit/next-less')
const withImages=require('next-images')

module.exports=withImages(withLess({
   inlineImageLimit: 16384,
   cssModules: true,
   cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
   },
   webpack(config, options){
      config.resolve.alias['@']=path.resolve(__dirname)
      return config
   }
}))