  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>fastclick/lib/fastclick.js at master · ftlabs/fastclick</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="K/6t9RQb6iZ8xo5U9e3AgJVAy+gz5g2BPa356/PHuIM=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-6d375d1046b32bea385fa56df24f118470ed6540.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-b8e905cfa123eb3499cf3ff906fdad9eaeef556c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-e7a8476eedd3ddbcef6eb4c79f1866a513518d0a.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="5432253b5a6862741c76493385130299">

        <link data-pjax-transient rel='permalink' href='/ftlabs/fastclick/blob/5f4ee92b3961bb84ceb37ac02e5c59f7532cb5ea/lib/fastclick.js'>
    <meta property="og:title" content="fastclick"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/ftlabs/fastclick"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/782dd027d5a20fb3e5f97e04d1f580a6?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="fastclick - Polyfill to remove click delays on browsers with touch UIs"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="ftlabs/fastclick"/>

    <meta name="description" content="fastclick - Polyfill to remove click delays on browsers with touch UIs" />

  <link href="https://github.com/ftlabs/fastclick/commits/master.atom" rel="alternate" title="Recent Commits to fastclick:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="darkic7" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="cmdform">

    <input type="hidden" class="js-repository-name-with-owner" value="ftlabs/fastclick"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="b9706072d635a35dad03a580ac904d45cd93c95f"/>

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/darkic7" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/847212daf54a24eff2d7a546fca26bf0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> darkic7
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="mini-icon mini-icon-account-settings"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/ftlabs/fastclick/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="K/6t9RQb6iZ8xo5U9e3AgJVAy+gz5g2BPa356/PHuIM=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3428345" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/ftlabs/fastclick/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/ftlabs/fastclick/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/ftlabs/fastclick/stargazers">2,565</a>
    </li>

        <li>
          <a href="/ftlabs/fastclick/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/ftlabs/fastclick/network" class="social-count">196</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/ftlabs" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">ftlabs</span>
                  </a></span> /
                <strong><a href="/ftlabs/fastclick" class="js-current-repository">fastclick</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
      <li class="pulse-nav"><a href="/ftlabs/fastclick/pulse" highlight="pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/ftlabs/fastclick" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/ftlabs/fastclick/network" highlight="repo_network">Network</a></li>
    <li><a href="/ftlabs/fastclick/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/ftlabs/fastclick/issues" highlight="repo_issues">Issues <span class='counter'>16</span></a></li>



    <li><a href="/ftlabs/fastclick/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/ftlabs/fastclick/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">7</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/chrome-prevent/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="chrome-prevent" rel="nofollow" title="chrome-prevent">chrome-prevent</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/gh-pages/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/master/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.6.4/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.4" rel="nofollow" title="v0.6.4">v0.6.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.6.2/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.2" rel="nofollow" title="v0.6.2">v0.6.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.6.0/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.0" rel="nofollow" title="v0.6.0">v0.6.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.5.6/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.5.6" rel="nofollow" title="v0.5.6">v0.5.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.5.4/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.5.4" rel="nofollow" title="v0.5.4">v0.5.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.3.0/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.3.0" rel="nofollow" title="v0.3.0">v0.3.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ftlabs/fastclick/blob/v0.2.0/lib/fastclick.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.0" rel="nofollow" title="v0.2.0">v0.2.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/ftlabs/fastclick" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/ftlabs/fastclick/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/ftlabs/fastclick/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">3</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a42122dad0d1126013e693bb324d1c91 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:a42122dad0d1126013e693bb324d1c91 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ftlabs/fastclick" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">fastclick</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ftlabs/fastclick/tree/master/lib" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">fastclick.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="lib/fastclick.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/ftlabs/fastclick/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a618813a55497a791a76363755690df7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/mattcg" rel="author">mattcg</a></span>
    <time class="js-relative-date" datetime="2013-04-17T15:45:07-07:00" title="2013-04-17 15:45:07">April 17, 2013</time>
    <div class="commit-title">
        <a href="/ftlabs/fastclick/commit/9fa036249fd26bbdeeee130ca56704e4b858c272" class="message">Bump to 0.6.4</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>7</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="mattcg" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=mattcg"><img height="20" src="https://secure.gravatar.com/avatar/a618813a55497a791a76363755690df7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="bcamarda" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=bcamarda"><img height="20" src="https://secure.gravatar.com/avatar/67c5a5250b29cdfc5ca13661204c1c83?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="maxogden" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=maxogden"><img height="20" src="https://secure.gravatar.com/avatar/fcc9bbfe2a31c5a6225cc287ed7ae2a6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mohnish" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=mohnish"><img height="20" src="https://secure.gravatar.com/avatar/2b17eacef8c3f22ddc6e56389f1b2140?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rowanbeentje" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=rowanbeentje"><img height="20" src="https://secure.gravatar.com/avatar/6c7c3006da8dad88a29459f7820e154d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kpdecker" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=kpdecker"><img height="20" src="https://secure.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vivekjain10" href="/ftlabs/fastclick/commits/master/lib/fastclick.js?author=vivekjain10"><img height="20" src="https://secure.gravatar.com/avatar/95645413b56928d3fe0df0a6c951229d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a618813a55497a791a76363755690df7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mattcg">mattcg</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/67c5a5250b29cdfc5ca13661204c1c83?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bcamarda">bcamarda</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fcc9bbfe2a31c5a6225cc287ed7ae2a6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/maxogden">maxogden</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2b17eacef8c3f22ddc6e56389f1b2140?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mohnish">mohnish</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6c7c3006da8dad88a29459f7820e154d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rowanbeentje">rowanbeentje</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kpdecker">kpdecker</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/95645413b56928d3fe0df0a6c951229d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/vivekjain10">vivekjain10</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/ftlabs/fastclick/blob/5f4ee92b3961bb84ceb37ac02e5c59f7532cb5ea/lib/fastclick.js" data-title="fastclick/lib/fastclick.js at master · ftlabs/fastclick · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>704 lines (563 sloc)</span>
                <span>20.413 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/ftlabs/fastclick/edit/master/lib/fastclick.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/ftlabs/fastclick/raw/master/lib/fastclick.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/ftlabs/fastclick/blame/master/lib/fastclick.js" class="button minibutton ">Blame</a>
                  <a href="/ftlabs/fastclick/commits/master/lib/fastclick.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * @version 0.6.4</span></div><div class='line' id='LC5'><span class="cm"> * @codingstandard ftlabs-jsv2</span></div><div class='line' id='LC6'><span class="cm"> * @copyright The Financial Times Limited [All Rights Reserved]</span></div><div class='line' id='LC7'><span class="cm"> * @license MIT License (see LICENSE.txt)</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">/*jslint browser:true, node:true*/</span></div><div class='line' id='LC11'><span class="cm">/*global define, Event, Node*/</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">/**</span></div><div class='line' id='LC15'><span class="cm"> * Instantiate fast-clicking listeners on the specificed layer.</span></div><div class='line' id='LC16'><span class="cm"> *</span></div><div class='line' id='LC17'><span class="cm"> * @constructor</span></div><div class='line' id='LC18'><span class="cm"> * @param {Element} layer The layer to listen on</span></div><div class='line' id='LC19'><span class="cm"> */</span></div><div class='line' id='LC20'><span class="kd">function</span> <span class="nx">FastClick</span><span class="p">(</span><span class="nx">layer</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC22'>	<span class="kd">var</span> <span class="nx">oldOnClick</span><span class="p">,</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>	<span class="cm">/**</span></div><div class='line' id='LC26'><span class="cm">	 * Whether a click is currently being tracked.</span></div><div class='line' id='LC27'><span class="cm">	 *</span></div><div class='line' id='LC28'><span class="cm">	 * @type boolean</span></div><div class='line' id='LC29'><span class="cm">	 */</span></div><div class='line' id='LC30'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>	<span class="cm">/**</span></div><div class='line' id='LC34'><span class="cm">	 * Timestamp for when when click tracking started.</span></div><div class='line' id='LC35'><span class="cm">	 *</span></div><div class='line' id='LC36'><span class="cm">	 * @type number</span></div><div class='line' id='LC37'><span class="cm">	 */</span></div><div class='line' id='LC38'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClickStart</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>	<span class="cm">/**</span></div><div class='line' id='LC42'><span class="cm">	 * The element being tracked for a click.</span></div><div class='line' id='LC43'><span class="cm">	 *</span></div><div class='line' id='LC44'><span class="cm">	 * @type EventTarget</span></div><div class='line' id='LC45'><span class="cm">	 */</span></div><div class='line' id='LC46'>	<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="cm">/**</span></div><div class='line' id='LC50'><span class="cm">	 * X-coordinate of touch start event.</span></div><div class='line' id='LC51'><span class="cm">	 *</span></div><div class='line' id='LC52'><span class="cm">	 * @type number</span></div><div class='line' id='LC53'><span class="cm">	 */</span></div><div class='line' id='LC54'>	<span class="k">this</span><span class="p">.</span><span class="nx">touchStartX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>	<span class="cm">/**</span></div><div class='line' id='LC58'><span class="cm">	 * Y-coordinate of touch start event.</span></div><div class='line' id='LC59'><span class="cm">	 *</span></div><div class='line' id='LC60'><span class="cm">	 * @type number</span></div><div class='line' id='LC61'><span class="cm">	 */</span></div><div class='line' id='LC62'>	<span class="k">this</span><span class="p">.</span><span class="nx">touchStartY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>	<span class="cm">/**</span></div><div class='line' id='LC66'><span class="cm">	 * ID of the last touch, retrieved from Touch.identifier.</span></div><div class='line' id='LC67'><span class="cm">	 *</span></div><div class='line' id='LC68'><span class="cm">	 * @type number</span></div><div class='line' id='LC69'><span class="cm">	 */</span></div><div class='line' id='LC70'>	<span class="k">this</span><span class="p">.</span><span class="nx">lastTouchIdentifier</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	<span class="cm">/**</span></div><div class='line' id='LC74'><span class="cm">	 * The FastClick layer.</span></div><div class='line' id='LC75'><span class="cm">	 *</span></div><div class='line' id='LC76'><span class="cm">	 * @type Element</span></div><div class='line' id='LC77'><span class="cm">	 */</span></div><div class='line' id='LC78'>	<span class="k">this</span><span class="p">.</span><span class="nx">layer</span> <span class="o">=</span> <span class="nx">layer</span><span class="p">;</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">layer</span> <span class="o">||</span> <span class="o">!</span><span class="nx">layer</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>		<span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="s1">&#39;Layer must be a document node&#39;</span><span class="p">);</span></div><div class='line' id='LC82'>	<span class="p">}</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>	<span class="cm">/** @type function() */</span></div><div class='line' id='LC85'>	<span class="k">this</span><span class="p">.</span><span class="nx">onClick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onClick</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>	<span class="cm">/** @type function() */</span></div><div class='line' id='LC88'>	<span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>	<span class="cm">/** @type function() */</span></div><div class='line' id='LC91'>	<span class="k">this</span><span class="p">.</span><span class="nx">onTouchStart</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTouchStart</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>	<span class="cm">/** @type function() */</span></div><div class='line' id='LC94'>	<span class="k">this</span><span class="p">.</span><span class="nx">onTouchEnd</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTouchEnd</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>	<span class="cm">/** @type function() */</span></div><div class='line' id='LC97'>	<span class="k">this</span><span class="p">.</span><span class="nx">onTouchCancel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTouchCancel</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>	<span class="k">if</span> <span class="p">(</span><span class="nx">FastClick</span><span class="p">.</span><span class="nx">notNeeded</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC100'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC101'>	<span class="p">}</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>	<span class="c1">// Set up event handlers as required</span></div><div class='line' id='LC104'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsAndroid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC105'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;mouseover&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC106'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;mousedown&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC107'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;mouseup&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC108'>	<span class="p">}</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onClick</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC111'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;touchstart&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onTouchStart</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC112'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;touchend&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onTouchEnd</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC113'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;touchcancel&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onTouchCancel</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>	<span class="c1">// Hack is required for browsers that don&#39;t support Event#stopImmediatePropagation (e.g. Android 2)</span></div><div class='line' id='LC116'>	<span class="c1">// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick</span></div><div class='line' id='LC117'>	<span class="c1">// layer when they are cancelled.</span></div><div class='line' id='LC118'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">Event</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">stopImmediatePropagation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">capture</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>			<span class="kd">var</span> <span class="nx">rmv</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">;</span></div><div class='line' id='LC121'>			<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;click&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>				<span class="nx">rmv</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">layer</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">hijacked</span> <span class="o">||</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">capture</span><span class="p">);</span></div><div class='line' id='LC123'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'>				<span class="nx">rmv</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">layer</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">capture</span><span class="p">);</span></div><div class='line' id='LC125'>			<span class="p">}</span></div><div class='line' id='LC126'>		<span class="p">};</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">capture</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC129'>			<span class="kd">var</span> <span class="nx">adv</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">;</span></div><div class='line' id='LC130'>			<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;click&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>				<span class="nx">adv</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">layer</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">hijacked</span> <span class="o">||</span> <span class="p">(</span><span class="nx">callback</span><span class="p">.</span><span class="nx">hijacked</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">propagationStopped</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>						<span class="nx">callback</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC134'>					<span class="p">}</span></div><div class='line' id='LC135'>				<span class="p">}),</span> <span class="nx">capture</span><span class="p">);</span></div><div class='line' id='LC136'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC137'>				<span class="nx">adv</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">layer</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">capture</span><span class="p">);</span></div><div class='line' id='LC138'>			<span class="p">}</span></div><div class='line' id='LC139'>		<span class="p">};</span></div><div class='line' id='LC140'>	<span class="p">}</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>	<span class="c1">// If a handler is already declared in the element&#39;s onclick attribute, it will be fired before</span></div><div class='line' id='LC143'>	<span class="c1">// FastClick&#39;s onClick handler. Fix this by pulling out the user-defined handler function and</span></div><div class='line' id='LC144'>	<span class="c1">// adding it as listener.</span></div><div class='line' id='LC145'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">layer</span><span class="p">.</span><span class="nx">onclick</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>		<span class="c1">// Android browser on at least 3.2 requires a new reference to the function in layer.onclick</span></div><div class='line' id='LC148'>		<span class="c1">// - the old one won&#39;t work if passed to addEventListener directly.</span></div><div class='line' id='LC149'>		<span class="nx">oldOnClick</span> <span class="o">=</span> <span class="nx">layer</span><span class="p">.</span><span class="nx">onclick</span><span class="p">;</span></div><div class='line' id='LC150'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>			<span class="nx">oldOnClick</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC152'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC153'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">onclick</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC154'>	<span class="p">}</span></div><div class='line' id='LC155'><span class="p">}</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'><span class="cm">/**</span></div><div class='line' id='LC159'><span class="cm"> * Android requires exceptions.</span></div><div class='line' id='LC160'><span class="cm"> *</span></div><div class='line' id='LC161'><span class="cm"> * @type boolean</span></div><div class='line' id='LC162'><span class="cm"> */</span></div><div class='line' id='LC163'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsAndroid</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;Android&#39;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'><span class="cm">/**</span></div><div class='line' id='LC167'><span class="cm"> * iOS requires exceptions.</span></div><div class='line' id='LC168'><span class="cm"> *</span></div><div class='line' id='LC169'><span class="cm"> * @type boolean</span></div><div class='line' id='LC170'><span class="cm"> */</span></div><div class='line' id='LC171'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">=</span> <span class="sr">/iP(ad|hone|od)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><span class="cm">/**</span></div><div class='line' id='LC175'><span class="cm"> * iOS 4 requires an exception for select elements.</span></div><div class='line' id='LC176'><span class="cm"> *</span></div><div class='line' id='LC177'><span class="cm"> * @type boolean</span></div><div class='line' id='LC178'><span class="cm"> */</span></div><div class='line' id='LC179'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsIOS4</span> <span class="o">=</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="sr">/OS 4_\d(_\d)?/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'><span class="cm">/**</span></div><div class='line' id='LC183'><span class="cm"> * iOS 6.0(+?) requires the target element to be manually derived</span></div><div class='line' id='LC184'><span class="cm"> *</span></div><div class='line' id='LC185'><span class="cm"> * @type boolean</span></div><div class='line' id='LC186'><span class="cm"> */</span></div><div class='line' id='LC187'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsIOSWithBadTarget</span> <span class="o">=</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="sr">/OS ([6-9]|\d{2})_\d/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'><span class="cm">/**</span></div><div class='line' id='LC191'><span class="cm"> * Determine whether a given element requires a native click.</span></div><div class='line' id='LC192'><span class="cm"> *</span></div><div class='line' id='LC193'><span class="cm"> * @param {EventTarget|Element} target Target DOM element</span></div><div class='line' id='LC194'><span class="cm"> * @returns {boolean} Returns true if the element needs a native click</span></div><div class='line' id='LC195'><span class="cm"> */</span></div><div class='line' id='LC196'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">needsClick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC198'>	<span class="kd">var</span> <span class="nx">nodeName</span> <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>	<span class="k">if</span> <span class="p">(</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="s1">&#39;button&#39;</span> <span class="o">||</span> <span class="nx">nodeName</span> <span class="o">===</span> <span class="s1">&#39;input&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>		<span class="c1">// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)</span></div><div class='line' id='LC203'>		<span class="c1">// Don&#39;t send a synthetic click to disabled inputs (issue #62)</span></div><div class='line' id='LC204'>		<span class="k">if</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;file&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">target</span><span class="p">.</span><span class="nx">disabled</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC206'>		<span class="p">}</span>		</div><div class='line' id='LC207'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="s1">&#39;label&#39;</span> <span class="o">||</span> <span class="nx">nodeName</span> <span class="o">===</span> <span class="s1">&#39;video&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC209'>	<span class="p">}</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>	<span class="k">return</span> <span class="p">(</span><span class="sr">/\bneedsclick\b/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">className</span><span class="p">);</span></div><div class='line' id='LC212'><span class="p">};</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'><span class="cm">/**</span></div><div class='line' id='LC216'><span class="cm"> * Determine whether a given element requires a call to focus to simulate click into element.</span></div><div class='line' id='LC217'><span class="cm"> *</span></div><div class='line' id='LC218'><span class="cm"> * @param {EventTarget|Element} target Target DOM element</span></div><div class='line' id='LC219'><span class="cm"> * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.</span></div><div class='line' id='LC220'><span class="cm"> */</span></div><div class='line' id='LC221'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">needsFocus</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC223'>	<span class="k">switch</span> <span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC224'>	<span class="k">case</span> <span class="s1">&#39;textarea&#39;</span><span class="o">:</span></div><div class='line' id='LC225'>	<span class="k">case</span> <span class="s1">&#39;select&#39;</span><span class="o">:</span></div><div class='line' id='LC226'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC227'>	<span class="k">case</span> <span class="s1">&#39;input&#39;</span><span class="o">:</span></div><div class='line' id='LC228'>		<span class="k">switch</span> <span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>		<span class="k">case</span> <span class="s1">&#39;button&#39;</span><span class="o">:</span></div><div class='line' id='LC230'>		<span class="k">case</span> <span class="s1">&#39;checkbox&#39;</span><span class="o">:</span></div><div class='line' id='LC231'>		<span class="k">case</span> <span class="s1">&#39;file&#39;</span><span class="o">:</span></div><div class='line' id='LC232'>		<span class="k">case</span> <span class="s1">&#39;image&#39;</span><span class="o">:</span></div><div class='line' id='LC233'>		<span class="k">case</span> <span class="s1">&#39;radio&#39;</span><span class="o">:</span></div><div class='line' id='LC234'>		<span class="k">case</span> <span class="s1">&#39;submit&#39;</span><span class="o">:</span></div><div class='line' id='LC235'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC236'>		<span class="p">}</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>		<span class="c1">// No point in attempting to focus disabled inputs</span></div><div class='line' id='LC239'>		<span class="k">return</span> <span class="o">!</span><span class="nx">target</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">target</span><span class="p">.</span><span class="nx">readOnly</span><span class="p">;</span></div><div class='line' id='LC240'>	<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC241'>		<span class="k">return</span> <span class="p">(</span><span class="sr">/\bneedsfocus\b/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">className</span><span class="p">);</span></div><div class='line' id='LC242'>	<span class="p">}</span></div><div class='line' id='LC243'><span class="p">};</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="cm">/**</span></div><div class='line' id='LC247'><span class="cm"> * Send a click event to the specified element.</span></div><div class='line' id='LC248'><span class="cm"> *</span></div><div class='line' id='LC249'><span class="cm"> * @param {EventTarget|Element} targetElement</span></div><div class='line' id='LC250'><span class="cm"> * @param {Event} event</span></div><div class='line' id='LC251'><span class="cm"> */</span></div><div class='line' id='LC252'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sendClick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC254'>	<span class="kd">var</span> <span class="nx">clickEvent</span><span class="p">,</span> <span class="nx">touch</span><span class="p">;</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>	<span class="c1">// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)</span></div><div class='line' id='LC257'>	<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span> <span class="o">!==</span> <span class="nx">targetElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>		<span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">.</span><span class="nx">blur</span><span class="p">();</span></div><div class='line' id='LC259'>	<span class="p">}</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>	<span class="nx">touch</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>	<span class="c1">// Synthesise a click event, with an extra attribute so it can be tracked</span></div><div class='line' id='LC264'>	<span class="nx">clickEvent</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span><span class="s1">&#39;MouseEvents&#39;</span><span class="p">);</span></div><div class='line' id='LC265'>	<span class="nx">clickEvent</span><span class="p">.</span><span class="nx">initMouseEvent</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="nb">window</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">screenX</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">screenY</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">clientX</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">clientY</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC266'>	<span class="nx">clickEvent</span><span class="p">.</span><span class="nx">forwardedTouchEvent</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC267'>	<span class="nx">targetElement</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">clickEvent</span><span class="p">);</span></div><div class='line' id='LC268'><span class="p">};</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'><span class="cm">/**</span></div><div class='line' id='LC272'><span class="cm"> * @param {EventTarget|Element} targetElement</span></div><div class='line' id='LC273'><span class="cm"> */</span></div><div class='line' id='LC274'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">focus</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC276'>	<span class="kd">var</span> <span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">&amp;&amp;</span> <span class="nx">targetElement</span><span class="p">.</span><span class="nx">setSelectionRange</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>		<span class="nx">length</span> <span class="o">=</span> <span class="nx">targetElement</span><span class="p">.</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC280'>		<span class="nx">targetElement</span><span class="p">.</span><span class="nx">setSelectionRange</span><span class="p">(</span><span class="nx">length</span><span class="p">,</span> <span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC281'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC282'>		<span class="nx">targetElement</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC283'>	<span class="p">}</span></div><div class='line' id='LC284'><span class="p">};</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'><span class="cm">/**</span></div><div class='line' id='LC288'><span class="cm"> * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.</span></div><div class='line' id='LC289'><span class="cm"> *</span></div><div class='line' id='LC290'><span class="cm"> * @param {EventTarget|Element} targetElement</span></div><div class='line' id='LC291'><span class="cm"> */</span></div><div class='line' id='LC292'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">updateScrollParent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC294'>	<span class="kd">var</span> <span class="nx">scrollParent</span><span class="p">,</span> <span class="nx">parentElement</span><span class="p">;</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>	<span class="nx">scrollParent</span> <span class="o">=</span> <span class="nx">targetElement</span><span class="p">.</span><span class="nx">fastClickScrollParent</span><span class="p">;</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>	<span class="c1">// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the</span></div><div class='line' id='LC299'>	<span class="c1">// target element was moved to another parent.</span></div><div class='line' id='LC300'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">scrollParent</span> <span class="o">||</span> <span class="o">!</span><span class="nx">scrollParent</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC301'>		<span class="nx">parentElement</span> <span class="o">=</span> <span class="nx">targetElement</span><span class="p">;</span></div><div class='line' id='LC302'>		<span class="k">do</span> <span class="p">{</span></div><div class='line' id='LC303'>			<span class="k">if</span> <span class="p">(</span><span class="nx">parentElement</span><span class="p">.</span><span class="nx">scrollHeight</span> <span class="o">&gt;</span> <span class="nx">parentElement</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC304'>				<span class="nx">scrollParent</span> <span class="o">=</span> <span class="nx">parentElement</span><span class="p">;</span></div><div class='line' id='LC305'>				<span class="nx">targetElement</span><span class="p">.</span><span class="nx">fastClickScrollParent</span> <span class="o">=</span> <span class="nx">parentElement</span><span class="p">;</span></div><div class='line' id='LC306'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC307'>			<span class="p">}</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>			<span class="nx">parentElement</span> <span class="o">=</span> <span class="nx">parentElement</span><span class="p">.</span><span class="nx">parentElement</span><span class="p">;</span></div><div class='line' id='LC310'>		<span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">parentElement</span><span class="p">);</span></div><div class='line' id='LC311'>	<span class="p">}</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>	<span class="c1">// Always update the scroll top tracker if possible.</span></div><div class='line' id='LC314'>	<span class="k">if</span> <span class="p">(</span><span class="nx">scrollParent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC315'>		<span class="nx">scrollParent</span><span class="p">.</span><span class="nx">fastClickLastScrollTop</span> <span class="o">=</span> <span class="nx">scrollParent</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">;</span></div><div class='line' id='LC316'>	<span class="p">}</span></div><div class='line' id='LC317'><span class="p">};</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'><span class="cm">/**</span></div><div class='line' id='LC321'><span class="cm"> * @param {EventTarget} targetElement</span></div><div class='line' id='LC322'><span class="cm"> * @returns {Element|EventTarget}</span></div><div class='line' id='LC323'><span class="cm"> */</span></div><div class='line' id='LC324'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getTargetElementFromEventTarget</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">eventTarget</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>	<span class="c1">// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.</span></div><div class='line' id='LC328'>	<span class="k">if</span> <span class="p">(</span><span class="nx">eventTarget</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">TEXT_NODE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>		<span class="k">return</span> <span class="nx">eventTarget</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC330'>	<span class="p">}</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>	<span class="k">return</span> <span class="nx">eventTarget</span><span class="p">;</span></div><div class='line' id='LC333'><span class="p">};</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'><span class="cm">/**</span></div><div class='line' id='LC337'><span class="cm"> * On touch start, record the position and scroll offset.</span></div><div class='line' id='LC338'><span class="cm"> *</span></div><div class='line' id='LC339'><span class="cm"> * @param {Event} event</span></div><div class='line' id='LC340'><span class="cm"> * @returns {boolean}</span></div><div class='line' id='LC341'><span class="cm"> */</span></div><div class='line' id='LC342'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTouchStart</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC343'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC344'>	<span class="kd">var</span> <span class="nx">targetElement</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">selection</span><span class="p">;</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>	<span class="nx">targetElement</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getTargetElementFromEventTarget</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC347'>	<span class="nx">touch</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">targetTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'>		<span class="c1">// Only trusted events will deselect text on iOS (issue #49)</span></div><div class='line' id='LC352'>		<span class="nx">selection</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">getSelection</span><span class="p">();</span></div><div class='line' id='LC353'>		<span class="k">if</span> <span class="p">(</span><span class="nx">selection</span><span class="p">.</span><span class="nx">rangeCount</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">selection</span><span class="p">.</span><span class="nx">isCollapsed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC354'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC355'>		<span class="p">}</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>			<span class="c1">// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):</span></div><div class='line' id='LC360'>			<span class="c1">// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched</span></div><div class='line' id='LC361'>			<span class="c1">// with the same identifier as the touch event that previously triggered the click that triggered the alert.</span></div><div class='line' id='LC362'>			<span class="c1">// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an</span></div><div class='line' id='LC363'>			<span class="c1">// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.</span></div><div class='line' id='LC364'>			<span class="k">if</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">identifier</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastTouchIdentifier</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC365'>				<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC366'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC367'>			<span class="p">}</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>			<span class="k">this</span><span class="p">.</span><span class="nx">lastTouchIdentifier</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">identifier</span><span class="p">;</span></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'>			<span class="c1">// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:</span></div><div class='line' id='LC372'>			<span class="c1">// 1) the user does a fling scroll on the scrollable layer</span></div><div class='line' id='LC373'>			<span class="c1">// 2) the user stops the fling scroll with another tap</span></div><div class='line' id='LC374'>			<span class="c1">// then the event.target of the last &#39;touchend&#39; event will be the element that was under the user&#39;s finger</span></div><div class='line' id='LC375'>			<span class="c1">// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check</span></div><div class='line' id='LC376'>			<span class="c1">// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).</span></div><div class='line' id='LC377'>			<span class="k">this</span><span class="p">.</span><span class="nx">updateScrollParent</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">);</span></div><div class='line' id='LC378'>		<span class="p">}</span></div><div class='line' id='LC379'>	<span class="p">}</span></div><div class='line' id='LC380'><br/></div><div class='line' id='LC381'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC382'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClickStart</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">;</span></div><div class='line' id='LC383'>	<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="nx">targetElement</span><span class="p">;</span></div><div class='line' id='LC384'><br/></div><div class='line' id='LC385'>	<span class="k">this</span><span class="p">.</span><span class="nx">touchStartX</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC386'>	<span class="k">this</span><span class="p">.</span><span class="nx">touchStartY</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC387'><br/></div><div class='line' id='LC388'>	<span class="c1">// Prevent phantom clicks on fast double-tap (issue #36)</span></div><div class='line' id='LC389'>	<span class="k">if</span> <span class="p">((</span><span class="nx">event</span><span class="p">.</span><span class="nx">timeStamp</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastClickTime</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC390'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC391'>	<span class="p">}</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC394'><span class="p">};</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'><span class="cm">/**</span></div><div class='line' id='LC398'><span class="cm"> * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.</span></div><div class='line' id='LC399'><span class="cm"> *</span></div><div class='line' id='LC400'><span class="cm"> * @param {Event} event</span></div><div class='line' id='LC401'><span class="cm"> * @returns {boolean}</span></div><div class='line' id='LC402'><span class="cm"> */</span></div><div class='line' id='LC403'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">touchHasMoved</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC405'>	<span class="kd">var</span> <span class="nx">touch</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'>	<span class="k">if</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">touchStartX</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">10</span> <span class="o">||</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">touchStartY</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">10</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC408'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC409'>	<span class="p">}</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC412'><span class="p">};</span></div><div class='line' id='LC413'><br/></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'><span class="cm">/**</span></div><div class='line' id='LC416'><span class="cm"> * Attempt to find the labelled control for the given label element.</span></div><div class='line' id='LC417'><span class="cm"> *</span></div><div class='line' id='LC418'><span class="cm"> * @param {EventTarget|HTMLLabelElement} labelElement</span></div><div class='line' id='LC419'><span class="cm"> * @returns {Element|null}</span></div><div class='line' id='LC420'><span class="cm"> */</span></div><div class='line' id='LC421'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">findControl</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">labelElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC422'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>	<span class="c1">// Fast path for newer browsers supporting the HTML5 control attribute</span></div><div class='line' id='LC425'>	<span class="k">if</span> <span class="p">(</span><span class="nx">labelElement</span><span class="p">.</span><span class="nx">control</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC426'>		<span class="k">return</span> <span class="nx">labelElement</span><span class="p">.</span><span class="nx">control</span><span class="p">;</span></div><div class='line' id='LC427'>	<span class="p">}</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>	<span class="c1">// All browsers under test that support touch events also support the HTML5 htmlFor attribute</span></div><div class='line' id='LC430'>	<span class="k">if</span> <span class="p">(</span><span class="nx">labelElement</span><span class="p">.</span><span class="nx">htmlFor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>		<span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">labelElement</span><span class="p">.</span><span class="nx">htmlFor</span><span class="p">);</span></div><div class='line' id='LC432'>	<span class="p">}</span></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>	<span class="c1">// If no for attribute exists, attempt to retrieve the first labellable descendant element</span></div><div class='line' id='LC435'>	<span class="c1">// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label</span></div><div class='line' id='LC436'>	<span class="k">return</span> <span class="nx">labelElement</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">&#39;button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea&#39;</span><span class="p">);</span></div><div class='line' id='LC437'><span class="p">};</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'><span class="cm">/**</span></div><div class='line' id='LC441'><span class="cm"> * On touch end, determine whether to send a click event at once.</span></div><div class='line' id='LC442'><span class="cm"> *</span></div><div class='line' id='LC443'><span class="cm"> * @param {Event} event</span></div><div class='line' id='LC444'><span class="cm"> * @returns {boolean}</span></div><div class='line' id='LC445'><span class="cm"> */</span></div><div class='line' id='LC446'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTouchEnd</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC447'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC448'>	<span class="kd">var</span> <span class="nx">forElement</span><span class="p">,</span> <span class="nx">trackingClickStart</span><span class="p">,</span> <span class="nx">targetTagName</span><span class="p">,</span> <span class="nx">scrollParent</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">targetElement</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span><span class="p">;</span></div><div class='line' id='LC449'><br/></div><div class='line' id='LC450'>	<span class="c1">// If the touch has moved, cancel the click tracking</span></div><div class='line' id='LC451'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">touchHasMoved</span><span class="p">(</span><span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC452'>		<span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC453'>		<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC454'>	<span class="p">}</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC457'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC458'>	<span class="p">}</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>	<span class="c1">// Prevent phantom clicks on fast double-tap (issue #36)</span></div><div class='line' id='LC461'>	<span class="k">if</span> <span class="p">((</span><span class="nx">event</span><span class="p">.</span><span class="nx">timeStamp</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastClickTime</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC462'>		<span class="k">this</span><span class="p">.</span><span class="nx">cancelNextClick</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC463'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC464'>	<span class="p">}</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>	<span class="k">this</span><span class="p">.</span><span class="nx">lastClickTime</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">;</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>	<span class="nx">trackingClickStart</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">trackingClickStart</span><span class="p">;</span></div><div class='line' id='LC469'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC470'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClickStart</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC471'><br/></div><div class='line' id='LC472'>	<span class="c1">// On some iOS devices, the targetElement supplied with the event is invalid if the layer</span></div><div class='line' id='LC473'>	<span class="c1">// is performing a transition or scroll, and has to be re-detected manually. Note that</span></div><div class='line' id='LC474'>	<span class="c1">// for this to function correctly, it must be called *after* the event target is checked!</span></div><div class='line' id='LC475'>	<span class="c1">// See issue #57; also filed as rdar://13048589 .</span></div><div class='line' id='LC476'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOSWithBadTarget</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC477'>		<span class="nx">touch</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC478'>		<span class="nx">targetElement</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">elementFromPoint</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nb">window</span><span class="p">.</span><span class="nx">pageXOffset</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nb">window</span><span class="p">.</span><span class="nx">pageYOffset</span><span class="p">);</span></div><div class='line' id='LC479'>	<span class="p">}</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>	<span class="nx">targetTagName</span> <span class="o">=</span> <span class="nx">targetElement</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC482'>	<span class="k">if</span> <span class="p">(</span><span class="nx">targetTagName</span> <span class="o">===</span> <span class="s1">&#39;label&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC483'>		<span class="nx">forElement</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">findControl</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">);</span></div><div class='line' id='LC484'>		<span class="k">if</span> <span class="p">(</span><span class="nx">forElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC485'>			<span class="k">this</span><span class="p">.</span><span class="nx">focus</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">);</span></div><div class='line' id='LC486'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsAndroid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC487'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC488'>			<span class="p">}</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>			<span class="nx">targetElement</span> <span class="o">=</span> <span class="nx">forElement</span><span class="p">;</span></div><div class='line' id='LC491'>		<span class="p">}</span></div><div class='line' id='LC492'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">needsFocus</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC493'><br/></div><div class='line' id='LC494'>		<span class="c1">// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.</span></div><div class='line' id='LC495'>		<span class="c1">// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won&#39;t be visible even though the value attribute is updated as the user types (issue #37).</span></div><div class='line' id='LC496'>		<span class="k">if</span> <span class="p">((</span><span class="nx">event</span><span class="p">.</span><span class="nx">timeStamp</span> <span class="o">-</span> <span class="nx">trackingClickStart</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">100</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">top</span> <span class="o">!==</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="nx">targetTagName</span> <span class="o">===</span> <span class="s1">&#39;input&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC497'>			<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC498'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC499'>		<span class="p">}</span></div><div class='line' id='LC500'><br/></div><div class='line' id='LC501'>		<span class="k">this</span><span class="p">.</span><span class="nx">focus</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">);</span></div><div class='line' id='LC502'><br/></div><div class='line' id='LC503'>		<span class="c1">// Select elements need the event to go through on iOS 4, otherwise the selector menu won&#39;t open.</span></div><div class='line' id='LC504'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS4</span> <span class="o">||</span> <span class="nx">targetTagName</span> <span class="o">!==</span> <span class="s1">&#39;select&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC505'>			<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC506'>			<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC507'>		<span class="p">}</span></div><div class='line' id='LC508'><br/></div><div class='line' id='LC509'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC510'>	<span class="p">}</span></div><div class='line' id='LC511'><br/></div><div class='line' id='LC512'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsIOS4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'>		<span class="c1">// Don&#39;t send a synthetic click event if the target element is contained within a parent layer that was scrolled</span></div><div class='line' id='LC515'>		<span class="c1">// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).</span></div><div class='line' id='LC516'>		<span class="nx">scrollParent</span> <span class="o">=</span> <span class="nx">targetElement</span><span class="p">.</span><span class="nx">fastClickScrollParent</span><span class="p">;</span></div><div class='line' id='LC517'>		<span class="k">if</span> <span class="p">(</span><span class="nx">scrollParent</span> <span class="o">&amp;&amp;</span> <span class="nx">scrollParent</span><span class="p">.</span><span class="nx">fastClickLastScrollTop</span> <span class="o">!==</span> <span class="nx">scrollParent</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC518'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC519'>		<span class="p">}</span></div><div class='line' id='LC520'>	<span class="p">}</span></div><div class='line' id='LC521'><br/></div><div class='line' id='LC522'>	<span class="c1">// Prevent the actual click from going though - unless the target node is marked as requiring</span></div><div class='line' id='LC523'>	<span class="c1">// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.</span></div><div class='line' id='LC524'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">needsClick</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC525'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC526'>		<span class="k">this</span><span class="p">.</span><span class="nx">sendClick</span><span class="p">(</span><span class="nx">targetElement</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC527'>	<span class="p">}</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC530'><span class="p">};</span></div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'><span class="cm">/**</span></div><div class='line' id='LC534'><span class="cm"> * On touch cancel, stop tracking the click.</span></div><div class='line' id='LC535'><span class="cm"> *</span></div><div class='line' id='LC536'><span class="cm"> * @returns {void}</span></div><div class='line' id='LC537'><span class="cm"> */</span></div><div class='line' id='LC538'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTouchCancel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC539'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC540'>	<span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC541'>	<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC542'><span class="p">};</span></div><div class='line' id='LC543'><br/></div><div class='line' id='LC544'><br/></div><div class='line' id='LC545'><span class="cm">/**</span></div><div class='line' id='LC546'><span class="cm"> * Determine mouse events which should be permitted.</span></div><div class='line' id='LC547'><span class="cm"> *</span></div><div class='line' id='LC548'><span class="cm"> * @param {Event} event</span></div><div class='line' id='LC549'><span class="cm"> * @returns {boolean}</span></div><div class='line' id='LC550'><span class="cm"> */</span></div><div class='line' id='LC551'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onMouse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC552'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>	<span class="c1">// If a target element was never set (because a touch event was never fired) allow the event</span></div><div class='line' id='LC555'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC556'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC557'>	<span class="p">}</span></div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>	<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">forwardedTouchEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC560'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC561'>	<span class="p">}</span></div><div class='line' id='LC562'><br/></div><div class='line' id='LC563'>	<span class="c1">// Programmatically generated events targeting a specific element should be permitted</span></div><div class='line' id='LC564'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">cancelable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC565'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC566'>	<span class="p">}</span></div><div class='line' id='LC567'><br/></div><div class='line' id='LC568'>	<span class="c1">// Derive and check the target element to see whether the mouse event needs to be permitted;</span></div><div class='line' id='LC569'>	<span class="c1">// unless explicitly enabled, prevent non-touch click events from triggering actions,</span></div><div class='line' id='LC570'>	<span class="c1">// to prevent ghost/doubleclicks.</span></div><div class='line' id='LC571'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">needsClick</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span><span class="p">)</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">cancelNextClick</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'><br/></div><div class='line' id='LC573'>		<span class="c1">// Prevent any user-added listeners declared on FastClick element from being fired.</span></div><div class='line' id='LC574'>		<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">stopImmediatePropagation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC575'>			<span class="nx">event</span><span class="p">.</span><span class="nx">stopImmediatePropagation</span><span class="p">();</span></div><div class='line' id='LC576'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC577'><br/></div><div class='line' id='LC578'>			<span class="c1">// Part of the hack for browsers that don&#39;t support Event#stopImmediatePropagation (e.g. Android 2)</span></div><div class='line' id='LC579'>			<span class="nx">event</span><span class="p">.</span><span class="nx">propagationStopped</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC580'>		<span class="p">}</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>		<span class="c1">// Cancel the event</span></div><div class='line' id='LC583'>		<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC584'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC587'>	<span class="p">}</span></div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'>	<span class="c1">// If the mouse event is permitted, return true for the action to go through.</span></div><div class='line' id='LC590'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC591'><span class="p">};</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'><span class="cm">/**</span></div><div class='line' id='LC595'><span class="cm"> * On actual clicks, determine whether this is a touch-generated click, a click action occurring</span></div><div class='line' id='LC596'><span class="cm"> * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or</span></div><div class='line' id='LC597'><span class="cm"> * an actual click which should be permitted.</span></div><div class='line' id='LC598'><span class="cm"> *</span></div><div class='line' id='LC599'><span class="cm"> * @param {Event} event</span></div><div class='line' id='LC600'><span class="cm"> * @returns {boolean}</span></div><div class='line' id='LC601'><span class="cm"> */</span></div><div class='line' id='LC602'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onClick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC603'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC604'>	<span class="kd">var</span> <span class="nx">permitted</span><span class="p">;</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>	<span class="c1">// It&#39;s possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.</span></div><div class='line' id='LC607'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC608'>		<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC609'>		<span class="k">this</span><span class="p">.</span><span class="nx">trackingClick</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC610'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC611'>	<span class="p">}</span></div><div class='line' id='LC612'><br/></div><div class='line' id='LC613'>	<span class="c1">// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of &#39;fake&#39; click event will be triggered with the submit-type input element as the target.</span></div><div class='line' id='LC614'>	<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;submit&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">event</span><span class="p">.</span><span class="nx">detail</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC615'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC616'>	<span class="p">}</span></div><div class='line' id='LC617'><br/></div><div class='line' id='LC618'>	<span class="nx">permitted</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC619'><br/></div><div class='line' id='LC620'>	<span class="c1">// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser&#39;s click doesn&#39;t go through.</span></div><div class='line' id='LC621'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">permitted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>		<span class="k">this</span><span class="p">.</span><span class="nx">targetElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC623'>	<span class="p">}</span></div><div class='line' id='LC624'><br/></div><div class='line' id='LC625'>	<span class="c1">// If clicks are permitted, return true for the action to go through.</span></div><div class='line' id='LC626'>	<span class="k">return</span> <span class="nx">permitted</span><span class="p">;</span></div><div class='line' id='LC627'><span class="p">};</span></div><div class='line' id='LC628'><br/></div><div class='line' id='LC629'><br/></div><div class='line' id='LC630'><span class="cm">/**</span></div><div class='line' id='LC631'><span class="cm"> * Remove all FastClick&#39;s event listeners.</span></div><div class='line' id='LC632'><span class="cm"> *</span></div><div class='line' id='LC633'><span class="cm"> * @returns {void}</span></div><div class='line' id='LC634'><span class="cm"> */</span></div><div class='line' id='LC635'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">destroy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC636'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC637'>	<span class="kd">var</span> <span class="nx">layer</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">layer</span><span class="p">;</span></div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">deviceIsAndroid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC640'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;mouseover&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC641'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;mousedown&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC642'>		<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;mouseup&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMouse</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC643'>	<span class="p">}</span></div><div class='line' id='LC644'><br/></div><div class='line' id='LC645'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onClick</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC646'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;touchstart&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onTouchStart</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC647'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;touchend&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onTouchEnd</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC648'>	<span class="nx">layer</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;touchcancel&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onTouchCancel</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC649'><span class="p">};</span></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'><br/></div><div class='line' id='LC652'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">notNeeded</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC653'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC654'>	<span class="kd">var</span> <span class="nx">metaViewport</span><span class="p">;</span></div><div class='line' id='LC655'><br/></div><div class='line' id='LC656'>	<span class="c1">// Devices that don&#39;t support touch don&#39;t need FastClick</span></div><div class='line' id='LC657'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">ontouchstart</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC658'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC659'>	<span class="p">}</span></div><div class='line' id='LC660'><br/></div><div class='line' id='LC661'>	<span class="k">if</span> <span class="p">((</span><span class="sr">/Chrome\/[0-9]+/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'>		<span class="c1">// Chrome on Android with user-scalable=&quot;no&quot; doesn&#39;t need FastClick (issue #89)</span></div><div class='line' id='LC664'>		<span class="k">if</span> <span class="p">(</span><span class="nx">FastClick</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deviceIsAndroid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC665'>			<span class="nx">metaViewport</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">&#39;meta[name=viewport]&#39;</span><span class="p">);</span></div><div class='line' id='LC666'>			<span class="k">if</span> <span class="p">(</span><span class="nx">metaViewport</span> <span class="o">&amp;&amp;</span> <span class="nx">metaViewport</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;user-scalable=no&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC667'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC668'>			<span class="p">}</span></div><div class='line' id='LC669'><br/></div><div class='line' id='LC670'>		<span class="c1">// Chrome desktop doesn&#39;t need FastClick (issue #15)</span></div><div class='line' id='LC671'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC672'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC673'>		<span class="p">}</span></div><div class='line' id='LC674'>	<span class="p">}</span></div><div class='line' id='LC675'><br/></div><div class='line' id='LC676'>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC677'><span class="p">};</span></div><div class='line' id='LC678'><br/></div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'><span class="cm">/**</span></div><div class='line' id='LC681'><span class="cm"> * Factory method for creating a FastClick object</span></div><div class='line' id='LC682'><span class="cm"> *</span></div><div class='line' id='LC683'><span class="cm"> * @param {Element} layer The layer to listen on</span></div><div class='line' id='LC684'><span class="cm"> */</span></div><div class='line' id='LC685'><span class="nx">FastClick</span><span class="p">.</span><span class="nx">attach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">layer</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC686'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC687'>	<span class="k">return</span> <span class="k">new</span> <span class="nx">FastClick</span><span class="p">(</span><span class="nx">layer</span><span class="p">);</span></div><div class='line' id='LC688'><span class="p">};</span></div><div class='line' id='LC689'><br/></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC692'><br/></div><div class='line' id='LC693'>	<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC694'>	<span class="nx">define</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC695'>		<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC696'>		<span class="k">return</span> <span class="nx">FastClick</span><span class="p">;</span></div><div class='line' id='LC697'>	<span class="p">});</span></div><div class='line' id='LC698'><span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC699'>	<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">FastClick</span><span class="p">.</span><span class="nx">attach</span><span class="p">;</span></div><div class='line' id='LC700'>	<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">.</span><span class="nx">FastClick</span> <span class="o">=</span> <span class="nx">FastClick</span><span class="p">;</span></div><div class='line' id='LC701'><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC702'>	<span class="nb">window</span><span class="p">.</span><span class="nx">FastClick</span> <span class="o">=</span> <span class="nx">FastClick</span><span class="p">;</span></div><div class='line' id='LC703'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1359500886" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06687s from fe19.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/ftlabs/fastclick/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06739' data-host='fe19'></span>
    
  </body>
</html>

