class StaticController < ApplicationController
  def home
    @project_hash = {
      smitten: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/landing.jpg'
      },
      dlp: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/dlphome.png'
      },
      hanoi: {
        thumbnail_url: 'https://s3-us-west-2.amazonaws.com/gabe-random/hanoiss.png'
      },
    }
    render 'home'
  end
end